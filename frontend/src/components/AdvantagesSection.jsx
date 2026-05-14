export default function AdvantagesSection() {
  return (
    <>
      <section id="advantages" className="section-space pt-0 relative z-10 section-watch min-h-[85vh] flex flex-col justify-center" data-analytics-section="advantages" data-analytics-section-name="Advantages">
        <div className="site-container">
          <div className="content-shell">
            <div className="advantages-grid">
              <div className="advantages-main">
                <div className="section-kicker" data-kicker data-kicker-target="advantages">
                  <span className="section-kicker-line" />
                  <span className="section-kicker-dot" />
                  <span className="section-kicker-label">Преимущества</span>
                </div>
                <h2 className="section-title mt-8 mb-0">
                  <span className="text-gradient-animate">Работаем быстро,</span>
                  <br className="hidden lg:block" />
                  системно и
                  <br className="hidden lg:block" />
                  <span className="title-accent">без лишнего хаоса
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,8 Q30,0 60,8 T100,4" stroke="currentColor" strokeWidth={4} fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="advantages-side" data-reveal style={{"--reveal-delay": '120ms'}}>
                <div className="advantages-panel">
                  <div className="absolute top-0 left-[8%] w-[280px] h-[280px] rounded-full bg-cyan-400/10 blur-[90px] pointer-events-none" />
                  <div className="absolute bottom-[-10%] right-[4%] w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[110px] pointer-events-none" />
                  <div className="advantages-metrics">
                    <article className="advantage-card" data-reveal>
                      <div className="advantage-bg-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx={12} cy={8} r={7} />
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                        </svg>
                      </div>
                      <div className="advantage-head">
                        <div className="advantage-value"><span className="countup-value" data-countup={50} data-suffix="+">0+</span></div>
                      </div>
                      <div className="advantage-body">
                        <h3 className="service-title text-[1.1rem]">Проектов реализовано</h3>
                        <p className="service-text text-[14px]">Опыт в финтехе, e-commerce, медицине, логистике и внутренних B2B-системах.</p>
                      </div>
                    </article>
                    <article className="advantage-card" data-reveal style={{"--reveal-delay": '60ms'}}>
                      <div className="advantage-bg-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <div className="advantage-head">
                        <div className="advantage-value"><span className="countup-value" data-countup={100} data-suffix="%">0%</span></div>
                      </div>
                      <div className="advantage-body">
                        <h3 className="service-title text-[1.1rem]">Прозрачность работы</h3>
                        <p className="service-text text-[14px]">Понятная смета, этапность, регулярные демо и управляемый процесс без сюрпризов.</p>
                      </div>
                    </article>
                    <article className="advantage-card" data-reveal style={{"--reveal-delay": '120ms'}}>
                      <div className="advantage-bg-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx={12} cy={12} r={10} />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div className="advantage-head">
                        <div className="advantage-value"><span className="countup-value" data-countup={8}>0</span><span className="advantage-value-note">нед</span></div>
                      </div>
                      <div className="advantage-body">
                        <h3 className="service-title text-[1.1rem]">Средний срок MVP</h3>
                        <p className="service-text text-[14px]">Двигаемся короткими спринтами и быстро доводим продукт до первой рабочей версии.</p>
                      </div>
                    </article>
                    <article className="advantage-card" data-reveal style={{"--reveal-delay": '180ms'}}>
                      <div className="advantage-bg-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 10c0-3.31-2.69-6-6-6S6 6.69 6 10" />
                          <path d="M6 10H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1" />
                          <path d="M18 10h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" />
                          <path d="M6 18v-8" />
                          <path d="M18 18v-8" />
                        </svg>
                      </div>
                      <div className="advantage-head">
                        <div className="advantage-value"><span className="countup-value" data-countup={24}>0</span><span className="advantage-value-note">/7</span></div>
                      </div>
                      <div className="advantage-body">
                        <h3 className="service-title text-[1.1rem]">Пост-поддержка</h3>
                        <p className="service-text text-[14px]">Остаёмся на связи после релиза: мониторинг, hotfix-задачи и развитие продукта.</p>
                      </div>
                    </article>
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
