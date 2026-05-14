import { useEffect } from 'react';
import { getOrCreateSessionId, trackEvent } from '../analytics/analyticsClient.js';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8000' : window.location.origin);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useLandingInteractions() {
  useMobileMenu();
  useHeaderScrollState();
  useRevealOnScroll();
  useActiveSectionKicker();
  useProcessProgress();
  useCountup();
  useStackScene();
  useReviewsScroll();
  useLazyYandexMaps();
  useLeadForm();
}

function useMobileMenu() {
  useEffect(() => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!menuToggle || !mobileMenu) return undefined;

      const openMenu = () => {
        mobileMenu.hidden = false;
        menuToggle.setAttribute('aria-expanded', 'true');
        trackEvent({
          event_type: 'mobile_menu_open',
          event_name: 'mobile_menu_open',
          section_id: 'header',
          element_id: 'menuToggle',
          element_label: 'Mobile menu',
          element_role: 'menu',
        });
      };

      const closeMenu = () => {
        mobileMenu.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
        trackEvent({
          event_type: 'mobile_menu_close',
          event_name: 'mobile_menu_close',
          section_id: 'header',
          element_id: 'menuToggle',
          element_label: 'Mobile menu',
          element_role: 'menu',
        });
      };

    const onToggleClick = () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu();
      else openMenu();
    };

    const onKeydown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    const onDocumentClick = (event) => {
      const isInside = mobileMenu.contains(event.target) || menuToggle.contains(event.target);
      if (!isInside && !mobileMenu.hidden) closeMenu();
    };

    const links = Array.from(mobileMenu.querySelectorAll('a'));
    menuToggle.addEventListener('click', onToggleClick);
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onDocumentClick);
    links.forEach((link) => link.addEventListener('click', closeMenu));

    return () => {
      menuToggle.removeEventListener('click', onToggleClick);
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('click', onDocumentClick);
      links.forEach((link) => link.removeEventListener('click', closeMenu));
    };
  }, []);
}

function useHeaderScrollState() {
  useEffect(() => {
    const headerInner = document.getElementById('headerInner');
    if (!headerInner) return undefined;

    const syncHeaderState = () => {
      if (window.scrollY > 40) headerInner.classList.add('is-scrolled');
      else headerInner.classList.remove('is-scrolled');
    };

    syncHeaderState();
    window.addEventListener('scroll', syncHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', syncHeaderState);
  }, []);
}

function useRevealOnScroll() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!revealItems.length || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    });

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);
}

function useActiveSectionKicker() {
  useEffect(() => {
    const sectionKickers = Array.from(document.querySelectorAll('[data-kicker]'));
    const watchSections = [
      { id: 'home', el: document.getElementById('home') },
      { id: 'services', el: document.getElementById('services') },
      { id: 'advantages', el: document.getElementById('advantages') },
      { id: 'approach', el: document.getElementById('approach') },
      { id: 'showcases', el: document.getElementById('showcases') },
      { id: 'process', el: document.getElementById('process') },
      { id: 'stack', el: document.getElementById('stack') },
      { id: 'reviews', el: document.getElementById('reviews') },
      { id: 'contacts', el: document.getElementById('contacts') },
      { id: 'blog', el: document.getElementById('blog') },
    ].filter((item) => item.el);

    let activeSectionId = 'home';

    const setActiveKicker = (id) => {
      if (!id || activeSectionId === id) return;
      activeSectionId = id;
      sectionKickers.forEach((kicker) => {
        kicker.classList.toggle('is-active', kicker.dataset.kickerTarget === id);
      });
    };

    if (!('IntersectionObserver' in window) || !watchSections.length) {
      setActiveKicker('home');
      return undefined;
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

      if (visible.length) setActiveKicker(visible[0].target.id);
    }, {
      threshold: [0.05, 0.15, 0.3, 0.5],
      rootMargin: '-15% 0px -35% 0px',
    });

    watchSections.forEach(({ el }) => sectionObserver.observe(el));
    setActiveKicker('home');

    return () => sectionObserver.disconnect();
  }, []);
}

