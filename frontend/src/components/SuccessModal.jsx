export default function SuccessModal() {
  return (
    <>
      {/* Lazy load Yandex Maps  */}
      <div id="successModal" className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0A0A1A]/80 backdrop-blur-sm transition-opacity" id="modalOverlay" />
        <div className="relative bg-gradient-to-br from-[#16213E] to-[#0A0A1A] border border-cyan-400/30 rounded-2xl p-8 sm:p-10 max-w-md w-full mx-4 shadow-[0_20px_60px_rgba(0,212,255,0.15)] transform scale-95 transition-all duration-300" id="modalPanel">
          <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-3">Заявка отправлена!</h3>
          <p className="text-slate-300 text-[15px] leading-relaxed mb-8">
            Спасибо за обращение. Мы уже получили ваши данные и скоро напишем вам на почту, чтобы обсудить проект.
          </p>
          <button id="closeModalBtn" className="btn-base btn-primary w-full rounded-xl focus-ring text-[#0A0A1A] font-bold">
            Отлично, жду
          </button>
        </div>
      </div>
    </>
  );
}
