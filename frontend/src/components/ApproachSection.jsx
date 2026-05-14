export default function ApproachSection() {
  return (
    <>
      <section id="approach" className="section-watch py-16 lg:py-32 relative z-10 overflow-hidden" data-analytics-section="approach" data-analytics-section-name="Approach" vid={619}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative" vid={620}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center" vid={621}>
            <div className="relative z-20 max-w-[560px] lg:max-w-[580px] xl:max-w-[600px]" vid={622}>
              <div className="flex items-center gap-3 mb-8" vid={623}>
                <div className="w-8 h-[2px] bg-brand-cyan/60 rounded-full" vid={624} />
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]" vid={625} />
                <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-brand-cyan leading-none" vid={626}>
                  КОМПЛЕКСНЫЙ ПОДХОД
                </span>
              </div>
              <h2 className="section-title mb-10" vid={627}>
                Берём на себя <br className="hidden lg:block" vid={628} /> весь цикл работы <br className="hidden lg:block" vid={629} /> над продуктом
              </h2>
              <div className="relative approach-list" data-reveal style={{"--reveal-delay": '220ms', "--base-delay": '0.3s', "--step-interval": '0.6s'}} vid={630}>
                {/* Animated vertical line container with light pulse */}
                <div className="absolute left-[21px] top-4 bottom-4 w-px overflow-hidden" vid={631}>
                  <div className="w-full h-full bg-gradient-to-b from-brand-cyan/30 via-brand-red/20 to-transparent timeline-vertical-line origin-top" vid={632} />
                  <div className="timeline-light-pulse" vid={633} />
                </div>
                <div className="space-y-5" vid={634}>
                  {/* Step 01 */}
                  <div className="flex items-start gap-5 group timeline-step-item" style={{"--step-order": 0}} vid={635}>
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0 timeline-node-box opacity-0 translate-y-2" vid={636}>
                      <svg className="w-7 h-7 text-brand-cyan timeline-icon-focus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" vid={637}>
                        <circle cx={12} cy={12} r={10} vid={638} />
                        <circle cx={12} cy={12} r={3} opacity="0.5" vid={639} />
                        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" vid={640} />
                      </svg>
                    </div>
                    <div className="pt-1.5 timeline-step-content opacity-0 translate-x-3" vid={641}>
                      <h4 className="text-white font-semibold text-[17px] mb-2 flex items-center gap-3 flex-wrap" vid={642}>
                        От идеи и аналитики до релиза
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan/15 border border-brand-cyan/50 rounded-md text-[11px] font-bold text-brand-cyan uppercase tracking-wider shadow-[0_0_12px_rgba(0,212,255,0.2)]" vid={643}>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={644}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={645} /><polyline points="22 4 12 14.01 9 11.01" vid={646} /></svg>
                          Full Cycle
                        </span>
                      </h4>
                      <p className="text-[14px] text-brand-gray/80 leading-relaxed" vid={647}>Подключаемся на любом этапе: от формирования идеи до выпуска продукта</p>
                    </div>
                  </div>
                  {/* Step 02 */}
                  <div className="flex items-start gap-5 group timeline-step-item" style={{"--step-order": 1}} vid={648}>
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0 timeline-node-box opacity-0 translate-y-2" vid={649}>
                      <svg className="w-7 h-7 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" vid={650}>
                        <path className="timeline-icon-person-1" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" vid={651} />
                        <circle className="timeline-icon-person-1" cx={9} cy={7} r={4} vid={652} />
                        <path className="timeline-icon-person-2" d="M23 21v-2a4 4 0 0 0-3-3.87" vid={653} />
                        <path className="timeline-icon-person-2" d="M16 3.13a4 4 0 0 1 0 7.75" vid={654} />
                      </svg>
                    </div>
                    <div className="pt-1.5 timeline-step-content opacity-0 translate-x-3" vid={655}>
                      <h4 className="text-white font-semibold text-[17px] mb-2 flex items-center gap-3 flex-wrap" vid={656}>
                        Единая команда под весь проект
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/15 border border-brand-red/50 rounded-md text-[11px] font-bold text-brand-red uppercase tracking-wider shadow-[0_0_12px_rgba(227,30,74,0.2)]" vid={657}>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={658}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" vid={659} /><circle cx={9} cy={7} r={4} vid={660} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" vid={661} /></svg>
                          Team
                        </span>
                      </h4>
                      <p className="text-[14px] text-brand-gray/80 leading-relaxed" vid={662}>Согласованная работа специалистов: проектирование, разработка, интеграции</p>
                    </div>
                  </div>
                  {/* Step 03 */}
                  <div className="flex items-start gap-5 group timeline-step-item" style={{"--step-order": 2}} vid={663}>
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0 timeline-node-box opacity-0 translate-y-2" vid={664}>
                      <svg className="w-7 h-7 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" vid={665}>
                        <polygon className="timeline-icon-layer-top" points="12 2 2 7 12 12 22 7 12 2" vid={666} />
                        <polyline className="timeline-icon-layer-middle" points="2 17 12 22 22 17" vid={667} />
                        <polyline className="timeline-icon-layer-bottom" points="2 12 12 17 22 12" vid={668} />
                      </svg>
                    </div>
                    <div className="pt-1.5 timeline-step-content opacity-0 translate-x-3" vid={669}>
                      <h4 className="text-white font-semibold text-[17px] mb-2 flex items-center gap-3 flex-wrap" vid={670}>
                        Прозрачные этапы и приоритеты
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan/15 border border-brand-cyan/50 rounded-md text-[11px] font-bold text-brand-cyan uppercase tracking-wider shadow-[0_0_12px_rgba(0,212,255,0.2)]" vid={671}>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={672}><polygon points="12 2 2 7 12 12 22 7 12 2" vid={673} /><polyline points="2 17 12 22 22 17" vid={674} /></svg>
                          Process
                        </span>
                      </h4>
                      <p className="text-[14px] text-brand-gray/80 leading-relaxed" vid={675}>Чёткое планирование сохраняет целостность решения и ускоряет запуск</p>
                    </div>
                  </div>
                  {/* Step 04 */}
                  <div className="flex items-start gap-5 group timeline-step-item" style={{"--step-order": 3}} vid={676}>
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0 timeline-node-box opacity-0 translate-y-2" vid={677}>
                      <svg className="w-7 h-7 text-brand-red timeline-icon-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" vid={678}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" vid={679} />
                        <path d="M9 12l2 2 4-4" strokeWidth={2} vid={680} />
                      </svg>
                    </div>
                    <div className="pt-1.5 timeline-step-content opacity-0 translate-x-3" vid={681}>
                      <h4 className="text-white font-semibold text-[17px] mb-2 flex items-center gap-3 flex-wrap" vid={682}>
                        Поддержка и развитие после запуска
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/15 border border-brand-red/50 rounded-md text-[11px] font-bold text-brand-red uppercase tracking-wider shadow-[0_0_12px_rgba(227,30,74,0.2)]" vid={683}>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={684}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" vid={685} /><path d="M9 12l2 2 4-4" vid={686} /></svg>
                          Care
                        </span>
                      </h4>
                      <p className="text-[14px] text-brand-gray/80 leading-relaxed" vid={687}>Обеспечиваем долгосрочную поддержку и дальнейшее развитие продукта</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex relative h-[700px] xl:h-[720px] w-full items-center justify-center" data-reveal style={{"--reveal-delay": '160ms'}} vid={688}>
              {/* Desktop Version: Left (Scattered) → Center (System) → Right (Result) */}
              <div className="hidden lg:block relative w-full h-full perspective-[1200px]" vid={689}>
                {/* LEFT SIDE: Scattered Input Modules - усиленный 3D эффект */}
                {/* Mobile Dev - объемная карточка */}
                <div className="infographic-mobile absolute left-[8%] top-[20%] w-[110px] p-4 bg-gradient-to-br from-[#16213E]/95 to-[#0A0A1A]/95 backdrop-blur-sm rounded-xl border border-brand-cyan/30 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,212,255,0.1)] transform -rotate-6 rotateY-[15deg] rotateX-[5deg] hover:rotate-0 hover:rotateY-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,212,255,0.15)] transition-all duration-500 group" style={{transformStyle: 'preserve-3d'}} vid={693}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-xl pointer-events-none" vid={694} />
                  <div className="relative z-10" vid={695}>
                    <div className="flex items-center gap-2 mb-3" vid={696}>
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center shadow-inner" vid={697}>
                        <svg className="w-4 h-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={698}><rect x={5} y={2} width={14} height={20} rx={2} ry={2} vid={699} /><line x1={12} y1={18} x2="12.01" y2={18} vid={700} /></svg>
                      </div>
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider" vid={701}>Mobile</span>
                    </div>
                    <div className="space-y-2" vid={702}>
                      <div className="h-2 w-full bg-brand-cyan/20 rounded-full shadow-inner" vid={703} />
                      <div className="h-2 w-2/3 bg-white/10 rounded-full" vid={704} />
                    </div>
                  </div>
                </div>
                {/* Web Dev */}
                <div className="infographic-web absolute left-[4%] top-[45%] w-[110px] p-4 bg-gradient-to-br from-[#16213E]/95 to-[#0A0A1A]/95 backdrop-blur-sm rounded-xl border border-brand-red/30 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(227,30,74,0.1)] transform rotate-3 rotateY-[18deg] rotateX-[-3deg] hover:rotate-0 hover:rotateY-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(227,30,74,0.15)] transition-all duration-500" style={{transformStyle: 'preserve-3d'}} vid={705}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-xl pointer-events-none" vid={706} />
                  <div className="relative z-10" vid={707}>
                    <div className="flex items-center gap-2 mb-3" vid={708}>
                      <div className="w-8 h-8 rounded-lg bg-brand-red/20 flex items-center justify-center shadow-inner" vid={709}>
                        <svg className="w-4 h-4 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={710}><rect x={3} y={3} width={18} height={18} rx={2} ry={2} vid={711} /><line x1={3} y1={9} x2={21} y2={9} vid={712} /><line x1={9} y1={21} x2={9} y2={9} vid={713} /></svg>
                      </div>
                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider" vid={714}>Web</span>
                    </div>
                    <div className="space-y-2" vid={715}>
                      <div className="h-2 w-full bg-brand-red/20 rounded-full shadow-inner" vid={716} />
                      <div className="h-2 w-3/4 bg-white/10 rounded-full" vid={717} />
                    </div>
                  </div>
                </div>
                {/* UI/UX */}
                <div className="infographic-ux absolute left-[10%] top-[70%] w-[110px] p-4 bg-gradient-to-br from-[#16213E]/95 to-[#0A0A1A]/95 backdrop-blur-sm rounded-xl border border-brand-cyan/25 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_15px_rgba(0,212,255,0.08)] transform -rotate-3 rotateY-[12deg] rotateX-[8deg] hover:rotate-0 hover:rotateY-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,212,255,0.12)] transition-all duration-500" style={{transformStyle: 'preserve-3d'}} vid={718}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-xl pointer-events-none" vid={719} />
                  <div className="relative z-10" vid={720}>
                    <div className="flex items-center gap-2 mb-3" vid={721}>
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 flex items-center justify-center shadow-inner" vid={722}>
                        <svg className="w-4 h-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={723}><polygon points="12 2 2 7 12 12 22 7 12 2" vid={724} /><polyline points="2 17 12 22 22 17" vid={725} /><polyline points="2 12 12 17 22 12" vid={726} /></svg>
                      </div>
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider" vid={727}>UX/UI</span>
                    </div>
                    <div className="space-y-2" vid={728}>
                      <div className="h-2 w-full bg-brand-cyan/15 rounded-full shadow-inner" vid={729} />
                      <div className="h-2 w-1/2 bg-white/10 rounded-full" vid={730} />
                    </div>
                  </div>
                </div>
                {/* Integration */}
                <div className="infographic-api absolute left-[24%] top-[10%] w-[100px] p-3 bg-gradient-to-br from-[#16213E]/90 to-[#0A0A1A]/90 backdrop-blur-sm rounded-lg border border-brand-cyan/20 shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_15px_rgba(0,212,255,0.08)] transform rotate-6 rotateY-[20deg] rotateX-[5deg] hover:rotate-0 hover:rotateY-0 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,212,255,0.12)] transition-all duration-500" style={{transformStyle: 'preserve-3d'}} vid={731}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-lg pointer-events-none" vid={732} />
                  <div className="relative z-10 flex items-center gap-2" vid={733}>
                    <div className="w-6 h-6 rounded bg-brand-cyan/15 flex items-center justify-center shadow-inner" vid={734}>
                      <svg className="w-3.5 h-3.5 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={735}><rect x={8} y={8} width={8} height={8} rx={2} vid={736} /><path d="M12 2v2" vid={737} /><path d="M12 20v2" vid={738} /><path d="M2 12h2" vid={739} /><path d="M20 12h2" vid={740} /></svg>
                    </div>
                    <span className="text-[9px] font-medium text-white/80" vid={741}>API</span>
                  </div>
                </div>
                {/* Support */}
                <div className="infographic-support absolute left-[22%] bottom-[12%] w-[100px] p-3 bg-gradient-to-br from-[#16213E]/90 to-[#0A0A1A]/90 backdrop-blur-sm rounded-lg border border-brand-red/20 shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_15px_rgba(227,30,74,0.08)] transform -rotate-6 rotateY-[15deg] rotateX-[-5deg] hover:rotate-0 hover:rotateY-0 hover:scale-110 hover:shadow-[0_20px_40px_rgba(227,30,74,0.12)] transition-all duration-500" style={{transformStyle: 'preserve-3d'}} vid={742}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-lg pointer-events-none" vid={743} />
                  <div className="relative z-10 flex items-center gap-2" vid={744}>
                    <div className="w-6 h-6 rounded bg-brand-red/15 flex items-center justify-center shadow-inner" vid={745}>
                      <svg className="w-3.5 h-3.5 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={746}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" vid={747} /><path d="M9 12l2 2 4-4" vid={748} /></svg>
                    </div>
                    <span className="text-[9px] font-medium text-white/80" vid={749}>Support</span>
                  </div>
                </div>
                {/* Consulting */}
                <div className="infographic-consult absolute left-[30%] top-[38%] w-[95px] p-3 bg-gradient-to-br from-[#16213E]/85 to-[#0A0A1A]/85 backdrop-blur-sm rounded-lg border border-white/15 shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_15px_rgba(255,255,255,0.05)] transform rotate-2 rotateY-[22deg] rotateX-[3deg] hover:rotate-0 hover:rotateY-0 hover:scale-110 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all duration-500" style={{transformStyle: 'preserve-3d'}} vid={750}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none" vid={751} />
                  <div className="relative z-10 flex items-center gap-2" vid={752}>
                    <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center shadow-inner" vid={753}>
                      <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={754}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" vid={755} /><polyline points="14 2 14 8 20 8" vid={756} /><line x1={16} y1={13} x2={8} y2={13} vid={757} /><line x1={16} y1={17} x2={8} y2={17} vid={758} /></svg>
                    </div>
                    <span className="text-[9px] font-medium text-white/70" vid={759}>Consult</span>
                  </div>
                </div>
                {/* CENTER: Усиленный System Core с объемом */}
                <div className="infographic-system absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" style={{transform: 'translate(-50%, -50%) translateZ(40px)'}} vid={760}>
                  <div className="relative w-[220px] h-[220px]" vid={761}>
                    {/* Outer pulsing ring с тенью */}
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-brand-cyan/40 animate-spin-slow shadow-[0_0_30px_rgba(0,212,255,0.3)]" style={{animationDuration: '30s'}} vid={764} />
                    <div className="absolute -inset-6 rounded-full border border-brand-cyan/20 animate-pulse" vid={765} />
                    {/* Main System Core - приподнятая карточка */}
                    <div className="absolute inset-3 bg-gradient-to-br from-[#1E2A4A] to-[#0A0A1A] rounded-3xl border-2 border-brand-cyan/60 shadow-[0_0_80px_rgba(0,212,255,0.35),0_25px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden transform rotateX-[5deg] rotateY-[-3deg]" style={{transformStyle: 'preserve-3d'}} vid={766}>
                      {/* Глянцевый блик */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none" vid={767} />
                      {/* Логотип AKA - фоновый */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30" vid={768}>
                        <svg className="w-[80%] h-[80%] text-brand-red/10 animate-spin-slow" style={{animationDuration: '25s'}} viewBox="0 0 100 100" fill="none" vid={769}>
                          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" vid={770} />
                        </svg>
                      </div>
                      {/* Маленький вращающийся логотип с тенью */}
                      <div className="relative w-20 h-20 mb-3 animate-spin-slow drop-shadow-[0_0_15px_rgba(227,30,74,0.5)]" style={{animationDuration: '15s', transform: 'translateZ(20px)'}} vid={771}>
                        <svg className="w-full h-full text-brand-red" viewBox="0 0 24 24" fill="none" vid={772}>
                          <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" fillOpacity="0.9" vid={773} />
                          <path d="M12 2L6 12L12 22L18 12L12 2Z" fill="currentColor" vid={774} />
                        </svg>
                      </div>
                      <span className="text-[14px] font-bold text-white uppercase tracking-widest z-10 drop-shadow-lg" style={{transform: 'translateZ(10px)'}} vid={775}>AKA</span>
                      <span className="text-[11px] text-brand-cyan uppercase tracking-wider mt-1 z-10 font-semibold" style={{transform: 'translateZ(10px)'}} vid={776}>System</span>
                      <span className="text-[9px] text-brand-gray mt-3 px-4 py-1.5 bg-brand-cyan/15 rounded-full border border-brand-cyan/30 z-10 shadow-[0_0_15px_rgba(0,212,255,0.2)]" style={{transform: 'translateZ(15px)'}} vid={777}>Orchestration</span>
                    </div>
                    {/* Connecting nodes с glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,212,255,1),0_0_40px_rgba(0,212,255,0.5)] animate-pulse z-20" vid={778} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-red shadow-[0_0_20px_rgba(227,30,74,1),0_0_40px_rgba(227,30,74,0.5)] animate-pulse z-20" style={{animationDelay: '0.5s'}} vid={779} />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-brand-cyan/80 shadow-[0_0_15px_rgba(0,212,255,0.8)] animate-pulse z-20" style={{animationDelay: '1s'}} vid={780} />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-brand-red/80 shadow-[0_0_15px_rgba(227,30,74,0.8)] animate-pulse z-20" style={{animationDelay: '1.5s'}} vid={781} />
                  </div>
                </div>
                {/* RIGHT SIDE: Усиленный Result с объемом */}
                <div className="infographic-result absolute right-[3%] top-1/2 -translate-y-1/2 w-[300px]" style={{transform: 'translateY(-50%) translateZ(30px)'}} vid={782}>
                  <div className="relative bg-gradient-to-br from-[#1A2642] to-[#0A0A1A] rounded-2xl border border-white/30 shadow-[0_0_60px_rgba(0,212,255,0.2),0_30px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)] p-7 transform rotateY-[-8deg] rotateX-[3deg] hover:rotateY-0 hover:rotateX-0 hover:scale-105 transition-all duration-500" style={{transformStyle: 'preserve-3d'}} vid={783}>
                    {/* Глянцевый блик */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-2xl pointer-events-none" vid={784} />
                    {/* Product Header */}
                    <div className="relative flex items-center gap-4 mb-6 pb-5 border-b border-white/15" vid={785}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)]" vid={786}>
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={787}><polyline points="20 6 9 17 4 12" vid={788} /></svg>
                      </div>
                      <div vid={789}>
                        <div className="text-[14px] font-bold text-white uppercase tracking-wider drop-shadow-md" vid={790}>Digital Product</div>
                        <div className="text-[11px] text-brand-cyan font-medium" vid={791}>Unified Platform</div>
                      </div>
                    </div>
                    {/* Product Body */}
                    <div className="relative space-y-5" vid={792}>
                      <div className="bg-white/8 rounded-xl border border-white/15 p-5 shadow-inner" vid={793}>
                        <div className="flex items-center gap-2 mb-4" vid={794}>
                          <div className="flex gap-1.5" vid={795}>
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)]" vid={796} />
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-red shadow-[0_0_8px_rgba(227,30,74,0.8)]" vid={797} />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/40" vid={798} />
                          </div>
                          <div className="flex-1" vid={799} />
                          <div className="w-14 h-2 bg-white/25 rounded-full" vid={800} />
                        </div>
                        <div className="space-y-3" vid={801}>
                          <div className="h-3 w-full bg-brand-cyan/40 rounded-full shadow-inner" vid={802} />
                          <div className="h-3 w-3/4 bg-white/20 rounded-full" vid={803} />
                          <div className="flex gap-3 mt-5" vid={804}>
                            <div className="flex-1 h-12 bg-brand-cyan/25 rounded-lg border border-brand-cyan/40 shadow-[0_0_15px_rgba(0,212,255,0.15)]" vid={805} />
                            <div className="flex-1 h-12 bg-brand-red/25 rounded-lg border border-brand-red/40 shadow-[0_0_15px_rgba(227,30,74,0.15)]" vid={806} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[11px]" vid={807}>
                        <div className="flex items-center gap-2 bg-green-500/15 px-3 py-1.5 rounded-full border border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.2)]" vid={808}>
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" vid={809} />
                          <span className="text-green-400 font-semibold" vid={810}>Live</span>
                        </div>
                        <span className="text-brand-cyan font-bold" vid={811}>v2.4.0</span>
                      </div>
                    </div>
                    {/* Result Badge - крупнее с тенью */}
                    <div className="absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-br from-brand-red to-brand-red/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(227,30,74,0.6),0_10px_20px_rgba(0,0,0,0.5)] border-2 border-[#16213E] z-20" vid={812}>
                      <svg className="w-7 h-7 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={813}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" vid={814} /><polyline points="22 4 12 14.01 9 11.01" vid={815} /></svg>
                    </div>
                  </div>
                  {/* Label - интегрирована */}
                  <div className="mt-6 bg-[#16213E]/90 border border-brand-cyan/40 rounded-lg px-5 py-3 backdrop-blur-sm shadow-[0_0_20px_rgba(0,212,255,0.15)]" vid={816}>
                    <span className="text-[12px] font-bold text-brand-cyan uppercase tracking-widest flex items-center gap-2 justify-center" vid={817}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={818}><path d="M5 12l5 5L20 7" vid={819} /></svg>
                      Собранный результат
                    </span>
                  </div>
                </div>
                {/* Connection Lines SVG с анимацией */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 700 700" preserveAspectRatio="xMidYMid meet" vid={820}>
                  <defs vid={821}>
                    <linearGradient id="line-cyan" x1="0%" y1="0%" x2="100%" y2="0%" vid={822}>
                      <stop offset="0%" stopColor="rgba(0,212,255,0.3)" vid={823} />
                      <stop offset="100%" stopColor="rgba(0,212,255,0.9)" vid={824} />
                    </linearGradient>
                    <linearGradient id="line-red" x1="0%" y1="0%" x2="100%" y2="0%" vid={825}>
                      <stop offset="0%" stopColor="rgba(227,30,74,0.3)" vid={826} />
                      <stop offset="100%" stopColor="rgba(227,30,74,0.9)" vid={827} />
                    </linearGradient>
                  </defs>
                  {/* Lines from left inputs to center system с анимацией */}
                  <path d="M130 180 Q200 200 280 280" stroke="url(#line-cyan)" strokeWidth={2} fill="none" strokeDasharray="6 4" opacity="0.8" vid={828} className="animate-flow-line-left">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="3s" repeatCount="indefinite" vid={829} />
                  </path>
                  <path d="M100 350 Q180 320 280 320" stroke="url(#line-red)" strokeWidth={2} fill="none" strokeDasharray="6 4" opacity="0.8" vid={830} className="animate-flow-line-left">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="3.5s" repeatCount="indefinite" vid={831} />
                  </path>
                  <path d="M140 520 Q210 420 280 360" stroke="url(#line-cyan)" strokeWidth={2} fill="none" strokeDasharray="6 4" opacity="0.8" vid={832} className="animate-flow-line-left">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="2.8s" repeatCount="indefinite" vid={833} />
                  </path>
                  <path d="M220 120 Q260 200 300 260" stroke="url(#line-cyan)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" opacity="0.6" vid={834} className="animate-flow-line-left">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="4s" repeatCount="indefinite" vid={835} />
                  </path>
                  <path d="M210 580 Q250 450 290 380" stroke="url(#line-red)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" opacity="0.6" vid={836} className="animate-flow-line-left">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="3.2s" repeatCount="indefinite" vid={837} />
                  </path>
                  <path d="M260 280 Q280 300 320 320" stroke="url(#line-cyan)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" opacity="0.5" vid={838} className="animate-flow-line-left">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="3.8s" repeatCount="indefinite" vid={839} />
                  </path>
                  {/* Line from center to right result - более выразительная */}
                  <path d="M420 350 Q480 350 560 350" stroke="url(#line-cyan)" strokeWidth={3} fill="none" strokeDasharray="8 4" opacity={1} vid={840} className="animate-flow-line-right">
                    <animate attributeName="stroke-dashoffset" from={100} to={0} dur="2s" repeatCount="indefinite" vid={841} />
                  </path>
                  {/* Direction indicators */}
                  <circle cx={280} cy={280} r={3} fill="#00D4FF" opacity={1} vid={842}>
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" vid={843} />
                  </circle>
                  <circle cx={560} cy={350} r={3} fill="#00D4FF" opacity={1} vid={844}>
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" vid={845} />
                  </circle>
                </svg>
                {/* Labels - интегрированы в схему */}
                <div className="absolute left-[3%] top-[5%] bg-[#16213E]/80 border border-brand-cyan/30 rounded-lg px-4 py-2 backdrop-blur-sm" vid={846}>
                  <span className="text-[11px] font-bold text-brand-gray uppercase tracking-widest flex items-center gap-2" vid={847}>
                    <svg className="w-4 h-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={848}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" vid={849} /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" vid={850} /></svg>
                    Входные данные
                  </span>
                </div>
              </div>
              {/* Mobile Version: Vertical 16:9 Block */}
              <div className="lg:hidden relative w-full aspect-video bg-gradient-to-br from-[#16213E]/40 to-[#0A0A1A]/60 rounded-2xl border border-white/10 overflow-hidden" vid={851}>
                {/* Top: Scattered Inputs (4 key modules) */}
                <div className="absolute top-[15%] left-[10%] w-[60px] p-2 bg-[#16213E]/90 rounded-lg border border-brand-cyan/30 transform -rotate-3" vid={854}>
                  <div className="w-4 h-4 rounded bg-brand-cyan/20 flex items-center justify-center mb-1" vid={855}>
                    <svg className="w-2.5 h-2.5 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={856}><rect x={5} y={2} width={14} height={20} rx={2} vid={857} /></svg>
                  </div>
                  <div className="h-1 w-full bg-brand-cyan/20 rounded-full" vid={858} />
                </div>
                <div className="absolute top-[12%] left-[38%] w-[60px] p-2 bg-[#16213E]/90 rounded-lg border border-brand-red/30 transform rotate-2" vid={859}>
                  <div className="w-4 h-4 rounded bg-brand-red/20 flex items-center justify-center mb-1" vid={860}>
                    <svg className="w-2.5 h-2.5 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={861}><rect x={3} y={3} width={18} height={18} rx={2} vid={862} /></svg>
                  </div>
                  <div className="h-1 w-full bg-brand-red/20 rounded-full" vid={863} />
                </div>
                <div className="absolute top-[15%] right-[10%] w-[60px] p-2 bg-[#16213E]/90 rounded-lg border border-brand-cyan/20 transform rotate-3" vid={864}>
                  <div className="w-4 h-4 rounded bg-brand-cyan/10 flex items-center justify-center mb-1" vid={865}>
                    <svg className="w-2.5 h-2.5 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={866}><polygon points="12 2 2 7 12 12 22 7 12 2" vid={867} /></svg>
                  </div>
                  <div className="h-1 w-full bg-brand-cyan/15 rounded-full" vid={868} />
                </div>
                <div className="absolute top-[8%] right-[35%] w-[50px] p-1.5 bg-[#16213E]/80 rounded-lg border border-white/10 transform -rotate-2" vid={869}>
                  <div className="flex items-center gap-1" vid={870}>
                    <div className="w-3 h-3 rounded bg-white/10 flex items-center justify-center" vid={871}>
                      <svg className="w-2 h-2 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} vid={872}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" vid={873} /></svg>
                    </div>
                  </div>
                </div>
                {/* Center: System Node */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]" vid={874}>
                  <div className="absolute inset-0 rounded-full border border-dashed border-brand-cyan/30 animate-spin-slow" style={{animationDuration: '25s'}} vid={875} />
                  <div className="absolute inset-2 bg-gradient-to-br from-[#16213E] to-[#0A0A1A] rounded-2xl border-2 border-brand-cyan/40 shadow-[0_0_30px_rgba(0,212,255,0.2)] flex flex-col items-center justify-center" vid={876}>
                    <div className="w-8 h-8 rounded-xl bg-brand-cyan/20 flex items-center justify-center mb-1" vid={877}>
                      <svg className="w-4 h-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" vid={878}><rect x={3} y={3} width={7} height={7} rx={1} vid={879} /><rect x={14} y={3} width={7} height={7} rx={1} vid={880} /><rect x={14} y={14} width={7} height={7} rx={1} vid={881} /><rect x={3} y={14} width={7} height={7} rx={1} vid={882} /></svg>
                    </div>
                    <span className="text-[8px] font-bold text-white uppercase" vid={883}>AKA</span>
                    <span className="text-[7px] text-brand-cyan" vid={884}>System</span>
                  </div>
                </div>
                {/* Vertical Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 60" preserveAspectRatio="none" vid={885}>
                  <line x1={20} y1={15} x2={50} y2={30} stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" strokeDasharray="2 1" vid={886} />
                  <line x1={40} y1={12} x2={50} y2={30} stroke="rgba(227,30,74,0.4)" strokeWidth="0.5" strokeDasharray="2 1" vid={887} />
                  <line x1={60} y1={12} x2={50} y2={30} stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" strokeDasharray="2 1" vid={888} />
                  <line x1={80} y1={15} x2={50} y2={30} stroke="rgba(227,30,74,0.4)" strokeWidth="0.5" strokeDasharray="2 1" vid={889} />
                  <line x1={50} y1={40} x2={50} y2={55} stroke="rgba(0,212,255,0.6)" strokeWidth={1} strokeDasharray="3 2" vid={890} />
                </svg>
                {/* Bottom: Unified Result */}
                <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[140px] bg-gradient-to-br from-[#16213E] to-[#0A0A1A] rounded-xl border border-white/20 shadow-lg p-3" vid={891}>
                  <div className="flex items-center gap-2 mb-2" vid={892}>
                    <div className="w-5 h-5 rounded-lg bg-brand-cyan/30 flex items-center justify-center" vid={893}>
                      <svg className="w-3 h-3 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" vid={894}><polyline points="20 6 9 17 4 12" vid={895} /></svg>
                    </div>
                    <span className="text-[8px] font-bold text-white uppercase" vid={896}>Product</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 space-y-1.5" vid={897}>
                    <div className="h-1 w-full bg-brand-cyan/30 rounded-full" vid={898} />
                    <div className="h-1 w-2/3 bg-white/20 rounded-full" vid={899} />
                    <div className="flex gap-1 mt-1" vid={900}>
                      <div className="flex-1 h-4 bg-brand-cyan/20 rounded" vid={901} />
                      <div className="flex-1 h-4 bg-brand-red/20 rounded" vid={902} />
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
