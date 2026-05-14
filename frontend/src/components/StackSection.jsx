export default function StackSection() {
  return (
    <>
      <section id="stack" className="section-space pt-0 relative z-10 section-watch stack-shell" data-analytics-section="stack" data-analytics-section-name="Technology Stack">
        <div className="site-container">
          <div className="content-shell">
            <div className="stack-hero-grid relative">
              <svg className="absolute -left-[4%] top-[8%] w-[34vw] h-[34vw] opacity-[0.04] pointer-events-none hidden lg:block" viewBox="0 0 600 600" fill="none" aria-hidden="true">
                <path d="M100 120H500M160 200H540M60 300H420M120 400H500" stroke="white" strokeWidth={1} />
                <circle cx={420} cy={160} r={120} stroke="white" strokeWidth={1} strokeDasharray="4 8" />
                <circle cx={210} cy={360} r={80} stroke="white" strokeWidth={1} />
              </svg>
              <div className="stack-hero-main">
                <div className="stack-copy">
                  <div className="section-kicker" data-kicker data-kicker-target="stack">
                    <span className="section-kicker-pill" />
                    <span className="section-kicker-dot" />
                    <span className="section-kicker-label">Технологии и стек</span>
                  </div>
                  <h2 className="section-title mt-6 mb-6">
                    Инструменты и технологии,
                    <br className="hidden sm:block" />
                    <span className="title-accent">
                      на которых строятся наши продукты
                      <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,8 Q30,0 60,8 T100,4" stroke="currentColor" strokeWidth={4} fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h2>
                  <p className="section-lead">
                    Подбираем стек под задачу: от интерфейсов и мобильных приложений до backend-архитектуры, DevOps и продуктового дизайна.
                  </p>
                </div>
              </div>
              <div className="stack-hero-side">
                <div className="stack-scene-wrap">
                  <div className="stack-scene" aria-hidden="true">
                    <div className="stack-scene-shell">
                      <div className="stack-scene-axis" />
                      <div className="stack-scene-layer layer-1"><div className="stack-scene-panel stack-scene-panel--front"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg><span>Frontend</span></div></div>
                      <div className="stack-scene-layer layer-2"><div className="stack-scene-panel stack-scene-panel--mid"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x={2} y={2} width={20} height={8} rx={2} /><rect x={2} y={14} width={20} height={8} rx={2} /></svg><span>Backend</span></div></div>
                      <div className="stack-scene-layer layer-3"><div className="stack-scene-panel stack-scene-panel--mid"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx={12} cy={5} rx={9} ry={3} /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg><span>Data</span></div></div>
                      <div className="stack-scene-layer layer-4"><div className="stack-scene-panel stack-scene-panel--back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg><span>Design</span></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-8">
              <div className="stack-grid">
                <article className="stack-card" data-reveal>
                  <div className="stack-card-glow bg-cyan-400/10" />
                  <svg className="stack-card-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><rect x={3} y={3} width={18} height={18} rx={2} /><line x1={3} y1={9} x2={21} y2={9} /><line x1={9} y1={21} x2={9} y2={9} /></svg>
                  <div className="stack-card-head"><div className="stack-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div><div><div className="stack-card-kicker">UI / UX</div><h3 className="stack-card-title">Frontend</h3></div></div>
                  <ul className="stack-list">
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#61dafb]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-spin-slow"><ellipse cx={12} cy={12} rx={4} ry={10} transform="rotate(30 12 12)" /><ellipse cx={12} cy={12} rx={4} ry={10} transform="rotate(90 12 12)" /><ellipse cx={12} cy={12} rx={4} ry={10} transform="rotate(150 12 12)" /><circle cx={12} cy={12} r={2} fill="currentColor" /></svg></div><span className="stack-item-name">React</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#42b883]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 3l10 17L22 3h-4.5L12 12.5 6.5 3H2z" /><path d="M7 3l5 8.5L17 3h-3.5L12 6.5 8.5 3H7z" fillOpacity="0.5" /></svg></div><span className="stack-item-name">Vue</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#dd0031]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 5.5l1.5 11c1 4.5 8.5 7.5 8.5 7.5s7.5-3 8.5-7.5L22 5.5 12 2zm0 2.5l6.5 2.5-1 9c-.5 3-5.5 5.5-5.5 5.5s-5-2.5-5.5-5.5L5.5 7 12 4.5z" /><path d="M12 6.5L8.5 14h2l.5-1.5h2l.5 1.5h2L12 6.5zm0 2.5l.5 2H11.5l.5-2z" /></svg></div><span className="stack-item-name">Angular</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#3178c6]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm11 11h-2v4H9v-4H7V11h6v2zm6 2c0-2-3-1.5-3-2.5.5 0 1 .5 1 .5l1.5-1.5s-1-1.5-2.5-1.5-3 1.5-3 3 3 1.5 3 2.5c-.5 0-1-.5-1-.5l-1.5 1.5c1 1.5 2.5 1.5 2.5 1.5 1.5 0 3-1.5 3-3z" /></svg></div><span className="stack-item-name">TypeScript</span><span className="stack-item-line" /></li>
                  </ul>
                </article>
                <article className="stack-card" data-reveal style={{"--reveal-delay": '80ms'}}>
                  <div className="stack-card-glow bg-pink-500/10" />
                  <svg className="stack-card-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><rect x={2} y={2} width={20} height={8} rx={2} /><rect x={2} y={14} width={20} height={8} rx={2} /></svg>
                  <div className="stack-card-head"><div className="stack-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={2} y={2} width={20} height={8} rx={2} /><rect x={2} y={14} width={20} height={8} rx={2} /><line x1={6} y1={6} x2="6.01" y2={6} /><line x1={6} y1={18} x2="6.01" y2={18} /></svg></div><div><div className="stack-card-kicker">Logic / API</div><h3 className="stack-card-title">Backend</h3></div></div>
                  <ul className="stack-list">
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#68a063]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" /><polyline points="2 8 12 14 22 8" /><line x1={12} y1={14} x2={12} y2={22} /></svg></div><span className="stack-item-name">Node.js</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#ffde57]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-4 0-4 2-4 2v2h4v1H6s-2 0-2 3c0 3 2 3 2 3h1v-2c0-2 2-2 2-2h4c2 0 2-2 2-2V5s0-2-3-2zM9 4.5A.5.5 0 1 1 9 5.5.5.5 0 0 1 9 4.5z" /><path d="M12 22c4 0 4-2 4-2v-2h-4v-1h6s2 0 2-3c0-3-2-3-2-3h-1v2c0 2-2 2-2 2H9c-2 0-2 2-2 2v2s0 2 3 2zM15 19.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" fill="#4584b6" /></svg></div><span className="stack-item-name">Python</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#8892be]"><svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx={12} cy={12} rx={11} ry={7} fill="none" stroke="currentColor" strokeWidth="1.5" /><text x={6} y={15} fontFamily="sans-serif" fontWeight="bold" fontSize={8} fill="currentColor">php</text></svg></div><span className="stack-item-name">PHP</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#512bd4]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx={12} cy={12} r={10} /><path d="M7 12h10M12 7v10" /><circle cx={12} cy={12} r={4} fill="currentColor" fillOpacity="0.2" /></svg></div><span className="stack-item-name">.NET</span><span className="stack-item-line" /></li>
                  </ul>
                </article>
                <article className="stack-card" data-reveal>
                  <div className="stack-card-glow bg-cyan-400/10" />
                  <svg className="stack-card-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><rect x={5} y={2} width={14} height={20} rx={2} /></svg>
                  <div className="stack-card-head"><div className="stack-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={5} y={2} width={14} height={20} rx={2} /><line x1={12} y1={18} x2="12.01" y2={18} /></svg></div><div><div className="stack-card-kicker">Native / Cross</div><h3 className="stack-card-title">Mobile</h3></div></div>
                  <ul className="stack-list">
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#F05138]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 3s-3 3-3 8c0 0 6-3 9 0 0 0-4-3-8-2-3 1-5 4-5 4s-2-2-5-1c0 0 3 4 5 7 0 0-3 1-5 0c0 0 4 5 8 2 3-2 4-5 4-5s1 2 2 1c0 0-1-5-2-6-2-2-4-2-4-2z" /></svg></div><span className="stack-item-name">Swift</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#7f52ff]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12z" /><path d="M12 12L0 0v24z" fillOpacity="0.5" /></svg></div><span className="stack-item-name">Kotlin</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#02569B]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37z" /><path d="M14.314 24L7.8 17.5l3.7-3.7L21.684 24h-7.37z" fillOpacity="0.7" /></svg></div><span className="stack-item-name">Flutter</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#61dafb]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x={6} y={2} width={12} height={20} rx={2} strokeOpacity="0.3" /><ellipse cx={12} cy={12} rx={3} ry={7} transform="rotate(45 12 12)" /><ellipse cx={12} cy={12} rx={3} ry={7} transform="rotate(-45 12 12)" /><circle cx={12} cy={12} r="1.5" fill="currentColor" /></svg></div><span className="stack-item-name">React Native</span><span className="stack-item-line" /></li>
                  </ul>
                </article>
                <article className="stack-card" data-reveal style={{"--reveal-delay": '80ms'}}>
                  <div className="stack-card-glow bg-pink-500/10" />
                  <svg className="stack-card-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><ellipse cx={12} cy={5} rx={9} ry={3} /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                  <div className="stack-card-head"><div className="stack-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><ellipse cx={12} cy={5} rx={9} ry={3} /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg></div><div><div className="stack-card-kicker">Storage</div><h3 className="stack-card-title">Базы данных</h3></div></div>
                  <ul className="stack-list">
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#336791]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4c-4 0-6 3-6 7 0 2 1 3 1 5 0 1-1 2-2 3v1h14v-1c-1-1-2-2-2-3 0-2 1-3 1-5 0-4-2-7-6-7z" /><circle cx={10} cy={9} r={1} fill="currentColor" /><path d="M15 14s1 2 3 2" /></svg></div><span className="stack-item-name">PostgreSQL</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#00758F]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12c0-4 4-8 8-8s8 4 8 8-4 6-8 6c-2 0-4-.5-5-1l-3 3v-3.5C5 15.5 4 14 4 12z" /><path d="M14 10s-1 1-2 1-2-1-2-1" /></svg></div><span className="stack-item-name">MySQL</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#47A248]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C12 2 6 8 6 14c0 4 3 6 6 8 3-2 6-4 6-8 0-6-6-12-6-12z" /><path d="M12 2v20" strokeOpacity="0.3" /></svg></div><span className="stack-item-name">MongoDB</span><span className="stack-item-line" /></li>
                  </ul>
                </article>
                <article className="stack-card" data-reveal>
                  <div className="stack-card-glow bg-cyan-400/10" />
                  <svg className="stack-card-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                  <div className="stack-card-head"><div className="stack-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="4 17 10 11 4 5" /><line x1={12} y1={19} x2={20} y2={19} /></svg></div><div><div className="stack-card-kicker">Infrastructure</div><h3 className="stack-card-title">DevOps</h3></div></div>
                  <ul className="stack-list">
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#2496ED]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 14.5c0-.6-.4-1-1-1h-2v-2h-3v2h-2v-2h-3v2H8c-.6 0-1 .4-1 1s.4 1 1 1h13c.6 0 1-.4 1-1z" /><path d="M8 11.5v-2h3v2H8zm4 0v-2h3v2h-3zm-4-3v-2h3v2H8zm4 0v-2h3v2h-3z" fillOpacity="0.8" /><path d="M4 14.5c0 1.9 1.5 3.5 3.5 3.5h10c2.8 0 5-2.2 5-5H3c.6 0 1 .4 1 1.5z" /></svg></div><span className="stack-item-name">Docker</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#326ce5]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx={12} cy={12} r={8} /><path d="M12 4L12 1 M12 20L12 23 M4 12L1 12 M20 12L23 12 M6.5 6.5L4 4 M17.5 17.5L20 20 M6.5 17.5L4 20 M17.5 6.5L20 4" /><circle cx={12} cy={12} r={3} fill="currentColor" fillOpacity="0.2" /></svg></div><span className="stack-item-name">Kubernetes</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#00d4ff]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-8 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" /><path d="M8 8h8M8 16h8" strokeDasharray="2 2" /></svg></div><span className="stack-item-name">CI/CD</span><span className="stack-item-line" /></li>
                  </ul>
                </article>
                <article className="stack-card" data-reveal style={{"--reveal-delay": '80ms'}}>
                  <div className="stack-card-glow bg-pink-500/10" />
                  <svg className="stack-card-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>
                  <div className="stack-card-head"><div className="stack-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx={11} cy={11} r={2} /></svg></div><div><div className="stack-card-kicker">Visuals</div><h3 className="stack-card-title">Дизайн</h3></div></div>
                  <ul className="stack-list">
                    <li className="stack-item group/item"><div className="stack-item-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 2H15C16.65 2 18 3.35 18 5C18 6.65 16.65 8 15 8H9V2Z" fillOpacity="0.8" /><path d="M9 8H15C16.65 8 18 9.35 18 11C18 12.65 16.65 14 15 14H9V8Z" fill="#A259FF" /><path d="M9 14L12 14C13.65 14 15 15.35 15 17C15 18.65 13.65 20 12 20C10.35 20 9 18.65 9 17V14Z" fill="#0ACF83" /><path d="M9 8C7.35 8 6 9.35 6 11C6 12.65 7.35 14 9 14V8Z" fill="#1ABCFE" /><path d="M9 2C7.35 2 6 3.35 6 5C6 6.65 7.35 8 9 8V2Z" fill="#F24E1E" /></svg></div><span className="stack-item-name">Figma</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#FF61F6]"><svg viewBox="0 0 24 24" fill="currentColor"><rect x={2} y={2} width={20} height={20} rx={4} fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M7 8l4 8M11 8l-4 8M13 8h2c1.5 0 3 1 3 4s-1.5 4-3 4h-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><span className="stack-item-name">Adobe XD</span><span className="stack-item-line" /></li>
                    <li className="stack-item group/item"><div className="stack-item-icon group-hover/item:text-[#F7B500]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><polygon points="12 2 22 8.5 12 22 2 8.5 12 2" /><polygon points="12 2 17 8.5 12 22 7 8.5 12 2" /><line x1={2} y1="8.5" x2={22} y2="8.5" /></svg></div><span className="stack-item-name">Sketch</span><span className="stack-item-line" /></li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
