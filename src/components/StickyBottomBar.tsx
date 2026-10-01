import React from 'react';

interface StickyBottomBarProps {
  onScrollToForm: () => void;
  onCallClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onScrollToForm, onCallClick }) => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-40 bg-[#fbf8fc]/95 backdrop-blur-md px-4 py-2.5 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-[#e4e1e5]">
      <div className="max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex items-center gap-2.5">
        {/* Call Direct Button */}
        <button
          onClick={onCallClick}
          type="button"
          aria-label="Gọi 1800 6868"
          className="min-h-[48px] px-3.5 rounded-xl bg-[#f0edf1] hover:bg-[#e4e1e5] text-[#00652c] flex items-center justify-center gap-1.5 font-bold text-[14px] shrink-0 border border-[#becabc]/40 transition-colors cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span>1800 6868</span>
        </button>

        {/* Scroll to Form Button */}
        <button
          onClick={onScrollToForm}
          type="button"
          className="flex-1 min-h-[48px] px-3 rounded-xl bg-[#fe932c] hover:bg-[#e07f20] text-white flex items-center justify-center gap-1 font-extrabold text-[13px] sm:text-[14px] uppercase text-center shadow-[0_3px_12px_rgba(254,147,44,0.35)] truncate transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>👉 ĐĂNG KÝ TƯ VẤN (MIỄN PHÍ)</span>
        </button>
      </div>
    </aside>
  );
};
