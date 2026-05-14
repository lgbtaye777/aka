export default function ShowcasesSection() {
  return (
    <>
      <section id="showcases" className="section-space pt-0 section-watch" data-analytics-section="showcases" data-analytics-section-name="Showcases">
        <div className="site-container">
          <div className="content-shell">
            <div className="relative text-center max-w-[860px] mx-auto mb-12">
              <svg className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full opacity-10 pointer-events-none z-[-1] hidden lg:block" viewBox="0 0 600 300" fill="none" aria-hidden="true">
                <path d="M0 50 h200 l50 50 h350" stroke="url(#paint0_linear_showcase)" strokeWidth={1} strokeDasharray="4 4" />
                <path d="M0 150 h150 l50 -50 h400" stroke="url(#paint0_linear_showcase)" strokeWidth={1} />
                <defs>
                  <linearGradient id="paint0_linear_showcase" x1={0} y1={0} x2={600} y2={0} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00D4FF" stopOpacity={0} />
                    <stop offset="0.5" stopColor="#00D4FF" />
                    <stop offset={1} stopColor="#00D4FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="section-kicker justify-center" data-kicker data-kicker-target="showcases">
                <span className="section-kicker-pill" />
                <span className="section-kicker-label">Наши проекты</span>
              </div>
              <h2 className="section-title mt-6 mb-6 mx-auto max-w-[720px]">
                Кейсы и цифровые
                <br className="hidden sm:block" />
                <span className="title-accent">
                  продукты для бизнеса
                  <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true" className="mx-auto">
                    <path d="M0,8 Q30,0 60,8 T100,4" stroke="currentColor" strokeWidth={4} fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="section-lead mx-auto max-w-[640px]">
                Показываем проекты, в которых мы помогли компаниям запустить мобильные приложения, веб-сервисы, платформы и дизайн-системы.
              </p>
              <p className="section-lead mx-auto max-w-[640px] mt-3">
                Каждый кейс отражает наш подход: от бизнес-задачи до готового результата.
              </p>
            </div>
            <div className="showcase-filters mt-14 mb-12 flex flex-col items-center">
              <div className="filter-row sm:justify-center w-full">
                <span className="filter-label text-center sm:text-left">По типу:</span>
                <div className="filter-pills justify-center sm:justify-start">
                  <button type="button" className="filter-pill is-primary">Все</button>
                  <button type="button" className="filter-pill">Mobile</button>
                  <button type="button" className="filter-pill">Web</button>
                  <button type="button" className="filter-pill">Design</button>
                </div>
              </div>
              <div className="filter-row sm:justify-center w-full">
                <span className="filter-label text-center sm:text-left">По отрасли:</span>
                <div className="filter-pills justify-center sm:justify-start">
                  <button type="button" className="filter-pill is-secondary">Все</button>
                  <button type="button" className="filter-pill">Финтех</button>
                  <button type="button" className="filter-pill">Медицина</button>
                  <button type="button" className="filter-pill">E-commerce</button>
                  <button type="button" className="filter-pill">Логистика</button>
                  <button type="button" className="filter-pill">Образование</button>
                </div>
              </div>
            </div>
            <div className="showcase-grid">
              <article className="group showcase-card showcase-card--red" data-reveal>
                <div className="showcase-visual bg-gradient-to-br from-[#F92672] to-[#FF4B2B]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12141A] opacity-40 mix-blend-multiply z-10" />
                  <div className="relative w-[140px] h-[280px] bg-[#0B0C10] rounded-[28px] border-[6px] border-[#1A1C24] shadow-[0_20px_40px_rgba(0,0,0,0.5)] rotate-12 translate-y-10 translate-x-10 group-hover:rotate-[8deg] group-hover:-translate-y-2 transition-transform duration-700 p-3 z-20 flex flex-col gap-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#1A1C24] rounded-b-lg" />
                    <div className="w-full aspect-square mt-4 relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                      <div className="absolute inset-0 rounded-full border-4 border-[#F92672] border-t-transparent border-l-transparent rotate-45" />
                      <div className="absolute inset-2 rounded-full border-4 border-white/10" />
                      <div className="absolute inset-2 rounded-full border-4 border-[#FF4B2B] border-b-transparent border-r-transparent -rotate-12" />
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="w-full h-8 bg-white/5 rounded-lg flex items-center px-2 gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#F92672]" />
                        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-[#F92672]" />
                        </div>
                      </div>
                      <div className="w-full h-8 bg-white/5 rounded-lg flex items-center px-2 gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF4B2B]" />
                        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-[#FF4B2B]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-content">
                  <div className="showcase-meta">
                    <span className="meta-badge meta-badge--cyan">Mobile</span>
                    <span className="meta-secondary">Здоровье / Lifestyle</span>
                  </div>
                  <h3 className="showcase-title mb-2">FitTrack Pro</h3>
                  <p className="showcase-text mb-6 flex-1">
                    Фитнес-приложение с ИИ-тренером и трекингом активности.
                  </p>
                  <div className="stack-tags mb-6">
                    <span className="stack-tag">Flutter</span>
                    <span className="stack-tag">Firebase</span>
                    <span className="stack-tag">ML Kit</span>
                  </div>
                  <div className="showcase-footer">
                    <div className="showcase-cta">
                      <span className="showcase-cta-text">Смотреть проект</span>
                      <svg className="showcase-cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
              <article className="group showcase-card showcase-card--cyan" data-reveal style={{"--reveal-delay": '70ms'}}>
                <div className="showcase-visual bg-gradient-to-br from-[#12141A] via-[#1A1C24] to-[#00D4FF]/40">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-20" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#12141A] to-transparent z-10" />
                  <div className="w-full h-full bg-[#0B0C10]/80 backdrop-blur-md rounded-t-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-2 transition-transform duration-700 z-20">
                    <div className="h-8 bg-[#12141A]/80 border-b border-white/10 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <div className="mx-auto w-1/3 h-2 bg-white/5 rounded-full" />
                    </div>
                    <div className="flex-1 flex p-3 gap-3">
                      <div className="w-[25%] h-full flex flex-col gap-2 border-r border-white/5 pr-3">
                        <div className="w-full h-3 bg-white/10 rounded-sm mb-2" />
                        <div className="w-2/3 h-2 bg-white/5 rounded-sm" />
                        <div className="w-3/4 h-2 bg-white/5 rounded-sm" />
                        <div className="w-1/2 h-2 bg-cyan-400/40 rounded-sm" />
                      </div>
                      <div className="flex-1 h-full flex flex-col gap-3">
                        <div className="flex gap-2">
                          <div className="flex-1 h-12 bg-white/5 rounded-md p-2">
                            <div className="w-1/2 h-2 bg-cyan-400/50 rounded-sm mb-2" />
                            <div className="w-3/4 h-3 bg-white/20 rounded-sm" />
                          </div>
                          <div className="flex-1 h-12 bg-white/5 rounded-md p-2">
                            <div className="w-1/2 h-2 bg-white/20 rounded-sm mb-2" />
                            <div className="w-2/3 h-3 bg-white/40 rounded-sm" />
                          </div>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-md p-2 flex flex-col gap-2">
                          <div className="w-full h-4 bg-white/10 rounded-sm" />
                          <div className="w-full h-4 bg-white/5 rounded-sm" />
                          <div className="w-full h-4 bg-white/5 rounded-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-content">
                  <div className="showcase-meta">
                    <span className="meta-badge meta-badge--cyan">Web</span>
                    <span className="meta-secondary">B2B / Commerce</span>
                  </div>
                  <h3 className="showcase-title mb-2">CloudMarket</h3>
                  <p className="showcase-text mb-6 flex-1">
                    B2B-маркетплейс для торговли строительными материалами.
                  </p>
                  <div className="stack-tags mb-6">
                    <span className="stack-tag">React</span>
                    <span className="stack-tag">Node.js</span>
                    <span className="stack-tag">PostgreSQL</span>
                  </div>
                  <div className="showcase-footer">
                    <div className="showcase-cta">
                      <span className="showcase-cta-text">Смотреть проект</span>
                      <svg className="showcase-cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
              <article className="group showcase-card showcase-card--emerald" data-reveal style={{"--reveal-delay": '140ms'}}>
                <div className="showcase-visual bg-gradient-to-br from-[#00695C] to-[#00BFA5]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-20" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#12141A] to-transparent z-10" />
                  <div className="relative w-full h-full flex items-center justify-center z-20 group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute w-[200px] h-[120px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-xl -translate-y-6 translate-x-4 rotate-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-400/20 mb-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-3/4 h-2 bg-white/40 rounded-full mb-2" />
                      <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                    </div>
                    <div className="absolute w-[220px] h-[100px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl translate-y-6 -translate-x-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-300 relative">
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-[#00BFA5] rounded-full" />
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-3 bg-white rounded-full mb-2 opacity-90" />
                        <div className="w-2/3 h-2 bg-white/50 rounded-full mb-2" />
                        <svg className="w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path d="M0 10 L20 10 L25 5 L35 18 L45 2 L55 15 L60 10 L100 10" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-content">
                  <div className="showcase-meta">
                    <span className="meta-badge meta-badge--cyan">Mobile</span>
                    <span className="meta-secondary">Медицина</span>
                  </div>
                  <h3 className="showcase-title mb-2">MedConnect</h3>
                  <p className="showcase-text mb-6 flex-1">
                    Телемедицина: видеоконсультации, запись и электронные рецепты.
                  </p>
                  <div className="stack-tags mb-6">
                    <span className="stack-tag">Swift</span>
                    <span className="stack-tag">Kotlin</span>
                    <span className="stack-tag">WebRTC</span>
                  </div>
                  <div className="showcase-footer">
                    <div className="showcase-cta">
                      <span className="showcase-cta-text">Смотреть проект</span>
                      <svg className="showcase-cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
              <article className="group showcase-card showcase-card--purple" data-reveal>
                <div className="showcase-visual bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2]">
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#12141A] to-transparent z-10" />
                  <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 z-20 group-hover:scale-[1.03] transition-transform duration-700">
                    <div className="w-3/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl -translate-x-4">
                      <div className="flex items-end gap-3 mb-2">
                        <span className="text-3xl font-display font-bold text-white leading-none">Aa</span>
                        <div className="w-1/2 h-2 bg-white/30 rounded-full mb-1" />
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mb-1" />
                      <div className="w-2/3 h-1.5 bg-white/20 rounded-full" />
                    </div>
                    <div className="flex gap-3 translate-x-4">
                      <div className="w-12 h-16 bg-[#12141A] rounded-lg border border-white/10 shadow-lg flex flex-col p-1">
                        <div className="w-full flex-1 bg-[#0B0C10] rounded-md mb-1" />
                        <div className="w-full h-2 bg-white/10 rounded-sm" />
                      </div>
                      <div className="w-12 h-16 bg-[#12141A] rounded-lg border border-white/10 shadow-lg flex flex-col p-1 -translate-y-2">
                        <div className="w-full flex-1 bg-purple-500 rounded-md mb-1" />
                        <div className="w-full h-2 bg-white/10 rounded-sm" />
                      </div>
                      <div className="w-12 h-16 bg-[#12141A] rounded-lg border border-white/10 shadow-lg flex flex-col p-1 -translate-y-4">
                        <div className="w-full flex-1 bg-pink-500 rounded-md mb-1" />
                        <div className="w-full h-2 bg-white/10 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-content">
                  <div className="showcase-meta">
                    <span className="meta-badge meta-badge--cyan">Design</span>
                    <span className="meta-secondary">Финтех</span>
                  </div>
                  <h3 className="showcase-title mb-2">BrandHub</h3>
                  <p className="showcase-text mb-6 flex-1">
                    Ребрендинг и дизайн-система для финтех-стартапа.
                  </p>
                  <div className="stack-tags mb-6">
                    <span className="stack-tag">Figma</span>
                    <span className="stack-tag">Principle</span>
                  </div>
                  <div className="showcase-footer">
                    <div className="showcase-cta">
                      <span className="showcase-cta-text">Смотреть проект</span>
                      <svg className="showcase-cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
              <article className="group showcase-card showcase-card--blue" data-reveal style={{"--reveal-delay": '70ms'}}>
                <div className="showcase-visual bg-gradient-to-br from-[#0F172A] to-[#1E3A8A]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-10" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#12141A] to-transparent z-10" />
                  <div className="relative w-full h-full flex items-center justify-center z-20 group-hover:scale-105 transition-transform duration-700">
                    <svg className="absolute w-full h-full inset-0" viewBox="0 0 300 200" fill="none">
                      <path d="M 50 150 Q 150 50 250 100" stroke="rgba(96, 165, 250, 0.4)" strokeWidth={3} strokeDasharray="6 6" />
                      <path d="M 50 150 Q 150 50 250 100" stroke="#60A5FA" strokeWidth={3} className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{strokeDasharray: 400, strokeDashoffset: 400, animation: 'showcaseDrawLine 3s ease-in-out infinite alternate'}} />
                    </svg>
                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)] translate-x-[-100px] translate-y-[50px] border-2 border-[#0F172A]" />
                    <div className="absolute w-5 h-5 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] translate-x-[100px] border-4 border-blue-500" />
                    <div className="absolute bg-[#0B0C10]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl translate-x-[20px] translate-y-[-40px] w-[140px]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <div className="w-1/2 h-2 bg-white/60 rounded-full" />
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mb-1" />
                      <div className="w-3/4 h-1.5 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="showcase-content">
                  <div className="showcase-meta">
                    <span className="meta-badge meta-badge--cyan">Web</span>
                    <span className="meta-secondary">Логистика</span>
                  </div>
                  <h3 className="showcase-title mb-2">LogiTrack</h3>
                  <p className="showcase-text mb-6 flex-1">
                    Система управления логистикой и отслеживания грузов.
                  </p>
                  <div className="stack-tags mb-6">
                    <span className="stack-tag">Vue.js</span>
                    <span className="stack-tag">Python</span>
                    <span className="stack-tag">Docker</span>
                  </div>
                  <div className="showcase-footer">
                    <div className="showcase-cta">
                      <span className="showcase-cta-text">Смотреть проект</span>
                      <svg className="showcase-cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
              <article className="group showcase-card showcase-card--orange" data-reveal style={{"--reveal-delay": '140ms'}}>
                <div className="showcase-visual bg-gradient-to-br from-[#D97706] to-[#B45309]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-20" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#12141A] to-transparent z-10" />
                  <div className="relative w-[90%] h-[160px] bg-[#12141A]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex flex-col p-3 z-20 group-hover:scale-105 transition-transform duration-700">
                    <div className="w-full flex-1 bg-[#0B0C10] rounded-lg mb-3 relative flex items-center justify-center overflow-hidden">
                      <div className="w-12 h-12 rounded-full bg-orange-500/80 backdrop-blur flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-orange-500" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-1.5 w-1/2">
                        <div className="w-full h-2 bg-white/60 rounded-full" />
                        <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                      </div>
                      <div className="w-16 h-6 bg-white/10 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="showcase-content">
                  <div className="showcase-meta">
                    <span className="meta-badge meta-badge--cyan">Web</span>
                    <span className="meta-secondary">Образование</span>
                  </div>
                  <h3 className="showcase-title mb-2">EduPlatform</h3>
                  <p className="showcase-text mb-6 flex-1">
                    Онлайн-платформа обучения с видеокурсами и тестированием.
                  </p>
                  <div className="stack-tags mb-6">
                    <span className="stack-tag">React</span>
                    <span className="stack-tag">AWS</span>
                    <span className="stack-tag">MongoDB</span>
                  </div>
                  <div className="showcase-footer">
                    <div className="showcase-cta">
                      <span className="showcase-cta-text">Смотреть проект</span>
                      <svg className="showcase-cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-16 sm:mt-20 text-center relative z-20 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300" data-reveal>
              <p className="text-[13px] font-semibold text-slate-400 tracking-wide mb-3">
                Откройте кейс, чтобы увидеть задачу, решение и результат.
              </p>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
