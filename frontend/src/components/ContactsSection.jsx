export default function ContactsSection() {
  return (
    <>
      <section id="contacts" className="section-space pt-0 relative z-10 section-watch" data-analytics-section="contacts" data-analytics-section-name="Contacts">
        <div className="site-container">
          <div className="content-shell">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-12 xl:gap-16 items-start">
              <div className="xl:col-span-5 flex flex-col items-start justify-start pt-2 xl:pt-6" data-reveal>
                <div className="section-kicker" data-kicker data-kicker-target="contacts">
                  <span className="section-kicker-line" />
                  <span className="section-kicker-dot" />
                  <span className="section-kicker-label">Контакты</span>
                </div>
                <h2 className="section-title mt-8 mb-10 sm:mb-12 max-w-[12ch]">
                  Готовы
                  <br />
                  запустить
                  <br />
                  <span className="title-accent">
                    проект?
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,8 Q30,0 60,8 T100,4" stroke="currentColor" strokeWidth={4} fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p className="section-lead max-w-[34rem] mb-10 sm:mb-12">
                  Расскажите о задаче, и мы предложим оптимальный формат реализации:
                  от консультации и оценки до полноценной разработки под ключ.
                </p>
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 w-full">
                  <a href="mailto:hello@akatechnology.ru" className="flex items-center gap-4 sm:gap-5 group w-full max-w-max focus-ring rounded-xl">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgba(255,255,255,.04)] border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-[15px] sm:text-[17px] text-slate-300 group-hover:text-white transition-colors duration-300 break-all sm:break-normal">
                      hello@akatechnology.ru
                    </span>
                  </a>
                  <a href="tel:+73832874192" className="flex items-center gap-4 sm:gap-5 group w-full max-w-max focus-ring rounded-xl">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgba(255,255,255,.04)] border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-[15px] sm:text-[17px] text-slate-300 group-hover:text-white transition-colors duration-300">
                      +7 (383) 287-41-92
                    </span>
                  </a>
                  <a href="https://t.me/akatechnology" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-5 group w-full max-w-max focus-ring rounded-xl">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgba(255,255,255,.04)] border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </div>
                    <span className="text-[15px] sm:text-[17px] text-slate-300 group-hover:text-white transition-colors duration-300">
                      @akatechnology
                    </span>
                  </a>
                  <div className="flex items-start gap-4 sm:gap-5 w-full">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgba(255,255,255,.04)] border border-white/5 flex items-center justify-center text-cyan-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </div>
                    <span className="text-[15px] sm:text-[17px] text-slate-300 leading-relaxed max-w-[28rem]">
                      г. Новосибирск, ул. Дуси Ковальчук, 252
                    </span>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-x-5 gap-y-4 sm:gap-x-6">
                  <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(249,38,114,0.8)] focus-ring rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Behance" className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(249,38,114,0.8)] focus-ring rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} className="sm:w-[28px] sm:h-[28px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.162 4.325h-7.259c.144 1.156 1.121 2.016 2.434 2.016 1.17 0 1.954-.452 2.274-1.282h2.588zm-5.06-3.819c-.066-.826-.749-1.559-1.85-1.559-1.127 0-1.874.654-2.022 1.559h3.872zm-12.666 4.819h-6v-15h6.697c2.146 0 4.293.921 4.293 3.593 0 1.455-1.111 2.474-2.261 2.822 1.597.355 2.764 1.638 2.764 3.315 0 2.503-2.08 5.27-7.493 5.27zm-2-12v4h3.181c1.373 0 1.956-.849 1.956-2 0-1.152-.582-2-1.956-2h-3.181zm0 6.5v5.5h3.662c1.651 0 2.338-.973 2.338-2.75 0-1.776-.687-2.75-2.338-2.75h-3.662z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(249,38,114,0.8)] focus-ring rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="xl:col-span-7 w-full relative" data-reveal style={{"--reveal-delay": '100ms'}}>
                <div className="surface-panel rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 xl:p-12 relative z-10 w-full">
                  <form id="leadForm" action="#" className="flex flex-col gap-8 sm:gap-9 md:gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9 md:gap-10">
                      <div className="relative w-full">
                        <input type="text" id="name" placeholder="Имя" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-[15px] sm:text-[16px] placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300" required />
                      </div>
                      <div className="relative w-full">
                        <input type="email" id="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-[15px] sm:text-[16px] placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9 md:gap-10">
                      <div className="relative w-full">
                        <input type="text" id="company" placeholder="Компания" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-[15px] sm:text-[16px] placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300" />
                      </div>
                      <div className="relative w-full flex flex-col justify-end border-b border-white/20 pb-2">
                        <select id="projectType" className="w-full bg-transparent text-white text-[15px] sm:text-[16px] focus:outline-none cursor-pointer appearance-none">
                          <option value="300 000" className="bg-[#16213E] text-white">Веб-сервис (от 300к)</option>
                          <option value="500 000" className="bg-[#16213E] text-white">Мобильное приложение (от 500к)</option>
                          <option value="150 000" className="bg-[#16213E] text-white">UX/UI Дизайн (от 150к)</option>
                          <option value="Индивидуально" className="bg-[#16213E] text-white">Другое / Консалтинг</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full flex items-center gap-3">
                      <span className="text-slate-400 text-[15px]">Ориентировочный бюджет:</span>
                      <span id="calcResult" className="text-cyan-400 font-display font-bold text-xl">от 300 000 ₽</span>
                    </div>
                    <div className="relative w-full">
                      <textarea id="message" placeholder="Сообщение" rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-[15px] sm:text-[16px] placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none" required defaultValue={""} />
                    </div>
                    <button type="submit" className="btn-base btn-accent focus-ring w-full min-h-[56px] sm:min-h-[60px] rounded-xl mt-2">
                      Отправить заявку →
                    </button>
                  </form>
                </div>
                <div className="hidden xl:block mt-6 2xl:mt-7" data-reveal style={{"--reveal-delay": '160ms'}}>
                  <div className="relative overflow-hidden rounded-[22px] border border-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.34)]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-10 pointer-events-none" />
                    <div className="relative w-full h-[180px] 2xl:h-[196px] bg-[#12141A]">
                      <iframe id="yandex-map-desktop" title="Карта расположения AKA Technology" data-src="https://yandex.ru/map-widget/v1/?um=constructor%3A159721270ece4174e7e616239127ce415b669af4f44ca5c59a917f60c57d80a3&source=constructor" width="100%" height="100%" loading="lazy" className="absolute inset-0 w-full h-full" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C10]/14 via-transparent to-[#0B0C10]/06" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-12 xl:hidden" data-reveal style={{"--reveal-delay": '160ms'}}>
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.38)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-10 pointer-events-none" />
                <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] bg-[#12141A]">
                  <iframe id="yandex-map-mobile" title="Карта расположения AKA Technology" data-src="https://yandex.ru/map-widget/v1/?um=constructor%3A159721270ece4174e7e616239127ce415b669af4f44ca5c59a917f60c57d80a3&source=constructor" width="100%" height="100%" loading="lazy" className="absolute inset-0 w-full h-full" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C10]/18 via-transparent to-[#0B0C10]/08" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
