import React from 'react';

interface FinalCtaProps {
  onScrollToForm: () => void;
  onCallClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onScrollToForm, onCallClick }) => {
  return (
    <section className="px-4 py-6">
      <div className="bg-[#00652c] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col text-center items-center relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#15803d] rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fe932c] rounded-full blur-3xl opacity-20 pointer-events-none" />

        <span className="text-[32px] mb-2">🌾</span>

        <h2 className="text-[20px] sm:text-[26px] font-extrabold uppercase mb-2 tracking-tight text-white">
          ĐỪNG BỎ LỠ THÔNG TIN DÀNH CHO BẠN
        </h2>

        <p className="text-[14px] sm:text-[15px] text-[#d3ffd5] mb-6 max-w-md leading-relaxed">
          Để lại số điện thoại ngay hôm nay để được tư vấn miễn phí và nhận thông tin ưu đãi mới nhất cho vụ mùa tới.
        </p>

        <button
          onClick={onScrollToForm}
          type="button"
          className="w-full sm:w-auto sm:min-w-[320px] min-h-[54px] py-3 px-6 rounded-2xl bg-[#fe932c] hover:bg-[#e07f20] text-white flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(254,147,44,0.4)] transition-all active:scale-[0.98] mb-4 cursor-pointer font-bold text-[15px] sm:text-[16px] uppercase tracking-wide"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
          <span>ĐĂNG KÝ NGAY HÔM NAY</span>
        </button>

        <button
          onClick={onCallClick}
          type="button"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-[14px] cursor-pointer group"
        >
          <span className="material-symbols-outlined text-[20px] text-[#fe932c] group-hover:scale-110 transition-transform">
            phone_in_talk
          </span>
          <span>
            Hoặc gọi tổng đài miễn cước: <strong className="text-[#ffdcc3] font-bold text-[16px]">1800 6868</strong>
          </span>
        </button>
      </div>
    </section>
  );
};
