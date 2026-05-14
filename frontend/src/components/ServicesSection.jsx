export default function ServicesSection() {
  return (
    <>
      <div>
        <section id="services" className="section-space section-watch relative pt-16 sm:pt-24 lg:pt-[200px] pb-16 lg:pb-24 overflow-hidden" data-analytics-section="services" data-analytics-section-name="Services" vid={37}>
          <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none text-brand-cyan" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" vid={38}>
            <circle cx={200} cy={200} r={150} stroke="currentColor" strokeWidth={1} strokeDasharray="4 8" className="animate-spin-slow" vid={39} />
            <circle cx={200} cy={200} r={100} stroke="currentColor" strokeWidth={1} vid={40} />
            <path d="M50 200h300M200 50v300" stroke="currentColor" strokeWidth={1} strokeOpacity="0.5" vid={41} />
            <rect x={180} y={180} width={40} height={40} stroke="currentColor" strokeWidth={1} fill="rgba(0,212,255,0.1)" vid={42} />
          </svg>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-20" vid={43}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-start" vid={44}>
              <div className="flex-1 max-w-[800px]" data-reveal vid={45}>
                <div className="flex items-center gap-3 mb-6" vid={46}>
                  <div className="w-[4px] h-[4px] bg-brand-cyan rounded-full shadow-[0_0_8px_rgba(0,212,255,0.8)]" vid={47} />
                  <div className="w-[3px] h-4 bg-brand-cyan rounded-full" vid={48} />
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-brand-cyan leading-none" vid={49}>
                    ЦИФРОВЫЕ УСЛУГИ ДЛЯ БИЗНЕСА
                  </span>
                </div>
                <h1 className="section-hero-title mb-8" vid={50}>
                  Услуги разработки <br className="hidden lg:block" vid={51} />
                  для цифровых <br className="hidden lg:block" vid={52} />
                  <span className="text-brand-cyan relative inline-block" vid={53}>
                    продуктов и сервисов
                    <svg className="absolute w-[105%] h-[12px] -bottom-2 left-0 text-brand-cyan/30 z-[-1]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" vid={54}>
                      <path d="M2 9.5C50 3.5 150 -2.5 198 9.5" stroke="currentColor" strokeWidth={4} strokeLinecap="round" vid={55} />
                    </svg>
                  </span>
                </h1>
              </div>
              <div className="flex-1 lg:max-w-[480px] lg:mt-16 flex flex-col gap-8" data-reveal style={{"--reveal-delay": '120ms'}} vid={56}>
                <p className="text-[18px] text-brand-gray font-normal leading-[1.7]" vid={57}>
                  Помогаем компаниям запускать и развивать цифровые продукты: от мобильных приложений и веб-сервисов до интеграций, поддержки и проектного консалтинга. Закрываем весь цикл работ — от идеи до релиза и дальнейшего развития.
                </p>
                <div className="bg-[#16213E]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 relative overflow-hidden group" vid={58}>
                  <div className="absolute left-0 top-0 w-1 h-full bg-brand-red" vid={59} />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[30px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-red/20 transition-all duration-500" vid={60} />
                  <div className="flex items-start gap-4 relative z-10" vid={61}>
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 border border-brand-red/20" vid={62}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red" vid={63}>
                        <polyline points="20 6 9 17 4 12" vid={64} />
                      </svg>
                    </div>
                    <div vid={65}>
                      <p className="font-sora font-semibold text-white text-[16px] leading-[1.4]" vid={66}>
                        Работаем системно, прозрачно и с фокусом на результат бизнеса.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 lg:py-24 relative z-10" vid={67}>
          <div className="absolute inset-0 tech-line-bg opacity-[0.2] pointer-events-none z-0 mask-image-linear-gradient" vid={68} />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-20" vid={69}>
            {/* Section Header with Stats */}
            <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8" data-reveal vid={70}>
              <div className="flex items-center gap-4" vid={71}>
                <div className="flex flex-col gap-1" vid={72}>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan" vid={73}>Наши услуги</span>
                  <div className="flex items-center gap-2" vid={74}>
                    <span className="text-[48px] font-sora font-bold text-white countup-value" data-countup={6} vid={75}>0</span>
                    <span className="text-[16px] text-brand-gray font-medium" vid={76}>направлений<br vid={77} />экспертизы</span>
                  </div>
                </div>
                <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-brand-cyan/50 to-transparent" vid={78} />
                <div className="hidden lg:flex items-center gap-6" vid={79}>
                  <div className="flex flex-col" vid={80}>
                    <div className="flex items-center gap-2 mb-1" vid={81}>
                      <svg className="w-4 h-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={82}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={83} /><polyline points="22 4 12 14.01 9 11.01" vid={84} /></svg>
                      <span className="text-[24px] font-sora font-bold text-white countup-value" data-countup={120} data-suffix="+" vid={85}>0+</span>
                    </div>
                    <span className="text-[12px] text-brand-gray" vid={86}>проектов в год</span>
                  </div>
                  <div className="flex flex-col" vid={87}>
                    <div className="flex items-center gap-2 mb-1" vid={88}>
                      <svg className="w-4 h-4 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={89}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" vid={90} /></svg>
                      <span className="text-[24px] font-sora font-bold text-white countup-value" data-countup="4.9" data-countup-decimals={1} vid={91}>0.0</span>
                    </div>
                    <span className="text-[12px] text-brand-gray" vid={92}>рейтинг клиентов</span>
                  </div>
                </div>
              </div>
              {/* Animated Mini Chart */}
              <div className="hidden lg:flex items-end gap-2 h-12" vid={93}>
                <div className="w-3 bg-brand-cyan/30 rounded-t" style={{height: '40%', animation: 'pulse-height 2s ease-in-out infinite 0s'}} vid={94} />
                <div className="w-3 bg-brand-cyan/50 rounded-t" style={{height: '65%', animation: 'pulse-height 2.5s ease-in-out infinite 0.2s'}} vid={95} />
                <div className="w-3 bg-brand-cyan rounded-t" style={{height: '85%', animation: 'pulse-height 2.2s ease-in-out infinite 0.4s'}} vid={96} />
                <div className="w-3 bg-brand-red/70 rounded-t" style={{height: '70%', animation: 'pulse-height 2.3s ease-in-out infinite 0.6s'}} vid={97} />
                <div className="w-3 bg-brand-cyan/60 rounded-t" style={{height: '90%', animation: 'pulse-height 2.1s ease-in-out infinite 0.8s'}} vid={98} />
                <div className="w-3 bg-brand-red rounded-t" style={{height: '100%', animation: 'pulse-height 2.4s ease-in-out infinite 1s'}} vid={99} />
                <span className="text-[11px] text-brand-gray ml-3 mb-1" vid={100}>активность</span>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10" vid={101}>
              <div className="service-card-cyan group relative bg-card-gradient backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-brand-cyan/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]" data-reveal vid={102}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors duration-700 pointer-events-none" vid={103} />
                {/* Animated Mobile Background Pattern */}
                <svg className="absolute top-1/2 right-0 w-[280px] h-[280px] opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4" viewBox="0 0 200 200" vid={104}>
                  <g className="animate-spin-slow" style={{transformOrigin: 'center', animationDuration: '25s'}} vid={105}>
                    <rect x={70} y={20} width={60} height={100} rx={8} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan" vid={106} />
                    <line x1={85} y1={35} x2={115} y2={35} stroke="currentColor" strokeWidth={1} className="text-brand-cyan/50" vid={107} />
                    <circle cx={100} cy={130} r={6} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan" vid={108} />
                  </g>
                  <g className="animate-float-1" vid={109}>
                    <rect x={20} y={120} width={40} height={70} rx={6} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-cyan/30" vid={110} />
                    <rect x={140} y={100} width={35} height={60} rx={5} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-cyan/40" vid={111} />
                  </g>
                  <g className="animate-pulse" style={{animationDuration: '3s'}} vid={112}>
                    <circle cx={50} cy={50} r={3} fill="currentColor" className="text-brand-cyan/60" vid={113} />
                    <circle cx={160} cy={40} r={2} fill="currentColor" className="text-brand-cyan/40" vid={114} />
                    <circle cx={170} cy={170} r={4} fill="currentColor" className="text-brand-cyan/50" vid={115} />
                  </g>
                </svg>
                {/* Floating Code Lines */}
                <svg className="absolute bottom-8 right-8 w-32 h-20 opacity-[0.08] pointer-events-none" viewBox="0 0 100 60" vid={116}>
                  <g className="animate-pulse" style={{animationDuration: '4s'}} vid={117}>
                    <line x1={0} y1={15} x2={70} y2={15} stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-brand-cyan/40" vid={118} />
                    <line x1={10} y1={30} x2={50} y2={30} stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-brand-cyan/60" vid={119} />
                    <line x1={5} y1={45} x2={60} y2={45} stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-brand-cyan/30" vid={120} />
                  </g>
                </svg>
                <div className="relative z-10 flex flex-col h-full" vid={121}>
                  <div className="flex items-center gap-6 mb-6" vid={122}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300" vid={123}>
                      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-brand-cyan transition-colors" vid={124}>
                        <rect x={5} y={2} width={14} height={20} rx={2} ry={2} vid={125} />
                        <line x1={12} y1={18} x2="12.01" y2={18} vid={126} />
                      </svg>
                    </div>
                    <h2 className="service-card-heading" vid={127}>Мобильная разработка</h2>
                  </div>
                  <div className="mb-8 min-h-[76px]" vid={128}>
                    <p className="text-brand-gray text-[16px] leading-[1.6] mb-3" vid={129}>
                      Создаём мобильные приложения для <span className="text-white font-medium" vid={130}>iOS</span> и <span className="text-white font-medium" vid={131}>Android</span> под задачи бизнеса.
                    </p>
                    <p className="text-brand-gray/70 text-[14px] leading-[1.5]" vid={132}>
                      От клиентских сервисов до корпоративных решений — прорабатываем логику, интерфейсы и архитектуру.
                    </p>
                  </div>
                  <div className="mb-10" vid={133}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6" vid={134}>
                      <li className="flex items-start gap-3" vid={135}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={136}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={137} /><polyline points="22 4 12 14.01 9 11.01" vid={138} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={139}>iOS и Android</span>
                      </li>
                      <li className="flex items-start gap-3" vid={140}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={141}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={142} /><polyline points="22 4 12 14.01 9 11.01" vid={143} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={144}>Flutter / React Native</span>
                      </li>
                      <li className="flex items-start gap-3" vid={145}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={146}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={147} /><polyline points="22 4 12 14.01 9 11.01" vid={148} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={149}>MVP и масштабирование</span>
                      </li>
                      <li className="flex items-start gap-3" vid={150}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={151}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={152} /><polyline points="22 4 12 14.01 9 11.01" vid={153} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={154}>Публикация и поддержка</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/10" vid={155}>
                    {/* Mini Mobile Stats Visualization */}
                    <div className="flex items-center justify-between" vid={156}>
                      <div className="flex items-center gap-4" vid={157}>
                        <div className="flex flex-col" vid={158}>
                          <span className="text-[10px] text-brand-gray uppercase tracking-wider" vid={159}>Рост</span>
                          <span className="text-[18px] font-sora font-bold text-brand-cyan countup-value" data-countup={47} data-prefix="+" data-suffix="%" vid={160}>+0%</span>
                        </div>
                        <div className="flex items-end gap-1 h-8" vid={161}>
                          <div className="w-1.5 bg-brand-cyan/30 rounded-t mini-chart-bar" style={{height: '30%'}} vid={162} />
                          <div className="w-1.5 bg-brand-cyan/50 rounded-t mini-chart-bar" style={{height: '45%'}} vid={163} />
                          <div className="w-1.5 bg-brand-cyan rounded-t mini-chart-bar" style={{height: '60%'}} vid={164} />
                          <div className="w-1.5 bg-brand-cyan/70 rounded-t mini-chart-bar" style={{height: '55%'}} vid={165} />
                          <div className="w-1.5 bg-brand-cyan rounded-t mini-chart-bar" style={{height: '80%'}} vid={166} />
                          <div className="w-1.5 bg-brand-red rounded-t mini-chart-bar" style={{height: '100%'}} vid={167} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-brand-gray" vid={168}>
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" vid={169} />
                        42 проекта в работе
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" vid={170}>
                      <div className="flex flex-wrap gap-2" vid={171}>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={172}>iOS</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={173}>Android</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={174}>Кроссплатформенность</span>
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-white group-hover:text-brand-cyan transition-colors shrink-0" vid={175}>
                        Подробнее
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform" vid={176}><line x1={5} y1={12} x2={19} y2={12} vid={177} /><polyline points="12 5 19 12 12 19" vid={178} /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card-red group relative bg-card-gradient backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-brand-red/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]" data-reveal style={{"--reveal-delay": '80ms'}} vid={179}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700 pointer-events-none" vid={180} />
                {/* Animated Web Background Pattern */}
                <svg className="absolute top-1/2 right-0 w-[300px] h-[300px] opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4" viewBox="0 0 200 200" vid={181}>
                  <g className="animate-spin-slow" style={{transformOrigin: 'center', animationDuration: '30s', animationDirection: 'reverse'}} vid={182}>
                    <rect x={40} y={50} width={120} height={80} rx={6} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-red" vid={183} />
                    <line x1={40} y1={75} x2={160} y2={75} stroke="currentColor" strokeWidth={1} className="text-brand-red/50" vid={184} />
                    <circle cx={150} cy={65} r={4} fill="currentColor" className="text-brand-red/40" vid={185} />
                    <rect x={145} y={85} width={8} height={8} rx={1} fill="currentColor" className="text-brand-red/30" vid={186} />
                  </g>
                  <g className="animate-float-2" vid={187}>
                    <rect x={10} y={140} width={50} height={40} rx={4} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/20" vid={188} />
                    <rect x={140} y={10} width={45} height={35} rx={4} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/30" vid={189} />
                  </g>
                  <g className="animate-pulse" style={{animationDuration: '3.5s'}} vid={190}>
                    <circle cx={30} cy={30} r={3} fill="currentColor" className="text-brand-red/50" vid={191} />
                    <circle cx={180} cy={150} r={5} fill="currentColor" className="text-brand-red/40" vid={192} />
                    <circle cx={100} cy={180} r={3} fill="currentColor" className="text-brand-red/30" vid={193} />
                  </g>
                  {/* Grid lines */}
                  <g stroke="currentColor" strokeWidth="0.5" opacity="0.2" className="text-brand-red" vid={194}>
                    <line x1={0} y1={100} x2={200} y2={100} vid={195} />
                    <line x1={100} y1={0} x2={100} y2={200} vid={196} />
                  </g>
                </svg>
                {/* Browser Tabs */}
                <svg className="absolute bottom-6 right-6 w-36 h-16 opacity-[0.08] pointer-events-none" viewBox="0 0 100 45" vid={197}>
                  <g className="animate-float-1" vid={198}>
                    <rect x={0} y={10} width={45} height={30} rx={3} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-red/40" vid={199} />
                    <rect x={55} y={5} width={40} height={25} rx={3} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-red/60" vid={200} />
                  </g>
                </svg>
                <div className="relative z-10 flex flex-col h-full" vid={201}>
                  <div className="flex items-center gap-6 mb-6" vid={202}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-red/50 group-hover:shadow-[0_0_15px_rgba(227,30,74,0.2)] transition-all duration-300" vid={203}>
                      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-brand-red transition-colors" vid={204}>
                        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} vid={205} />
                        <line x1={3} y1={9} x2={21} y2={9} vid={206} />
                        <line x1={9} y1={21} x2={9} y2={9} vid={207} />
                      </svg>
                    </div>
                    <h2 className="service-card-heading" vid={208}>Веб-разработка</h2>
                  </div>
                  <div className="mb-8 min-h-[76px]" vid={209}>
                    <p className="text-brand-gray text-[16px] leading-[1.6] mb-3" vid={210}>
                      Корпоративные сайты, <span className="text-white font-medium" vid={211}>лендинги</span> и веб-сервисы <span className="text-brand-red font-medium" vid={212}>под ключ</span>.
                    </p>
                    <p className="text-brand-gray/70 text-[14px] leading-[1.5]" vid={213}>
                      Выстраиваем структуру, реализуем бизнес-логику и готовим продукт к масштабированию.
                    </p>
                  </div>
                  <div className="mb-10" vid={214}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6" vid={215}>
                      <li className="flex items-start gap-3" vid={216}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={217}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={218} /><polyline points="22 4 12 14.01 9 11.01" vid={219} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={220}>Лендинги и сайты</span>
                      </li>
                      <li className="flex items-start gap-3" vid={221}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={222}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={223} /><polyline points="22 4 12 14.01 9 11.01" vid={224} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={225}>Веб-сервисы и кабинеты</span>
                      </li>
                      <li className="flex items-start gap-3" vid={226}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={227}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={228} /><polyline points="22 4 12 14.01 9 11.01" vid={229} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={230}>Frontend / Backend</span>
                      </li>
                      <li className="flex items-start gap-3" vid={231}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={232}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={233} /><polyline points="22 4 12 14.01 9 11.01" vid={234} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={235}>Интеграция бизнес-процессов</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/10" vid={236}>
                    {/* Web Performance Ring */}
                    <div className="flex items-center justify-between" vid={237}>
                      <div className="flex items-center gap-4" vid={238}>
                        <div className="relative w-14 h-14" vid={239}>
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" vid={240}>
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={3} vid={241} />
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E31E4A" strokeWidth={3} strokeDasharray="94, 100" strokeLinecap="round" className="group-hover:stroke-dasharray-100 transition-all duration-1000" vid={242} />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center" vid={243}>
                            <span className="text-[11px] font-bold text-brand-red countup-value" data-countup={94} data-suffix="%" vid={244}>0%</span>
                          </div>
                        </div>
                        <div className="flex flex-col" vid={245}>
                          <span className="text-[10px] text-brand-gray uppercase tracking-wider" vid={246}>Core Web Vitals</span>
                          <span className="text-[14px] text-white/90" vid={247}>Performance</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3" vid={248}>
                        <div className="flex items-center gap-1" vid={249}>
                          <span className="text-[20px] font-sora font-bold text-white" vid={250}>1.2s</span>
                          <span className="text-[10px] text-brand-gray" vid={251}>загрузка</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" vid={252}>
                      <div className="flex flex-wrap gap-2" vid={253}>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={254}>Сайты</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={255}>Кабинеты</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={256}>Веб-сервисы</span>
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-white group-hover:text-brand-red transition-colors shrink-0" vid={257}>
                        Подробнее
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform" vid={258}><line x1={5} y1={12} x2={19} y2={12} vid={259} /><polyline points="12 5 19 12 12 19" vid={260} /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card-cyan group relative bg-card-gradient backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-brand-cyan/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]" data-reveal vid={261}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors duration-700 pointer-events-none" vid={262} />
                {/* Animated Design/UX Background Pattern */}
                <svg className="absolute top-1/2 right-0 w-[280px] h-[280px] opacity-[0.07] group-hover:opacity-[0.14] transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4" viewBox="0 0 200 200" vid={263}>
                  <g className="animate-spin-slow" style={{transformOrigin: 'center', animationDuration: '35s'}} vid={264}>
                    <circle cx={100} cy={100} r={70} stroke="currentColor" strokeWidth={1} fill="none" strokeDasharray="10 5" className="text-brand-cyan" vid={265} />
                    <circle cx={100} cy={100} r={45} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/50" vid={266} />
                  </g>
                  <g className="animate-float-3" vid={267}>
                    <path d="M60 60 L100 40 L140 60 L120 100 L140 140 L100 160 L60 140 L80 100 Z" stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-cyan/30" vid={268} />
                  </g>
                  <g className="animate-pulse" style={{animationDuration: '2.5s'}} vid={269}>
                    <circle cx={30} cy={170} r={5} fill="currentColor" className="text-brand-cyan/40" vid={270} />
                    <circle cx={170} cy={30} r={4} fill="currentColor" className="text-brand-cyan/60" vid={271} />
                    <circle cx={180} cy={180} r={3} fill="currentColor" className="text-brand-cyan/30" vid={272} />
                  </g>
                  {/* Crosshair elements */}
                  <g stroke="currentColor" strokeWidth={1} className="text-brand-cyan/20" vid={273}>
                    <line x1={100} y1={20} x2={100} y2={50} className="animate-pulse" vid={274} />
                    <line x1={100} y1={150} x2={100} y2={180} className="animate-pulse" style={{animationDelay: '0.5s'}} vid={275} />
                    <line x1={20} y1={100} x2={50} y2={100} className="animate-pulse" style={{animationDelay: '1s'}} vid={276} />
                    <line x1={150} y1={100} x2={180} y2={100} className="animate-pulse" style={{animationDelay: '1.5s'}} vid={277} />
                  </g>
                </svg>
                {/* Design Elements */}
                <svg className="absolute bottom-8 right-8 w-28 h-20 opacity-[0.1] pointer-events-none" viewBox="0 0 80 60" vid={278}>
                  <g className="animate-float-1" vid={279}>
                    <rect x={5} y={10} width={30} height={40} rx={3} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/50" vid={280} />
                    <rect x={45} y={20} width={25} height={30} rx={2} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/30" vid={281} />
                    <circle cx={57} cy={15} r={5} fill="currentColor" className="text-brand-cyan/40" vid={282} />
                  </g>
                </svg>
                <div className="relative z-10 flex flex-col h-full" vid={283}>
                  <div className="flex items-center gap-6 mb-6" vid={284}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300" vid={285}>
                      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-brand-cyan transition-colors" vid={286}>
                        <polygon points="12 2 2 7 12 12 22 7 12 2" vid={287} />
                        <polyline points="2 17 12 22 22 17" vid={288} />
                        <polyline points="2 12 12 17 22 12" vid={289} />
                      </svg>
                    </div>
                    <h2 className="service-card-heading" vid={290}>UI/UX дизайн</h2>
                  </div>
                  <div className="mb-8 min-h-[76px]" vid={291}>
                    <p className="text-brand-gray text-[16px] leading-[1.6] mb-3" vid={292}>
                      Интерфейсы, которые <span className="text-brand-cyan font-medium" vid={293}>повышают конверсию</span> и упрощают путь пользователя.
                    </p>
                    <p className="text-brand-gray/70 text-[14px] leading-[1.5]" vid={294}>
                      Прототипы, дизайн-системы и визуальные концепции для web и mobile.
                    </p>
                  </div>
                  <div className="mb-10" vid={295}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6" vid={296}>
                      <li className="flex items-start gap-3" vid={297}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={298}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={299} /><polyline points="22 4 12 14.01 9 11.01" vid={300} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={301}>Исследование и структура</span>
                      </li>
                      <li className="flex items-start gap-3" vid={302}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={303}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={304} /><polyline points="22 4 12 14.01 9 11.01" vid={305} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={306}>Прототипирование</span>
                      </li>
                      <li className="flex items-start gap-3" vid={307}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={308}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={309} /><polyline points="22 4 12 14.01 9 11.01" vid={310} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={311}>Дизайн-системы</span>
                      </li>
                      <li className="flex items-start gap-3" vid={312}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={313}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={314} /><polyline points="22 4 12 14.01 9 11.01" vid={315} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={316}>Интерфейсы для web и mobile</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/10" vid={317}>
                    {/* Design Metrics */}
                    <div className="flex items-center justify-between" vid={318}>
                      <div className="flex items-center gap-6" vid={319}>
                        <div className="flex items-center gap-3" vid={320}>
                          <div className="flex -space-x-2" vid={321}>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-cyan to-blue-600 border-2 border-[#16213E] flex items-center justify-center" vid={322}>
                              <span className="text-[10px] font-bold text-white" vid={323}>F</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#16213E] flex items-center justify-center" vid={324}>
                              <span className="text-[10px] font-bold text-white" vid={325}>S</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-[#16213E] flex items-center justify-center" vid={326}>
                              <span className="text-[10px] font-bold text-white" vid={327}>A</span>
                            </div>
                          </div>
                          <span className="text-[12px] text-brand-gray" vid={328}>Figma, Sketch, Adobe</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2" vid={329}>
                        <div className="flex items-center gap-1" vid={330}>
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" vid={331}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" vid={332} /></svg>
                          <span className="text-[14px] font-semibold text-white countup-value" data-countup="4.9" data-countup-decimals={1} vid={333}>0.0</span>
                        </div>
                        <span className="text-[11px] text-brand-gray" vid={334}><span className="countup-value" data-countup={200} data-suffix="+">0+</span> отзывов</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" vid={335}>
                      <div className="flex flex-wrap gap-2" vid={336}>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={337}>UX</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={338}>UI</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={339}>Прототипы</span>
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-white group-hover:text-brand-cyan transition-colors shrink-0" vid={340}>
                        Подробнее
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform" vid={341}><line x1={5} y1={12} x2={19} y2={12} vid={342} /><polyline points="12 5 19 12 12 19" vid={343} /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card-red group relative bg-card-gradient backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-brand-red/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]" data-reveal style={{"--reveal-delay": '80ms'}} vid={344}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700 pointer-events-none" vid={345} />
                {/* Animated Support Background Pattern */}
                <svg className="absolute top-1/2 right-0 w-[300px] h-[300px] opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4" viewBox="0 0 200 200" vid={346}>
                  <g className="animate-spin-slow" style={{transformOrigin: 'center', animationDuration: '40s', animationDirection: 'reverse'}} vid={347}>
                    <path d="M100 30 L130 55 L130 90 L100 115 L70 90 L70 55 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-red" vid={348} />
                    <circle cx={100} cy={72} r={12} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/50" vid={349} />
                  </g>
                  <g className="animate-float-2" vid={350}>
                    <rect x={140} y={130} width={40} height={40} rx={8} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/30" vid={351} />
                    <rect x={20} y={140} width={35} height={35} rx={6} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/20" vid={352} />
                  </g>
                  <g className="animate-pulse" style={{animationDuration: '3s'}} vid={353}>
                    <circle cx={40} cy={40} r={4} fill="currentColor" className="text-brand-red/50" vid={354} />
                    <circle cx={170} cy={60} r={3} fill="currentColor" className="text-brand-red/40" vid={355} />
                    <circle cx={165} cy={165} r={5} fill="currentColor" className="text-brand-red/60" vid={356} />
                    <circle cx={35} cy={170} r={3} fill="currentColor" className="text-brand-red/30" vid={357} />
                  </g>
                  {/* Check marks */}
                  <g stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red/30" vid={358}>
                    <path d="M45 100 L55 110 L70 90" className="animate-pulse" style={{animationDelay: '0.2s'}} vid={359} />
                    <path d="M135 110 L145 120 L160 100" className="animate-pulse" style={{animationDelay: '0.7s'}} vid={360} />
                  </g>
                </svg>
                {/* Gear Icon */}
                <svg className="absolute bottom-6 right-6 w-24 h-24 opacity-[0.08] pointer-events-none" viewBox="0 0 60 60" vid={361}>
                  <g className="animate-spin-slow" style={{transformOrigin: 'center', animationDuration: '15s'}} vid={362}>
                    <circle cx={30} cy={30} r={8} stroke="currentColor" strokeWidth={2} fill="none" className="text-brand-red/50" vid={363} />
                    <path d="M30 10 L30 18 M30 42 L30 50 M10 30 L18 30 M42 30 L50 30 M16 16 L22 22 M38 38 L44 44 M16 44 L22 38 M38 22 L44 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" vid={364} />
                  </g>
                </svg>
                <div className="relative z-10 flex flex-col h-full" vid={365}>
                  <div className="flex items-center gap-6 mb-6" vid={366}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-red/50 group-hover:shadow-[0_0_15px_rgba(227,30,74,0.2)] transition-all duration-300" vid={367}>
                      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-brand-red transition-colors" vid={368}>
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" vid={369} />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" vid={370} />
                        <line x1={12} y1="22.08" x2={12} y2={12} vid={371} />
                      </svg>
                    </div>
                    <h2 className="service-card-heading" vid={372}>Техническая поддержка</h2>
                  </div>
                  <div className="mb-8 min-h-[76px]" vid={373}>
                    <p className="text-brand-gray text-[16px] leading-[1.6] mb-3" vid={374}>
                      Сопровождение после запуска: <span className="text-brand-red font-medium" vid={375}>исправления</span>, обновления и <span className="text-white font-medium" vid={376}>мониторинг 24/7</span>.
                    </p>
                    <p className="text-brand-gray/70 text-[14px] leading-[1.5]" vid={377}>
                      Стабильность по мере роста системы без потери качества.
                    </p>
                  </div>
                  <div className="mb-10" vid={378}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6" vid={379}>
                      <li className="flex items-start gap-3" vid={380}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={381}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={382} /><polyline points="22 4 12 14.01 9 11.01" vid={383} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={384}>Поддержка после релиза</span>
                      </li>
                      <li className="flex items-start gap-3" vid={385}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={386}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={387} /><polyline points="22 4 12 14.01 9 11.01" vid={388} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={389}>Обновления и доработки</span>
                      </li>
                      <li className="flex items-start gap-3" vid={390}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={391}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={392} /><polyline points="22 4 12 14.01 9 11.01" vid={393} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={394}>Мониторинг и стабильность</span>
                      </li>
                      <li className="flex items-start gap-3" vid={395}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={396}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={397} /><polyline points="22 4 12 14.01 9 11.01" vid={398} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={399}>Развитие продукта</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/10" vid={400}>
                    {/* Support Uptime Display */}
                    <div className="flex items-center justify-between" vid={401}>
                      <div className="flex items-center gap-4" vid={402}>
                        <div className="flex items-center gap-3 bg-brand-red/5 border border-brand-red/20 rounded-lg px-3 py-2" vid={403}>
                          <div className="flex flex-col" vid={404}>
                            <span className="text-[10px] text-brand-gray uppercase tracking-wider" vid={405}>Uptime</span>
                            <span className="text-[20px] font-sora font-bold text-brand-red countup-value" data-countup="99.9" data-countup-decimals={1} data-suffix="%" vid={406}>0.0%</span>
                          </div>
                          <div className="w-px h-8 bg-brand-red/30" vid={407} />
                          <div className="flex flex-col" vid={408}>
                            <span className="text-[10px] text-brand-gray uppercase tracking-wider" vid={409}>SLA</span>
                            <span className="text-[14px] font-semibold text-white/90" vid={410}>24/7</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2" vid={411}>
                        <span className="relative flex h-3 w-3" vid={412}>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" vid={413} />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" vid={414} />
                        </span>
                        <span className="text-[12px] text-brand-gray" vid={415}>Все системы онлайн</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" vid={416}>
                      <div className="flex flex-wrap gap-2" vid={417}>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={418}>Support</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={419}>SLA</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={420}>Доработки</span>
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-white group-hover:text-brand-red transition-colors shrink-0" vid={421}>
                        Подробнее
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform" vid={422}><line x1={5} y1={12} x2={19} y2={12} vid={423} /><polyline points="12 5 19 12 12 19" vid={424} /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card-cyan group relative bg-card-gradient backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-brand-cyan/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]" data-reveal vid={425}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors duration-700 pointer-events-none" vid={426} />
                {/* Animated Integration Background Pattern */}
                <svg className="absolute top-1/2 right-0 w-[300px] h-[300px] opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4" viewBox="0 0 200 200" vid={427}>
                  <g className="animate-pulse" style={{animationDuration: '2s'}} vid={428}>
                    <circle cx={50} cy={50} r={20} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan" vid={429} />
                    <circle cx={150} cy={150} r={18} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan" vid={430} />
                    <circle cx={150} cy={50} r={15} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/60" vid={431} />
                    <circle cx={50} cy={150} r={15} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/60" vid={432} />
                  </g>
                  <g className="animate-float-1" vid={433}>
                    <line x1={65} y1={65} x2={135} y2={135} stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3" className="text-brand-cyan/50" vid={434} />
                    <line x1={150} y1={65} x2={50} y2={135} stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3" className="text-brand-cyan/40" vid={435} />
                    <line x1={70} y1={50} x2={130} y2={50} stroke="currentColor" strokeWidth={1} className="text-brand-cyan/30" vid={436} />
                    <line x1={50} y1={70} x2={50} y2={130} stroke="currentColor" strokeWidth={1} className="text-brand-cyan/30" vid={437} />
                  </g>
                  <g className="animate-pulse" style={{animationDuration: '4s'}} vid={438}>
                    <circle cx={100} cy={100} r={6} fill="currentColor" className="text-brand-cyan/60" vid={439} />
                    <circle cx={30} cy={100} r={3} fill="currentColor" className="text-brand-cyan/40" vid={440} />
                    <circle cx={170} cy={100} r={4} fill="currentColor" className="text-brand-cyan/30" vid={441} />
                  </g>
                </svg>
                {/* Connection Lines */}
                <svg className="absolute bottom-8 right-8 w-32 h-20 opacity-[0.1] pointer-events-none" viewBox="0 0 100 60" vid={442}>
                  <g className="animate-float-2" vid={443}>
                    <rect x={5} y={20} width={20} height={20} rx={4} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/40" vid={444} />
                    <line x1={30} y1={30} x2={45} y2={30} stroke="currentColor" strokeWidth={2} className="text-brand-cyan/60" vid={445} />
                    <circle cx={60} cy={30} r={8} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/50" vid={446} />
                    <line x1={70} y1={30} x2={85} y2={30} stroke="currentColor" strokeWidth={2} strokeDasharray="3 2" className="text-brand-cyan/40" vid={447} />
                    <rect x={88} y={22} width={12} height={16} rx={2} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-cyan/60" vid={448} />
                  </g>
                </svg>
                <div className="relative z-10 flex flex-col h-full" vid={449}>
                  <div className="flex items-center gap-6 mb-6" vid={450}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300" vid={451}>
                      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-brand-cyan transition-colors" vid={452}>
                        <rect x={8} y={8} width={8} height={8} rx={2} ry={2} vid={453} />
                        <path d="M12 2v2" vid={454} />
                        <path d="M12 20v2" vid={455} />
                        <path d="M2 12h2" vid={456} />
                        <path d="M20 12h2" vid={457} />
                        <circle cx={12} cy={12} r={10} opacity="0.4" vid={458} />
                      </svg>
                    </div>
                    <h2 className="service-card-heading" vid={459}>Интеграции</h2>
                  </div>
                  <div className="mb-8 min-h-[76px]" vid={460}>
                    <p className="text-brand-gray text-[16px] leading-[1.6] mb-3" vid={461}>
                      Интегрируем <span className="text-brand-cyan font-medium" vid={462}>CRM</span>, <span className="text-brand-cyan font-medium" vid={463}>ERP</span>, платежи и аналитику в единую экосистему.
                    </p>
                    <p className="text-brand-gray/70 text-[14px] leading-[1.5]" vid={464}>
                      Автоматизация обмена данными и сокращение ручных операций.
                    </p>
                  </div>
                  <div className="mb-10" vid={465}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6" vid={466}>
                      <li className="flex items-start gap-3" vid={467}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={468}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={469} /><polyline points="22 4 12 14.01 9 11.01" vid={470} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={471}>CRM и ERP</span>
                      </li>
                      <li className="flex items-start gap-3" vid={472}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={473}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={474} /><polyline points="22 4 12 14.01 9 11.01" vid={475} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={476}>Платежи и аналитика</span>
                      </li>
                      <li className="flex items-start gap-3" vid={477}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={478}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={479} /><polyline points="22 4 12 14.01 9 11.01" vid={480} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={481}>API и внешние сервисы</span>
                      </li>
                      <li className="flex items-start gap-3" vid={482}>
                        <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={483}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={484} /><polyline points="22 4 12 14.01 9 11.01" vid={485} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={486}>Автоматизация процессов</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/10" vid={487}>
                    {/* Integration Flow Visualization */}
                    <div className="flex items-center justify-between" vid={488}>
                      <div className="flex items-center gap-3" vid={489}>
                        <div className="flex items-center" vid={490}>
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center" vid={491}>
                            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={492}><rect x={2} y={7} width={20} height={14} rx={2} vid={493} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" vid={494} /></svg>
                          </div>
                          <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-brand-cyan/50" vid={495} />
                          <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center" vid={496}>
                            <svg className="w-5 h-5 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={497}><path d="M12 2L2 7l10 5 10-5-10-5z" vid={498} /><path d="M2 17l10 5 10-5" vid={499} /><path d="M2 12l10 5 10-5" vid={500} /></svg>
                          </div>
                          <div className="w-8 h-px bg-gradient-to-r from-brand-cyan/50 to-green-500/50" vid={501} />
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center" vid={502}>
                            <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={503}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={504} /><polyline points="22 4 12 14.01 9 11.01" vid={505} /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2" vid={506}>
                        <span className="text-[20px] font-sora font-bold text-brand-cyan countup-value" data-countup={50} data-suffix="+" vid={507}>0+</span>
                        <span className="text-[11px] text-brand-gray" vid={508}>интеграций</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" vid={509}>
                      <div className="flex flex-wrap gap-2" vid={510}>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={511}>CRM</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={512}>ERP</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={513}>API</span>
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-white group-hover:text-brand-cyan transition-colors shrink-0" vid={514}>
                        Подробнее
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform" vid={515}><line x1={5} y1={12} x2={19} y2={12} vid={516} /><polyline points="12 5 19 12 12 19" vid={517} /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card-red group relative bg-card-gradient backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-brand-red/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]" data-reveal style={{"--reveal-delay": '80ms'}} vid={518}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700 pointer-events-none" vid={519} />
                {/* Animated Consulting Background Pattern */}
                <svg className="absolute top-1/2 right-0 w-[300px] h-[300px] opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4" viewBox="0 0 200 200" vid={520}>
                  <g className="animate-spin-slow" style={{transformOrigin: 'center', animationDuration: '45s'}} vid={521}>
                    <circle cx={100} cy={100} r={60} stroke="currentColor" strokeWidth={1} fill="none" strokeDasharray="8 4" className="text-brand-red" vid={522} />
                    <circle cx={100} cy={100} r={35} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-red/50" vid={523} />
                    <circle cx={100} cy={100} r={15} fill="currentColor" className="text-brand-red/20" vid={524} />
                  </g>
                  <g className="animate-float-3" vid={525}>
                    {/* Document icons */}
                    <rect x={20} y={30} width={35} height={45} rx={3} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/30" vid={526} />
                    <line x1={28} y1={45} x2={47} y2={45} stroke="currentColor" strokeWidth={1} className="text-brand-red/20" vid={527} />
                    <line x1={28} y1={52} x2={42} y2={52} stroke="currentColor" strokeWidth={1} className="text-brand-red/20" vid={528} />
                    <line x1={28} y1={59} x2={45} y2={59} stroke="currentColor" strokeWidth={1} className="text-brand-red/20" vid={529} />
                    <rect x={145} y={130} width={30} height={40} rx={3} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/25" vid={530} />
                    <line x1={152} y1={145} x2={168} y2={145} stroke="currentColor" strokeWidth={1} className="text-brand-red/15" vid={531} />
                    <line x1={152} y1={152} x2={165} y2={152} stroke="currentColor" strokeWidth={1} className="text-brand-red/15" vid={532} />
                  </g>
                  <g className="animate-pulse" style={{animationDuration: '3.5s'}} vid={533}>
                    <circle cx={40} cy={150} r={4} fill="currentColor" className="text-brand-red/50" vid={534} />
                    <circle cx={170} cy={40} r={3} fill="currentColor" className="text-brand-red/40" vid={535} />
                    <circle cx={30} cy={80} r={2} fill="currentColor" className="text-brand-red/30" vid={536} />
                    <circle cx={180} cy={100} r={5} fill="currentColor" className="text-brand-red/60" vid={537} />
                  </g>
                  {/* Arrows indicating flow */}
                  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red/20" vid={538}>
                    <path d="M70 100 L90 100 L85 95 M90 100 L85 105" className="animate-pulse" vid={539} />
                    <path d="M110 100 L130 100 L125 95 M130 100 L125 105" className="animate-pulse" style={{animationDelay: '0.3s'}} vid={540} />
                  </g>
                </svg>
                {/* Checklist */}
                <svg className="absolute bottom-6 right-6 w-24 h-20 opacity-[0.08] pointer-events-none" viewBox="0 0 60 50" vid={541}>
                  <g className="animate-float-1" vid={542}>
                    <rect x={5} y={5} width={50} height={40} rx={3} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand-red/40" vid={543} />
                    <line x1={12} y1={15} x2={20} y2={15} stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-brand-red/60" vid={544} />
                    <line x1={12} y1={25} x2={20} y2={25} stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-brand-red/60" vid={545} />
                    <line x1={12} y1={35} x2={20} y2={35} stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-brand-red/60" vid={546} />
                    <path d="M28 12 L32 18 L42 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red/50" vid={547} />
                    <path d="M28 22 L32 28 L42 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red/50" vid={548} />
                    <rect x={28} y={32} width={16} height={6} rx={1} stroke="currentColor" strokeWidth={1} fill="none" className="text-brand-red/30" vid={549}>
                    </rect></g>
                </svg>
                <div className="relative z-10 flex flex-col h-full" vid={550}>
                  <div className="flex items-center gap-6 mb-6" vid={551}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-red/50 group-hover:shadow-[0_0_15px_rgba(227,30,74,0.2)] transition-all duration-300" vid={552}>
                      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-brand-red transition-colors" vid={553}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" vid={554} />
                        <polyline points="14 2 14 8 20 8" vid={555} />
                        <line x1={16} y1={13} x2={8} y2={13} vid={556} />
                        <line x1={16} y1={17} x2={8} y2={17} vid={557} />
                        <polyline points="10 9 9 9 8 9" vid={558} />
                      </svg>
                    </div>
                    <h2 className="service-card-heading" vid={559}>Консалтинг</h2>
                  </div>
                  <div className="mb-8 min-h-[76px]" vid={560}>
                    <p className="text-brand-gray text-[16px] leading-[1.6] mb-3" vid={561}>
                      Определяем, какой продукт <span className="text-brand-red font-medium" vid={562}>действительно нужен</span> бизнесу.
                    </p>
                    <p className="text-brand-gray/70 text-[14px] leading-[1.5]" vid={563}>
                      Аудит, структура проекта и понятное техническое задание.
                    </p>
                  </div>
                  <div className="mb-10" vid={564}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6" vid={565}>
                      <li className="flex items-start gap-3" vid={566}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={567}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={568} /><polyline points="22 4 12 14.01 9 11.01" vid={569} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={570}>Аудит и аналитика</span>
                      </li>
                      <li className="flex items-start gap-3" vid={571}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={572}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={573} /><polyline points="22 4 12 14.01 9 11.01" vid={574} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={575}>Архитектура решения</span>
                      </li>
                      <li className="flex items-start gap-3" vid={576}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={577}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={578} /><polyline points="22 4 12 14.01 9 11.01" vid={579} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={580}>Формирование ТЗ</span>
                      </li>
                      <li className="flex items-start gap-3" vid={581}>
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vid={582}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={583} /><polyline points="22 4 12 14.01 9 11.01" vid={584} /></svg>
                        <span className="text-[15px] font-medium text-white/90" vid={585}>Планирование этапов</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/10" vid={586}>
                    {/* Consulting Timeline - Sequential Progress */}
                    <div className="relative flex items-center justify-between gap-2" vid={587}>
                      {/* Milestone 1 - Completed */}
                      <div className="flex flex-col items-center gap-2 shrink-0" vid={588}>
                        <div className="relative w-7 h-7" vid={589}>
                          <div className="w-7 h-7 bg-brand-red border border-brand-red flex items-center justify-center milestone-completed-pulse" vid={590}>
                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" vid={591}>
                              <polyline points="20 6 9 17 4 12" vid={592} />
                            </svg>
                          </div>
                          <div className="absolute inset-0 border border-brand-red/30 milestone-ring" vid={593} />
                        </div>
                        <span className="text-[9px] font-medium text-brand-red uppercase tracking-wider whitespace-nowrap" vid={594}>Аудит</span>
                      </div>
                      {/* Progress Line 1 (1→2) */}
                      <div className="relative flex-1 h-[2px] bg-white/10 mx-1" vid={595}>
                        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-red via-brand-red/80 to-brand-cyan origin-left" style={{width: '0%', animation: 'progress-fill-1 1.5s ease-out forwards'}} vid={596} />
                      </div>
                      {/* Milestone 2 - Active */}
                      <div className="flex flex-col items-center gap-2 shrink-0" vid={597}>
                        <div className="w-7 h-7 bg-[#16213E] border-2 border-brand-cyan flex items-center justify-center milestone-active" vid={598}>
                          <span className="text-[10px] font-bold text-brand-cyan" vid={599}>2</span>
                        </div>
                        <span className="text-[9px] font-medium text-brand-cyan uppercase tracking-wider whitespace-nowrap" vid={600}>Анализ</span>
                      </div>
                      {/* Progress Line 2 (2→3) */}
                      <div className="relative flex-1 h-[2px] bg-white/10 mx-1" vid={601}>
                        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-cyan via-brand-cyan/60 to-white/40 origin-left" style={{width: '0%', animation: 'progress-fill-2 1.5s ease-out 1.5s forwards'}} vid={602} />
                      </div>
                      {/* Milestone 3 - Pending */}
                      <div className="flex flex-col items-center gap-2 shrink-0" vid={603}>
                        <div className="w-7 h-7 bg-[#16213E]/50 border border-white/20 flex items-center justify-center" vid={604}>
                          <span className="text-[10px] font-bold text-white/40" vid={605}>3</span>
                        </div>
                        <span className="text-[9px] font-medium text-brand-gray uppercase tracking-wider whitespace-nowrap" vid={606}>ТЗ</span>
                      </div>
                      {/* Duration badge */}
                      <div className="shrink-0 flex items-center gap-1.5 bg-[#16213E]/80 border border-white/10 px-2 py-1 ml-2" vid={607}>
                        <span className="text-[9px] text-brand-gray uppercase tracking-wider" vid={608}>Срок</span>
                        <span className="text-[11px] font-semibold text-white whitespace-nowrap" vid={609}>1-2 недели</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" vid={610}>
                      <div className="flex flex-wrap gap-2" vid={611}>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-none text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={612}>Аудит</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-none text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={613}>Аналитика</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-none text-[13px] font-semibold text-brand-muted whitespace-nowrap" vid={614}>Архитектура</span>
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-white group-hover:text-brand-red transition-colors shrink-0" vid={615}>
                        Подробнее
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform" vid={616}><line x1={5} y1={12} x2={19} y2={12} vid={617} /><polyline points="12 5 19 12 12 19" vid={618} /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
