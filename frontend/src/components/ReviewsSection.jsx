export default function ReviewsSection() {
  return (
    <>
      <section id="reviews" className="relative w-full h-[300vh] section-watch bg-[var(--bg)]" data-analytics-section="reviews" data-analytics-section-name="Reviews">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-16">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-400/[0.05] rounded-full blur-[120px] z-0 pointer-events-none" />
          <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-pink-500/[0.04] rounded-full blur-[100px] z-0 pointer-events-none" />
          <div className="site-container relative z-10 h-full max-h-[800px] flex flex-col">
            <div className="flex justify-between items-end mb-10 lg:mb-16 shrink-0" data-reveal>
              <div>
                <div className="section-kicker mb-4" data-kicker data-kicker-target="reviews">
                  <span className="section-kicker-line" />
                  <span className="section-kicker-dot" />
                  <span className="section-kicker-label">Что говорят о работе с нами</span>
                </div>
                <h2 className="section-title">Отзывы клиентов</h2>
              </div>
              <div className="pb-2 flex items-baseline gap-1">
                <span id="active-counter" className="text-[32px] lg:text-[40px] font-display font-bold text-cyan-400 leading-none">01</span>
                <span className="text-[16px] lg:text-[20px] font-sans font-medium text-white/30 leading-none">/ 05</span>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-16 flex-1 relative min-h-[400px]" data-reveal style={{"--reveal-delay": '80ms'}}>
              <div className="w-[30px] flex-shrink-0 relative py-4 flex flex-col items-center">
                <div className="absolute top-4 bottom-4 w-[2px] bg-white/10 rounded-full" />
                <div id="progress-fill" className="absolute top-4 w-[2px] bg-cyan-400 rounded-full origin-top shadow-[0_0_10px_rgba(0,212,255,0.8)]" style={{height: 'calc(100% - 32px)', transform: 'scaleY(0)'}} />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between items-center py-4 z-10">
                  <div className="progress-dot w-[14px] h-[14px] rounded-full bg-[var(--bg)] border-2 border-white/20 transition-all duration-300" />
                  <div className="progress-dot w-[14px] h-[14px] rounded-full bg-[var(--bg)] border-2 border-white/20 transition-all duration-300" />
                  <div className="progress-dot w-[14px] h-[14px] rounded-full bg-[var(--bg)] border-2 border-white/20 transition-all duration-300" />
                  <div className="progress-dot w-[14px] h-[14px] rounded-full bg-[var(--bg)] border-2 border-white/20 transition-all duration-300" />
                  <div className="progress-dot w-[14px] h-[14px] rounded-full bg-[var(--bg)] border-2 border-white/20 transition-all duration-300" />
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="review-card absolute w-full top-1/2 left-0 -translate-y-1/2 surface-panel border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 scale-95 z-0 translate-y-[20%] pointer-events-none">
                  <svg className="absolute -top-4 -left-4 w-40 h-40 text-pink-500 opacity-15 pointer-events-none transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div>
                      <div className="flex gap-1.5 mb-8">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-[3px] h-full min-h-[60px] bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                        <p className="text-[20px] lg:text-[26px] italic text-white/95 leading-[1.6] font-light">
                          "Команда AKA выдержала все сроки и превзошла ожидания. Наше приложение набрало 10К пользователей за первый месяц."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-8">
                      <div className="w-14 h-14 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-display font-bold text-cyan-400">А</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display font-semibold text-[18px] text-white">Алексей Петров</h4>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mt-1.5 w-fit">FinStart</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-card absolute w-full top-1/2 left-0 -translate-y-1/2 surface-panel border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 scale-95 z-0 translate-y-[20%] pointer-events-none">
                  <svg className="absolute -top-4 -left-4 w-40 h-40 text-pink-500 opacity-15 pointer-events-none transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div>
                      <div className="flex gap-1.5 mb-8">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-[3px] h-full min-h-[60px] bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                        <p className="text-[20px] lg:text-[26px] italic text-white/95 leading-[1.6] font-light">
                          "Профессиональный подход к каждой детали. Дизайн и UX на высшем уровне."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-8">
                      <div className="w-14 h-14 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-display font-bold text-indigo-400">М</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display font-semibold text-[18px] text-white">Мария Козлова</h4>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mt-1.5 w-fit">HealthNet</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-card absolute w-full top-1/2 left-0 -translate-y-1/2 surface-panel border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 scale-95 z-0 translate-y-[20%] pointer-events-none">
                  <svg className="absolute -top-4 -left-4 w-40 h-40 text-pink-500 opacity-15 pointer-events-none transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div>
                      <div className="flex gap-1.5 mb-8">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-[3px] h-full min-h-[60px] bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                        <p className="text-[20px] lg:text-[26px] italic text-white/95 leading-[1.6] font-light">
                          "Работаем с AKA уже 2 года. Надёжный технический партнёр для долгосрочных проектов."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-8">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-display font-bold text-emerald-400">Д</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display font-semibold text-[18px] text-white">Дмитрий Сидоров</h4>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mt-1.5 w-fit">LogiPro</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-card absolute w-full top-1/2 left-0 -translate-y-1/2 surface-panel border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 scale-95 z-0 translate-y-[20%] pointer-events-none">
                  <svg className="absolute -top-4 -left-4 w-40 h-40 text-pink-500 opacity-15 pointer-events-none transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div>
                      <div className="flex gap-1.5 mb-8">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-[3px] h-full min-h-[60px] bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                        <p className="text-[20px] lg:text-[26px] italic text-white/95 leading-[1.6] font-light">
                          "Запустили платформу за 2 месяца. Быстро, качественно, в рамках бюджета."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-8">
                      <div className="w-14 h-14 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-display font-bold text-rose-400">Е</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display font-semibold text-[18px] text-white">Елена Новикова</h4>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mt-1.5 w-fit">EduTech</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-card absolute w-full top-1/2 left-0 -translate-y-1/2 surface-panel border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 scale-95 z-0 translate-y-[20%] pointer-events-none">
                  <svg className="absolute -top-4 -left-4 w-40 h-40 text-pink-500 opacity-15 pointer-events-none transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div>
                      <div className="flex gap-1.5 mb-8">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-[3px] h-full min-h-[60px] bg-pink-500 rounded-full flex-shrink-0 mt-2" />
                        <p className="text-[20px] lg:text-[26px] italic text-white/95 leading-[1.6] font-light">
                          "Прекрасное понимание бизнес-задач. Ребята не просто пишут код, они предлагают решения."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-8">
                      <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-display font-bold text-blue-400">М</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display font-semibold text-[18px] text-white">Михаил Соколов</h4>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mt-1.5 w-fit">FinTech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