function useProcessProgress() {
  useEffect(() => {
    const processSection = document.getElementById('processSection');
    const processCards = Array.from(document.querySelectorAll('.process-card'));
    const processMilestones = Array.from(document.querySelectorAll('.process-milestone'));
    const processMobileMilestones = Array.from(document.querySelectorAll('.process-mobile-milestone'));
    const processBeam = document.getElementById('processBeam');
    const processBeamTip = document.getElementById('processBeamTip');
    const processBeamPct = document.getElementById('processBeamPct');
    const processMobileBeam = document.getElementById('processMobileBeam');
    const processMobileTip = document.getElementById('processMobileTip');
    const processMobilePct = document.getElementById('processMobilePct');

    const updateProcess = () => {
      if (!processSection || !processCards.length) return;
      const rect = processSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, processSection.offsetHeight - vh);
      const scrolled = -rect.top;
      const progress = clamp(scrolled / total, 0, 1);
      const pct = Math.round(Math.min(progress / 0.95, 1) * 100);
      const isMobile = window.innerWidth < 1024;

      if (processBeam) processBeam.style.height = `${pct}%`;
      if (processBeamTip) processBeamTip.style.top = `${pct}%`;
      if (processBeamPct) processBeamPct.textContent = String(pct);
      if (processMobileBeam) processMobileBeam.style.width = `${pct}%`;
      if (processMobileTip) processMobileTip.style.left = `${pct}%`;
      if (processMobilePct) processMobilePct.textContent = String(pct);

      if (isMobile) {
        const activeIndex = Math.min(processCards.length - 1, Math.floor(progress * processCards.length));
        processCards.forEach((card, index) => card.classList.toggle('is-visible', index === activeIndex));
      } else {
        processCards.forEach((card) => {
          const trigger = parseFloat(card.dataset.at || '0');
          card.classList.toggle('is-visible', progress >= trigger - 0.1);
        });
      }

      const points = [0.05, 0.25, 0.5, 0.75, 0.95];
      processMilestones.forEach((milestone, index) => {
        milestone.classList.toggle('is-lit', progress >= points[index] - 0.02);
      });
      processMobileMilestones.forEach((milestone, index) => {
        milestone.classList.toggle('is-lit', progress >= points[index] - 0.02);
      });
    };

    let rafPending = false;
    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        updateProcess();
        rafPending = false;
      });
    };

    updateProcess();
    window.addEventListener('resize', updateProcess);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateProcess);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

function useCountup() {
  useEffect(() => {
    const countupItems = Array.from(document.querySelectorAll('[data-countup]'));
    if (!countupItems.length || !('IntersectionObserver' in window)) return undefined;

    const frameIds = new Set();
    const countupObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.countupPlayed === 'true') return;

        const target = Number(el.dataset.countup || 0);
        const start = Number(el.dataset.countupStart || 0);
        const duration = Number(el.dataset.countupDuration || 1450);
        const decimals = Number(el.dataset.countupDecimals || 0);
        const minDigits = Number(el.dataset.countupPad || 0);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const formatValue = (value) => {
          let fixed = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
          if (decimals === 0 && minDigits > 0) fixed = fixed.padStart(minDigits, '0');
          return `${prefix}${fixed}${suffix}`;
        };

        el.dataset.countupPlayed = 'true';
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = start + ((target - start) * eased);
          el.classList.add('is-animating');
          el.textContent = formatValue(value);

          if (progress < 1) {
            const frameId = requestAnimationFrame(tick);
            frameIds.add(frameId);
          } else {
            el.textContent = formatValue(target);
            el.classList.remove('is-animating');
          }
        };

        const frameId = requestAnimationFrame(tick);
        frameIds.add(frameId);
        countupObserver.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

    countupItems.forEach((item) => countupObserver.observe(item));

    return () => {
      countupObserver.disconnect();
      frameIds.forEach((frameId) => cancelAnimationFrame(frameId));
    };
  }, []);
}

function useStackScene() {
  useEffect(() => {
    const stackScene = document.querySelector('.stack-scene');
    if (!stackScene || !('IntersectionObserver' in window)) return undefined;

    const stackObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) stackScene.classList.add('is-visible');
        else stackScene.classList.remove('is-visible');
      });
    }, { threshold: 0.3 });

    stackObserver.observe(stackScene);
    return () => stackObserver.disconnect();
  }, []);
}

