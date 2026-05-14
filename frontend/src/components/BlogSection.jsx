export default function BlogSection() {
  return (
    <>
      <section id="blog" className="section-space section-watch" data-analytics-section="blog" data-analytics-section-name="Blog">
        <div className="site-container">
          <div className="content-shell">
            <div className="blog-intro">
              <div className="blog-orbit left" />
              <div className="blog-orbit right" />
              <div className="section-kicker justify-center" data-kicker data-kicker-target="blog">
                <span className="section-kicker-pill" />
                <span className="section-kicker-label">Редакция AKA</span>
              </div>
              <h2 className="section-title mt-5">НАШ БЛОГ</h2>
              <p className="section-lead">Глубокое погружение в технологии и стратегии роста</p>
            </div>
            <div className="blog-grid" data-reveal style={{"--reveal-delay": '90ms'}}>
              <article className="lg:col-span-2 relative group bg-[rgba(18,20,26,.9)] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/80 to-transparent z-10" />
                <div className="relative w-full aspect-[21/9] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#161D31] via-[#12141a] to-[#0B0C10] overflow-hidden flex items-center justify-end">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                  <div className="relative z-0 pr-12 md:pr-24 lg:pr-32 transform group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute -inset-4 bg-cyan-400 opacity-20 blur-3xl rounded-full" />
                    <svg className="w-full h-full" viewBox="0 0 500 214" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <radialGradient id="heroSphere" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FF2A5F" stopOpacity="0.9" />
                          <stop offset="40%" stopColor="#00F0FF" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
                        </radialGradient>
                        <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#00F0FF" stopOpacity={1} />
                          <stop offset="70%" stopColor="#FF2A5F" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.4" />
                        </radialGradient>
                        <filter id="heroGlow">
                          <feGaussianBlur stdDeviation={3} result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g transform="translate(400, 107)">
                        <circle cx={0} cy={0} r={60} fill="url(#heroSphere)" opacity="0.5" filter="url(#heroGlow)">
                          <animate attributeName="r" values="60;65;60" dur="4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;0.7;0.5" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <path fill="url(#heroCore)" opacity="0.95" filter="url(#heroGlow)">
                          <animate attributeName="d" values="M-35,0 Q-25,-35 0,-35 Q25,-35 35,0 Q25,35 0,35 Q-25,35 -35,0 Z; M-38,-5 Q-20,-32 5,-30 Q28,-28 38,5 Q30,32 -5,30 Q-28,28 -38,-5 Z; M-35,0 Q-25,-35 0,-35 Q25,-35 35,0 Q25,35 0,35 Q-25,35 -35,0 Z" dur="6s" repeatCount="indefinite" />
                        </path>
                        <ellipse cx={0} cy={0} rx={45} ry={18} fill="none" stroke="#00F0FF" strokeWidth="0.6" opacity="0.4" transform="rotate(0)">
                          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="20s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse cx={0} cy={0} rx={45} ry={18} fill="none" stroke="#00F0FF" strokeWidth="0.6" opacity="0.3" transform="rotate(45)">
                          <animateTransform attributeName="transform" type="rotate" values="45;405" dur="15s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse cx={0} cy={0} rx={45} ry={18} fill="none" stroke="#FF2A5F" strokeWidth="0.5" opacity="0.3" transform="rotate(90)">
                          <animateTransform attributeName="transform" type="rotate" values="90;450" dur="18s" repeatCount="indefinite" />
                        </ellipse>
                      </g>
                      <g stroke="#00F0FF" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" filter="url(#heroGlow)">
                        <line x1={400} y1={47} x2={400} y2={10} strokeDasharray="4 3">
                          <animate attributeName="stroke-dashoffset" values="0;14" dur="1.5s" repeatCount="indefinite" />
                        </line>
                        <line x1={460} y1={107} x2={490} y2={107} strokeDasharray="4 3">
                          <animate attributeName="stroke-dashoffset" values="0;14" dur="1.2s" repeatCount="indefinite" />
                        </line>
                        <line x1={400} y1={167} x2={400} y2={204} strokeDasharray="4 3">
                          <animate attributeName="stroke-dashoffset" values="0;14" dur="1.8s" repeatCount="indefinite" />
                        </line>
                        <line x1={440} y1={67} x2={470} y2={37} strokeDasharray="4 3" opacity="0.5">
                          <animate attributeName="stroke-dashoffset" values="0;14" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1={440} y1={147} x2={470} y2={177} strokeDasharray="4 3" opacity="0.5">
                          <animate attributeName="stroke-dashoffset" values="0;14" dur="1.6s" repeatCount="indefinite" />
                        </line>
                      </g>
                      <g filter="url(#heroGlow)">
                        <circle cx={400} cy={8} r={4} fill="#00F0FF" opacity="0.9">
                          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <rect x={486} y={103} width={8} height={8} rx={2} fill="#00F0FF" opacity="0.8">
                          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite" />
                        </rect>
                        <circle cx={400} cy={206} r={4} fill="#00F0FF" opacity="0.9">
                          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2.2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={475} cy={35} r={3} fill="#FF2A5F" opacity="0.7">
                          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
                        </circle>
                        <polygon points="480,180 485,175 485,185" fill="#00F0FF" opacity="0.6">
                          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.3s" repeatCount="indefinite" />
                        </polygon>
                      </g>
                      <circle cx={350} cy={60} r="1.5" fill="#00F0FF" opacity="0.3">
                        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={450} cy={150} r={2} fill="#FF2A5F" opacity="0.25">
                        <animate attributeName="opacity" values="0.25;0.5;0.25" dur="4s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16 max-w-3xl">
                  <div className="inline-flex items-center bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-1.5 mb-6 self-start">
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase">Trend Report 2026</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.15]">
                    Будущее AI в интерфейсах: <br />от чат-ботов к адаптивным мирам
                  </h3>
                  <p className="text-slate-300 text-lg md:text-xl font-sans mb-10 max-w-xl opacity-90">
                    Исследуем, как генеративный дизайн и контекстное обучение изменят наше представление о цифровом опыте в ближайшие два года.
                  </p>
                  <div className="flex items-center gap-6">
                    <a href="#" className="bg-[var(--red)] text-white font-display font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#0B0C10] transition-all duration-300 shadow-lg shadow-pink-500/20">
                      Читать лонгрид
                    </a>
                    <div className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                      <span>24 апреля 2026</span>
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>12 мин чтения</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="bg-[rgba(18,20,26,.9)] rounded-2xl overflow-hidden border border-white/5 group hover:border-white/20 transition-all flex flex-col">
                <div className="relative w-full aspect-video bg-gradient-to-br from-[#161D31]/40 to-[#0B0C10] flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-[#0B0C10]/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 z-10">
                    <span className="font-mono text-[10px] font-medium text-white tracking-widest uppercase">Strategy</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="hexFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.05" />
                      </linearGradient>
                      <linearGradient id="hexFill2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF2A5F" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.1" />
                      </linearGradient>
                      <filter id="isoGlow">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <g stroke="#00F0FF" strokeWidth="0.4" opacity="0.15">
                      <line x1={40} y1={90} x2={160} y2={30} />
                      <line x1={160} y1={30} x2={280} y2={90} />
                      <line x1={40} y1={120} x2={160} y2={60} />
                      <line x1={160} y1={60} x2={280} y2={120} />
                      <line x1={40} y1={150} x2={160} y2={90} />
                      <line x1={160} y1={90} x2={280} y2={150} />
                      <line x1={100} y1={60} x2={100} y2={150} />
                      <line x1={160} y1={30} x2={160} y2={180} />
                      <line x1={220} y1={60} x2={220} y2={150} />
                    </g>
                    <g transform="translate(160, 100)" filter="url(#isoGlow)">
                      <path d="M-30,-15 L0,-30 L30,-15 L30,15 L0,30 L-30,15 Z" fill="url(#hexFill1)" stroke="#00F0FF" strokeWidth="1.2" opacity="0.9" />
                      <path d="M-18,-9 L0,-18 L18,-9 L18,9 L0,18 L-18,9 Z" fill="none" stroke="#00F0FF" strokeWidth="0.6" opacity="0.6" />
                      <g transform="translate(-55, -25)">
                        <path d="M-20,-10 L0,-20 L20,-10 L20,10 L0,20 L-20,10 Z" fill="url(#hexFill2)" stroke="#FF2A5F" strokeWidth="0.8" opacity="0.7" />
                      </g>
                      <g transform="translate(55, -25)">
                        <path d="M-18,-9 L0,-18 L18,-9 L18,9 L0,18 L-18,9 Z" fill="none" stroke="#00F0FF" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
                      </g>
                      <g transform="translate(-45, 35)">
                        <path d="M-15,-7.5 L0,-15 L15,-7.5 L15,7.5 L0,15 L-15,7.5 Z" fill="#00F0FF" opacity="0.2" stroke="#00F0FF" strokeWidth="0.7" />
                      </g>
                      <g transform="translate(50, 30)">
                        <path d="M-12,-6 L0,-12 L12,-6 L12,6 L0,12 L-12,6 Z" fill="none" stroke="#00F0FF" strokeWidth="0.6" />
                      </g>
                      <g stroke="#00F0FF" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
                        <line x1={-35} y1={-15} x2={-55} y2={-25} strokeDasharray="3 2">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1={35} y1={-15} x2={55} y2={-25} strokeDasharray="3 2">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="1.8s" repeatCount="indefinite" />
                        </line>
                        <line x1={-25} y1={20} x2={-40} y2={35} strokeDasharray="3 2">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.2s" repeatCount="indefinite" />
                        </line>
                        <line x1={25} y1={15} x2={40} y2={25} strokeDasharray="3 2">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" repeatCount="indefinite" />
                        </line>
                      </g>
                    </g>
                    <circle cx={50} cy={60} r="2.5" fill="#00F0FF" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={270} cy={120} r={2} fill="#FF2A5F" opacity="0.5">
                      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={60} cy={140} r="1.5" fill="#00F0FF" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-slate-400 font-mono text-xs mb-4">
                    <span>12 апреля 2026</span>
                    <span>•</span>
                    <span>8 мин</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Масштабирование дизайн-систем в больших энтерпрайз-продуктах</h4>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-6">Как не превратить живой продукт в кладбище компонентов при росте команды до 100+ разработчиков.</p>
                  <a href="#" className="mt-auto text-sm font-semibold text-cyan-400 hover:text-white transition-colors inline-flex items-center gap-2 font-display">
                    Подробнее
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </article>
              <article className="bg-[rgba(18,20,26,.9)] rounded-2xl overflow-hidden border border-white/5 group hover:border-white/20 transition-all flex flex-col">
                <div className="relative w-full aspect-video bg-gradient-to-br from-[#161D31]/40 to-[#0B0C10] flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-[#0B0C10]/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 z-10">
                    <span className="font-mono text-[10px] font-medium text-white tracking-widest uppercase">Frontend</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="serverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#121A2F" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0A0F1C" stopOpacity="0.4" />
                      </linearGradient>
                      <filter id="dataGlow">
                        <feGaussianBlur stdDeviation={2} result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon points="0,90 160,20 320,90 160,160" fill="#121A2F" opacity="0.3" />
                    <line x1={0} y1={90} x2={320} y2={90} stroke="#00F0FF" strokeWidth="0.5" opacity="0.3" />
                    <text x={200} y={45} fill="#00F0FF" fontFamily="monospace" fontSize={10} opacity="0.6" fontWeight="bold">SERVER</text>
                    <g transform="translate(220, 55)" opacity="0.5">
                      <rect x={-12} y={-4} width={24} height={4} rx={1} fill="none" stroke="#00F0FF" strokeWidth="0.8" />
                      <rect x={-12} y={2} width={24} height={4} rx={1} fill="none" stroke="#00F0FF" strokeWidth="0.8" />
                      <rect x={-12} y={8} width={24} height={4} rx={1} fill="none" stroke="#00F0FF" strokeWidth="0.8" />
                    </g>
                    <text x={80} y={135} fill="#00F0FF" fontFamily="monospace" fontSize={10} opacity="0.6" fontWeight="bold">CLIENT</text>
                    <g transform="translate(95, 115)" opacity="0.5">
                      <rect x={-15} y={-8} width={30} height={16} rx={2} fill="none" stroke="#00F0FF" strokeWidth="0.8" />
                      <line x1={-10} y1={-3} x2={10} y2={-3} stroke="#00F0FF" strokeWidth="0.5" opacity="0.5" />
                      <line x1={-10} y1={2} x2={6} y2={2} stroke="#00F0FF" strokeWidth="0.5" opacity="0.5" />
                    </g>
                    <g filter="url(#dataGlow)">
                      <line x1={80} y1={60} x2={70} y2={85} stroke="#00F0FF" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 10" opacity="0.8">
                        <animate attributeName="stroke-dashoffset" values="0;16" dur="0.6s" repeatCount="indefinite" />
                      </line>
                      <line x1={120} y1={50} x2={110} y2={75} stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 8" opacity="0.7">
                        <animate attributeName="stroke-dashoffset" values="0;13" dur="0.8s" repeatCount="indefinite" />
                      </line>
                      <line x1={160} y1={40} x2={150} y2={65} stroke="#00F0FF" strokeWidth={2} strokeLinecap="round" strokeDasharray="7 12" opacity="0.9">
                        <animate attributeName="stroke-dashoffset" values="0;19" dur="0.7s" repeatCount="indefinite" />
                      </line>
                      <line x1={200} y1={50} x2={190} y2={75} stroke="#FF2A5F" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8" opacity="0.6">
                        <animate attributeName="stroke-dashoffset" values="0;12" dur="0.9s" repeatCount="indefinite" />
                      </line>
                      <line x1={240} y1={60} x2={230} y2={85} stroke="#00F0FF" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="6 10" opacity="0.75">
                        <animate attributeName="stroke-dashoffset" values="0;16" dur="0.65s" repeatCount="indefinite" />
                      </line>
                      <line x1={100} y1={70} x2={90} y2={95} stroke="#FF2A5F" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.5">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="0.75s" repeatCount="indefinite" />
                      </line>
                      <line x1={180} y1={65} x2={170} y2={90} stroke="#00F0FF" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="5 9" opacity="0.65">
                        <animate attributeName="stroke-dashoffset" values="0;14" dur="0.85s" repeatCount="indefinite" />
                      </line>
                    </g>
                    <g transform="translate(160, 90)">
                      <polygon points="0,-20 17,-10 17,10 0,20 -17,10 -17,-10" fill="none" stroke="#FF2A5F" strokeWidth={2} filter="url(#dataGlow)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                      </polygon>
                      <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="#FF2A5F" opacity="0.3">
                        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.5s" repeatCount="indefinite" />
                      </polygon>
                    </g>
                    <circle cx={70} cy={85} r={2} fill="#00F0FF" opacity="0.8" />
                    <circle cx={110} cy={75} r="1.5" fill="#00F0FF" opacity="0.7" />
                    <circle cx={150} cy={65} r={2} fill="#00F0FF" opacity="0.9" />
                    <circle cx={190} cy={75} r="1.5" fill="#FF2A5F" opacity="0.6" />
                    <circle cx={230} cy={85} r={2} fill="#00F0FF" opacity="0.75" />
                  </svg>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-slate-400 font-mono text-xs mb-4">
                    <span>05 апреля 2026</span>
                    <span>•</span>
                    <span>5 мин</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Почему мы перешли на Server Components и не оглядываемся назад</h4>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-6">Честный разбор производительности, инфраструктурных затрат и опыта команды после года эксплуатации.</p>
                  <a href="#" className="mt-auto text-sm font-semibold text-cyan-400 hover:text-white transition-colors inline-flex items-center gap-2 font-display">
                    Подробнее
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </article>
            </div>
            <div className="bottom-cta">
              <a href="#" className="focus-ring">
                Все блоги
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
