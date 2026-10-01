import React from 'react';

interface FooterProps {
  onCallClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCallClick }) => {
  return (
    <footer className="flex flex-col px-4 py-8 bg-[#f0edf1] text-[#1b1b1e] border-t border-[#e4e1e5]">
      <div className="flex items-center gap-2.5 mb-2">
        <img
          alt="Logo Nông Nghiệp Việt"
          className="h-10 w-10 object-contain rounded-lg bg-white p-1 shadow-xs border border-[#e4e1e5]"
          src="https://lh3.googleusercontent.com/aida/AEtjO1UDlHRKEd33QPaDZN5_aTFt6myWXi7ZZusmAaEhYUQFt4gi74KQU2mMts_4xPssgGX3zR02NDt-aYco31cBjjEbSL4KJ3LXIBzPOpvwVH15TYUCMXOic3_FMyCGBcUcsZZenaHQhu3M76QzpjpXQ1zEDJChShg6hi406AjZ6y7cfWjY-8iT4XZ3IC5VsL5DWBMQbz52zu-gC8ULsOAeqxV-u3wBUBjymEDyW4EWjCPcH30yyHfmNpNhd3k"
        />
        <div className="flex flex-col">
          <span className="font-extrabold text-[15px] sm:text-[16px] text-[#00652c] uppercase tracking-wide">
            NÔNG NGHIỆP VIỆT
          </span>
          <span className="text-[12px] text-[#3f493f]">
            Đồng hành cùng sự phát triển của nhà nông
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-4 bg-white/70 p-3.5 rounded-xl border border-[#e4e1e5]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00652c] text-[20px]">support_agent</span>
          <span className="text-[14px]">
            Hotline:{' '}
            <button
              onClick={onCallClick}
              type="button"
              className="text-[#00652c] font-bold hover:underline cursor-pointer"
            >
              1800 6868
            </button>{' '}
            (Miễn phí cước cuộc gọi)
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-[#00652c] text-[20px] shrink-0 mt-0.5">
            location_on
          </span>
          <span className="text-[13px] text-[#3f493f]">
            Trụ sở: Tòa nhà Nông Nghiệp Xanh, Q. Bình Thạnh, TP. Hồ Chí Minh
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-[#00652c] text-[20px] shrink-0 mt-0.5">
            schedule
          </span>
          <span className="text-[13px] text-[#3f493f]">
            Thời gian hỗ trợ: 6:00 – 21:00 (Kể cả Thứ 7, Chủ Nhật & Ngày Lễ)
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#3f493f] mb-3">
        <a className="hover:text-[#00652c] transition-colors" href="#privacy" onClick={(e) => e.preventDefault()}>
          Chính sách bảo mật
        </a>
        <span>•</span>
        <a className="hover:text-[#00652c] transition-colors" href="#terms" onClick={(e) => e.preventDefault()}>
          Điều khoản sử dụng
        </a>
        <span>•</span>
        <a className="hover:text-[#00652c] transition-colors" href="#guide" onClick={(e) => e.preventDefault()}>
          Hướng dẫn canh tác
        </a>
      </div>

      <p className="text-[11px] text-[#6f7a6e] leading-relaxed">
        Bản quyền © 2025 Nông Nghiệp Việt. Tất cả các quyền được bảo lưu.
      </p>
    </footer>
  );
};