function useReviewsScroll() {
  useEffect(() => {
    const reviewsSection = document.getElementById('reviews');
    const progressFill = document.getElementById('progress-fill');
    const dots = Array.from(document.querySelectorAll('.progress-dot'));
    const reviewCards = Array.from(document.querySelectorAll('.review-card'));
    const counterElement = document.getElementById('active-counter');

    if (!reviewsSection || !progressFill || !reviewCards.length) return undefined;

    const totalCards = reviewCards.length;
    const dotThresholds = [0, 0.25, 0.5, 0.75, 1];

    const handleReviewsScroll = () => {
      const rect = reviewsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = reviewsSection.offsetHeight - windowHeight;
      const scrolled = -rect.top;

      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      progressFill.style.transform = `scaleY(${progress})`;

      let activeIndex = Math.round(progress * (totalCards - 1));
      activeIndex = Math.max(0, Math.min(totalCards - 1, activeIndex));

      if (counterElement) counterElement.textContent = `0${activeIndex + 1}`;

      dots.forEach((dot, index) => {
        if (progress >= dotThresholds[index] - 0.05) {
          dot.classList.add('bg-cyan-400', 'border-cyan-400', 'shadow-[0_0_15px_rgba(0,212,255,0.6)]');
          dot.classList.remove('bg-[var(--bg)]', 'border-white/20');
        } else {
          dot.classList.remove('bg-cyan-400', 'border-cyan-400', 'shadow-[0_0_15px_rgba(0,212,255,0.6)]');
          dot.classList.add('bg-[var(--bg)]', 'border-white/20');
        }
      });

      reviewCards.forEach((card, index) => {
        if (index === activeIndex) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(-50%) scale(1)';
          card.style.zIndex = '10';
          card.style.pointerEvents = 'auto';
        } else if (index < activeIndex) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(-80%) scale(0.95)';
          card.style.zIndex = '0';
          card.style.pointerEvents = 'none';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(-20%) scale(0.95)';
          card.style.zIndex = '0';
          card.style.pointerEvents = 'none';
        }
      });
    };

    let rafPending = false;
    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        handleReviewsScroll();
        rafPending = false;
      });
    };

    handleReviewsScroll();
    window.addEventListener('resize', handleReviewsScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleReviewsScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

function useLazyYandexMaps() {
  useEffect(() => {
    const mapIframes = Array.from(document.querySelectorAll('[id^="yandex-map-"]'));
    if (!mapIframes.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      mapIframes.forEach((iframe) => {
        const dataSrc = iframe.getAttribute('data-src');
        if (dataSrc) iframe.setAttribute('src', dataSrc);
      });
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const iframe = entry.target;
        const dataSrc = iframe.getAttribute('data-src');
        if (dataSrc) {
          iframe.setAttribute('src', dataSrc);
          iframe.removeAttribute('data-src');
          observer.unobserve(iframe);
        }
      });
    }, { rootMargin: '100px' });

    mapIframes.forEach((iframe) => observer.observe(iframe));
    return () => observer.disconnect();
  }, []);
}

