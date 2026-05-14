export default function ProcessSection() {
  return (
    <>
      <section id="process" className="section-space pt-0 process-section section-watch" data-analytics-section="process" data-analytics-section-name="Process">
        <div className="site-container">
          <div className="content-shell">
            <div className="process-hero-grid mb-10 lg:mb-14">
              <div className="process-hero-main process-intro">
                <div className="section-kicker" data-kicker data-kicker-target="process">
                  <span className="section-kicker-line" />
                  <span className="section-kicker-dot" />
                  <span className="section-kicker-label">Процесс работы</span>
                </div>
                <h2 className="section-title mt-6 mb-6 max-w-[820px]">
                  Понятный процесс
                  <br className="hidden sm:block" />
                  <span className="title-accent">
                    от идеи до запуска
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,8 Q30,0 60,8 T100,4" stroke="currentColor" strokeWidth={4} fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p className="section-lead max-w-[620px]">
                  Разбиваем проект на понятные этапы с контрольными точками. Вы всегда понимаете, что происходит сейчас, что уже сделано и к чему мы идём дальше.
                </p>
              </div>
              <div className="process-hero-side lg:pt-0 hidden lg:flex items-start" data-reveal style={{"--reveal-delay": '180ms'}}>
                <div className="process-assembly" aria-hidden="true">
                  <div className="process-assembly-crosshair" />
                  <div className="process-assembly-orbit" />
                  <div className="process-assembly-stage">
                    <div className="process-assembly-composition">
                      <div className="process-assembly-piece" data-piece="analytics" style={{"--delay": '.1s'}}>
                        <div className="process-assembly-panel">
                          <svg className="process-assembly-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <circle cx={11} cy={11} r="7.5" />
                            <path d="M16.5 16.5 21 21" />
                            <path d="M11 8v3l2.5 1.5" />
                          </svg>
                          <span className="process-assembly-label">Аналитика</span>
                        </div>
                      </div>
                      <div className="process-assembly-piece" data-piece="design" style={{"--delay": '.35s'}}>
                        <div className="process-assembly-panel">
                          <svg className="process-assembly-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M4 15.5 15.5 4a2.12 2.12 0 1 1 3 3L7 18.5 3 19l.5-4.5Z" />
                            <path d="m13.5 6 4.5 4.5" />
                          </svg>
                          <span className="process-assembly-label">Дизайн</span>
                        </div>
                      </div>
                      <div className="process-assembly-piece" data-piece="dev" style={{"--delay": '.6s'}}>
                        <div className="process-assembly-panel">
                          <svg className="process-assembly-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="m8 9-4 3 4 3" />
                            <path d="m16 9 4 3-4 3" />
                            <path d="m14 4-4 16" />
                          </svg>
                          <span className="process-assembly-label">Разработка</span>
                        </div>
                      </div>
                      <div className="process-assembly-piece" data-piece="testing" style={{"--delay": '.85s'}}>
                        <div className="process-assembly-panel">
                          <svg className="process-assembly-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M12 3 5 6v6c0 4.2 2.6 7.4 7 9 4.4-1.6 7-4.8 7-9V6l-7-3Z" />
                            <path d="m9.5 12 1.8 1.8L15 10.1" />
                          </svg>
                          <span className="process-assembly-label">Тестирование</span>
                        </div>
                      </div>
                      <div className="process-assembly-piece" data-piece="launch" style={{"--delay": '1.1s'}}>
                        <div className="process-assembly-panel">
                          <svg className="process-assembly-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M5 19c2-.2 3.5-1 5-2.6l-2.4-2.4C6 15.6 5.2 17 5 19Z" />
                            <path d="M14 10 9 15" />
                            <path d="M15 4c3.5 0 5 1.5 5 5 0 3.8-2.4 6.2-6 8l-6-6c1.8-3.6 4.2-6 8-6Z" />
                          </svg>
                          <span className="process-assembly-label">Запуск</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-shell" id="processSection">
              <div className="process-mobile-progress">
                <div className="process-mobile-progress-inner">
                  <div className="process-mobile-meta">
                    <span className="process-mobile-label">Прогресс этапов</span>
                    <span className="process-mobile-value"><span id="processMobilePct">0</span>%</span>
                  </div>
                  <div className="process-mobile-track">
                    <div className="process-mobile-beam" id="processMobileBeam" />
                    <div className="process-mobile-tip" id="processMobileTip" />
                    <div className="process-mobile-milestone" style={{left: '5%'}} />
                    <div className="process-mobile-milestone" style={{left: '25%'}} />
                    <div className="process-mobile-milestone" style={{left: '50%'}} />
                    <div className="process-mobile-milestone" style={{left: '75%'}} />
                    <div className="process-mobile-milestone" style={{left: '95%'}} />
                  </div>
                </div>
              </div>
              <div className="process-sticky">
                <div className="process-main">
                  <div className="process-cards" id="processCards">
                    <article className="process-card" data-accent="cyan" data-at="0.05">
                      <div className="process-card-glow bg-cyan-400/10" />
                      <svg className="process-card-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
                      <div className="process-stage"><div className="process-stage-number countup-value" data-countup={1} data-countup-pad={2} data-countup-duration={1200}>00</div><div className="process-stage-label">Старт</div></div>
                      <div className="process-content">
                        <div className="process-card-top"><div className="process-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></div><h3 className="process-card-title">Аналитика и брифинг</h3></div>
                        <p className="process-card-text">Изучаем бизнес, определяем цели, уточняем ограничения и формируем понятное ТЗ. Это фундамент продукта и общая точка синхронизации перед проектированием.</p>
                        <div className="process-tags"><span className="process-tag">Интервью</span><span className="process-tag">Scope</span><span className="process-tag">ТЗ</span></div>
                      </div>
                    </article>
                    <article className="process-card" data-accent="pink" data-at="0.25">
                      <div className="process-card-glow bg-pink-500/10" />
                      <svg className="process-card-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.89l12.683-12.683z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.875 4.5" /></svg>
                      <div className="process-stage"><div className="process-stage-number countup-value" data-countup={2} data-countup-pad={2} data-countup-duration={1200}>00</div><div className="process-stage-label">Концепт</div></div>
                      <div className="process-content">
                        <div className="process-card-top"><div className="process-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.89l12.683-12.683z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.875 4.5" /></svg></div><h3 className="process-card-title">Дизайн и прототип</h3></div>
                        <p className="process-card-text">Проектируем интерфейс и визуальный стиль, который помогает пользователю быстрее решать задачу, а бизнесу — контролировать сценарии и точки роста.</p>
                        <div className="process-tags"><span className="process-tag">UI/UX</span><span className="process-tag">Figma</span><span className="process-tag">Прототип</span></div>
                      </div>
                    </article>
                    <article className="process-card" data-accent="violet" data-at="0.5">
                      <div className="process-card-glow bg-violet-500/10" />
                      <svg className="process-card-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                      <div className="process-stage"><div className="process-stage-number countup-value" data-countup={3} data-countup-pad={2} data-countup-duration={1200}>00</div><div className="process-stage-label">Сборка</div></div>
                      <div className="process-content">
                        <div className="process-card-top"><div className="process-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div><h3 className="process-card-title">Разработка</h3></div>
                        <p className="process-card-text">Собираем frontend и backend, подключаем интеграции, регулярно показываем демо и держим проект в контролируемом ритме спринтов.</p>
                        <div className="process-tags"><span className="process-tag">Frontend</span><span className="process-tag">Backend</span><span className="process-tag">Спринты</span></div>
                      </div>
                    </article>
                    <article className="process-card" data-accent="amber" data-at="0.75">
                      <div className="process-card-glow bg-amber-400/10" />
                      <svg className="process-card-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                      <div className="process-stage"><div className="process-stage-number countup-value" data-countup={4} data-countup-pad={2} data-countup-duration={1200}>00</div><div className="process-stage-label">Контроль</div></div>
                      <div className="process-content">
                        <div className="process-card-top"><div className="process-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg></div><h3 className="process-card-title">Тестирование</h3></div>
                        <p className="process-card-text">Проверяем сценарии, устраняем баги и стабилизируем систему перед релизом, чтобы продукт выходил в прод без неприятных сюрпризов.</p>
                        <div className="process-tags"><span className="process-tag">QA</span><span className="process-tag">Стабилизация</span></div>
                      </div>
                    </article>
                    <article className="process-card" data-accent="emerald" data-at="0.95">
                      <div className="process-card-glow bg-emerald-400/10" />
                      <svg className="process-card-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.77c1.651.567 3.502.415 4.306-1.757a4.493 4.493 0 00-2.39-2.24" /></svg>
                      <div className="process-stage"><div className="process-stage-number countup-value" data-countup={5} data-countup-pad={2} data-countup-duration={1200}>00</div><div className="process-stage-label">Финиш</div></div>
                      <div className="process-content">
                        <div className="process-card-top"><div className="process-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.77c1.651.567 3.502.415 4.306-1.757a4.493 4.493 0 00-2.39-2.24" /></svg></div><h3 className="process-card-title">Запуск и поддержка</h3></div>
                        <p className="process-card-text">Публикуем продукт, настраиваем окружение, передаём доступы и остаёмся рядом после релиза — для доработок, поддержки и роста системы.</p>
                        <div className="process-tags"><span className="process-tag">Релиз</span><span className="process-tag">Поддержка</span></div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="process-side">
                  <div className="process-track-shell" aria-hidden="true">
                    <div className="process-track" id="processTrack">
                      <div className="process-beam" id="processBeam" />
                      <div className="process-beam-tip" id="processBeamTip"><div className="process-beam-pct"><span id="processBeamPct">0</span>%</div></div>
                      <div className="process-milestone" style={{top: '5%'}}><div className="process-milestone-label">Старт</div></div>
                      <div className="process-milestone" style={{top: '25%'}}><div className="process-milestone-label">Дизайн</div></div>
                      <div className="process-milestone" style={{top: '50%'}}><div className="process-milestone-label">Разработка</div></div>
                      <div className="process-milestone" style={{top: '75%'}}><div className="process-milestone-label">Тест</div></div>
                      <div className="process-milestone" style={{top: '95%'}}><div className="process-milestone-label">Запуск</div></div>
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
