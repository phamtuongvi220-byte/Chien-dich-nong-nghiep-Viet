import React from 'react';

interface HeaderProps {
  onCallClick: () => void;
  onOpenLeads: () => void;
  leadCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onCallClick, onOpenLeads, leadCount }) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#fbf8fc]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-[#f0edf1]">
      <div className="max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-16 px-4 flex items-center justify-between gap-2">
        {/* Left: Back button & Brand Logo */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Quay lại"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#1b1b1e] hover:bg-[#f0edf1] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>

          <img
            alt="Logo Nông Nghiệp Việt"
            className="h-8 w-auto object-contain rounded"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UDlHRKEd33QPaDZN5_aTFt6myWXi7ZZusmAaEhYUQFt4gi74KQU2mMts_4xPssgGX3zR02NDt-aYco31cBjjEbSL4KJ3LXIBzPOpvwVH15TYUCMXOic3_FMyCGBcUcsZZenaHQhu3M76QzpjpXQ1zEDJChShg6hi406AjZ6y7cfWjY-8iT4XZ3IC5VsL5DWBMQbz52zu-gC8ULsOAeqxV-u3wBUBjymEDyW4EWjCPcH30yyHfmNpNhd3k"
          />

          <div className="flex flex-col text-left">
            <span className="font-bold text-[15px] sm:text-[16px] text-[#00652c] leading-tight tracking-tight">
              Nông Nghiệp Việt
            </span>
            <span className="text-[12px] text-[#3f493f] leading-tight truncate max-w-[130px] font-medium">
              Đồng Hành Nhà Nông
            </span>
          </div>
        </div>

        {/* Right: Hotline Button & Registered Leads modal toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCallClick}
            aria-label="Gọi tổng đài miễn phí 1800 6868"
            className="min-h-[40px] px-3 py-1.5 rounded-full bg-[#fe932c] hover:bg-[#904d00] text-white flex items-center gap-1.5 transition-all shadow-[0_4px_12px_rgba(254,147,44,0.35)] active:scale-95 cursor-pointer font-semibold text-[13px] sm:text-[14px]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="whitespace-nowrap">1800 6868</span>
          </button>

          <button
            type="button"
            onClick={onOpenLeads}
            title="Xem danh sách bà con đã đăng ký"
            className="relative w-9 h-9 rounded-full bg-[#00652c] hover:bg-[#005323] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
            {leadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#fe932c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {leadCount > 9 ? '9+' : leadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