function useLeadForm() {
  useEffect(() => {
    const leadForm = document.getElementById('leadForm');
    const successModal = document.getElementById('successModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalPanel = document.getElementById('modalPanel');
    const projectTypeSelect = document.getElementById('projectType');
    const calcResultText = document.getElementById('calcResult');
    if (!leadForm) return undefined;
    let formStarted = false;

    const trackFormStart = () => {
      if (formStarted) return;
      formStarted = true;
      trackEvent({
        event_type: 'form_start',
        event_name: 'contact_form_start',
        section_id: 'contacts',
        section_name: 'Contacts',
        element_id: 'leadForm',
        element_label: 'Lead form',
        element_role: 'form',
      });
    };

    const showModal = () => {
      if (!successModal || !modalPanel) return;
      successModal.classList.remove('opacity-0', 'pointer-events-none');
      successModal.setAttribute('aria-hidden', 'false');
      modalPanel.classList.remove('scale-95');
      modalPanel.classList.add('scale-100');
      trackEvent({
        event_type: 'modal_open',
        event_name: 'success_modal_open',
        section_id: 'contacts',
        element_id: 'successModal',
        element_label: 'Success modal',
        element_role: 'modal',
      });
    };

    const hideModal = () => {
      if (!successModal || !modalPanel) return;
      successModal.classList.add('opacity-0', 'pointer-events-none');
      successModal.setAttribute('aria-hidden', 'true');
      modalPanel.classList.remove('scale-100');
      modalPanel.classList.add('scale-95');
      trackEvent({
        event_type: 'modal_close',
        event_name: 'success_modal_close',
        section_id: 'contacts',
        element_id: 'successModal',
        element_label: 'Success modal',
        element_role: 'modal',
      });
    };

    const onProjectTypeChange = (event) => {
      if (!calcResultText) return;
      const val = event.target.value;
      if (val === 'Индивидуально') calcResultText.innerText = 'Индивидуально';
      else calcResultText.innerText = `от ${val} ₽`;
    };

    const onSubmit = async (event) => {
      event.preventDefault();

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn?.innerText || '';

      if (submitBtn) {
        submitBtn.innerText = 'Отправка...';
        submitBtn.disabled = true;
      }

      const selectedOption = projectTypeSelect
        ? projectTypeSelect.options[projectTypeSelect.selectedIndex].text
        : '';
      const calculatedPrice = calcResultText?.innerText || '';

      const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        company: document.getElementById('company')?.value || '',
        message: document.getElementById('message')?.value || '',
        project_type: selectedOption,
        budget: calculatedPrice,
        analytics_session_id: getOrCreateSessionId(),
      };

      try {
        trackEvent({
          event_type: 'form_submit_attempt',
          event_name: 'contact_form_submit_attempt',
          section_id: 'contacts',
          section_name: 'Contacts',
          element_id: 'leadForm',
          element_label: 'Lead form',
          element_role: 'form',
        });
        const response = await fetch(`${API_URL}/api/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        let result = null;
        try {
          result = await response.json();
        } catch {
          result = null;
        }

        if (response.ok && result?.status === 'success') {
          trackEvent({
            event_type: 'form_submit_success',
            event_name: 'contact_form_submit_success',
            section_id: 'contacts',
            section_name: 'Contacts',
            element_id: 'leadForm',
            element_label: 'Lead form',
            element_role: 'form',
            metadata_json: { lead_id: result.id },
          });
          showModal();
          leadForm.reset();
          if (calcResultText) calcResultText.innerText = 'от 300 000 ₽';
        } else {
          trackEvent({
            event_type: 'form_submit_error',
            event_name: 'contact_form_submit_error',
            section_id: 'contacts',
            section_name: 'Contacts',
            element_id: 'leadForm',
            element_label: 'Lead form',
            element_role: 'form',
          });
          alert(result?.message || 'Произошла ошибка при отправке. Попробуйте позже.');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        trackEvent({
          event_type: 'form_submit_error',
          event_name: 'contact_form_submit_network_error',
          section_id: 'contacts',
          section_name: 'Contacts',
          element_id: 'leadForm',
          element_label: 'Lead form',
          element_role: 'form',
        });
        alert('Не удалось связаться с сервером. Проверьте, запущен ли бэкенд.');
      } finally {
        if (submitBtn) {
          submitBtn.innerText = originalBtnText;
          submitBtn.disabled = false;
        }
      }
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);
    if (modalOverlay) modalOverlay.addEventListener('click', hideModal);
    if (projectTypeSelect) projectTypeSelect.addEventListener('change', onProjectTypeChange);
    leadForm.addEventListener('focusin', trackFormStart);
    leadForm.addEventListener('input', trackFormStart);
    leadForm.addEventListener('submit', onSubmit);

    return () => {
      if (closeModalBtn) closeModalBtn.removeEventListener('click', hideModal);
      if (modalOverlay) modalOverlay.removeEventListener('click', hideModal);
      if (projectTypeSelect) projectTypeSelect.removeEventListener('change', onProjectTypeChange);
      leadForm.removeEventListener('focusin', trackFormStart);
      leadForm.removeEventListener('input', trackFormStart);
      leadForm.removeEventListener('submit', onSubmit);
    };
  }, []);
}
