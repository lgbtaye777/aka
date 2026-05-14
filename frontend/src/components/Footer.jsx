export default function Footer() {
  return (
    <>
      <footer id="footer" className="pt-16 pb-8 border-t border-white/5 relative z-10 mt-12" data-analytics-section="footer" data-analytics-section-name="Footer">
        <div className="site-container">
          <div className="content-shell">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
              <div className="lg:col-span-4 flex flex-col gap-6">
                <a href="#top" aria-label="AKA Technology" className="block h-8 opacity-80 hover:opacity-100 transition-opacity">
                  <svg id="aka-logo-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341 76" className="h-full w-auto">
                    <use href="#aka-logo-main" />
                  </svg>
                </a>
                <p className="font-sans font-light text-[13px] leading-[1.8] text-slate-400 max-w-[320px]">
                  Разработка мобильных приложений, веб-сервисов и комплексных цифровых решений для бизнеса. От аналитики до поддержки.
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <a href="#" aria-label="GitHub" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href="#" aria-label="Behance" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.162 4.325h-7.259c.144 1.156 1.121 2.016 2.434 2.016 1.17 0 1.954-.452 2.274-1.282h2.588zm-5.06-3.819c-.066-.826-.749-1.559-1.85-1.559-1.127 0-1.874.654-2.022 1.559h3.872zm-12.666 4.819h-6v-15h6.697c2.146 0 4.293.921 4.293 3.593 0 1.455-1.111 2.474-2.261 2.822 1.597.355 2.764 1.638 2.764 3.315 0 2.503-2.08 5.27-7.493 5.27zm-2-12v4h3.181c1.373 0 1.956-.849 1.956-2 0-1.152-.582-2-1.956-2h-3.181zm0 6.5v5.5h3.662c1.651 0 2.338-.973 2.338-2.75 0-1.776-.687-2.75-2.338-2.75h-3.662z" /></svg>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-5">
                <h4 className="font-sans font-medium text-[10px] uppercase tracking-[0.15em] text-slate-300">Компания</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="#services" className="font-sans font-light text-[13px] text-slate-400 hover:text-white transition-colors">Услуги</a></li>
                  <li><a href="#showcases" className="font-sans font-light text-[13px] text-slate-400 hover:text-white transition-colors">Портфолио</a></li>
                  <li><a href="#process" className="font-sans font-light text-[13px] text-slate-400 hover:text-white transition-colors">Процесс</a></li>
                  <li><a href="#stack" className="font-sans font-light text-[13px] text-slate-400 hover:text-white transition-colors">Технологии</a></li>
                </ul>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-5">
                <h4 className="font-sans font-medium text-[10px] uppercase tracking-[0.15em] text-slate-300">Контакты</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="tel:+73832874192" className="font-sans font-light text-[13px] text-slate-400 hover:text-white transition-colors">+7 (383) 287-41-92</a></li>
                  <li><a href="mailto:hello@akatech.ru" className="font-sans font-light text-[13px] text-slate-400 hover:text-white transition-colors">hello@akatech.ru</a></li>
                  <li className="font-sans font-light text-[13px] leading-[1.6] text-slate-400 mt-1">
                    г. Новосибирск,<br />ул. Дуси Ковальчук, 252
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-5">
                <h4 className="font-sans font-medium text-[10px] uppercase tracking-[0.15em] text-slate-300">При поддержке</h4>
                <div className="flex flex-col gap-6 items-start">
                  <a href="https://online.fasie.ru/m/" target="_blank" rel="noopener noreferrer" className="block h-[38px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" aria-label="АС Фонд-М">
                    <svg id="fund-logo-1" width="100%" height="100%" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                      <text x={10} y={45} fontFamily="Arial" fontSize={20} fill="currentColor">АС Фонд-М</text>
                    </svg>
                  </a>
                  <a href="https://univertechpred.ru/#" target="_blank" rel="noopener noreferrer" className="block h-[38px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" aria-label="Платформа университетского технологического предпринимательства">
                    <svg id="fund-logo-2" width="100%" height="100%" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                      <text x={10} y={45} fontFamily="Arial" fontSize={18} fill="currentColor">Платформа УТП</text>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-sans font-light text-[11px] tracking-wide text-slate-500 text-center md:text-left">
                © 2026 AKA Technology. Все права защищены. <span className="mx-2 hidden sm:inline">|</span> <br className="sm:hidden" /> ИНН: 5404127836 <span className="mx-2">|</span> ОГРН: 1245400005187
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="font-sans font-light text-[11px] text-slate-500 hover:text-slate-300 transition-colors">Политика конфиденциальности</a>
                <a href="#" className="font-sans font-light text-[11px] text-slate-500 hover:text-slate-300 transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
