import React, { useState } from 'react';

interface CallHotlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallHotlineModal: React.FC<CallHotlineModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('18006868');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl p-5 sm:p-6 max-w-sm w-full shadow-2xl border border-[#e4e1e5] relative animate-scaleUp">
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f0edf1] hover:bg-[#e4e1e5] flex items-center justify-center text-[#1b1b1e] cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Icon & Title */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[#fe932c]/20 text-[#904d00] flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-[32px]">support_agent</span>
          </div>

          <span className="text-[12px] font-bold text-[#00652c] uppercase tracking-wider">
            Tổng Đài Nông Nghiệp Việt
          </span>
          <h3 className="text-[20px] font-bold text-[#1b1b1e] mt-1">
            Gọi Tư Vấn Kỹ Thuật Miễn Cước
          </h3>
          <p className="text-[13px] text-[#3f493f] mt-1">
            Kết nối trực tiếp với kỹ sư cây trồng phụ trách vùng đất của gia đình bạn.
          </p>
        </div>

        {/* Big Phone Box */}
        <div className="bg-[#f5f3f6] rounded-2xl p-4 text-center mb-4 border border-[#becabc]/30">
          <div className="text-[28px] font-extrabold text-[#00652c] tracking-wider">
            1800 6868
          </div>
          <div className="text-[12px] text-[#15803d] font-semibold mt-0.5">
            ✓ Miễn phí 100% cước gọi từ mọi nhà mạng
          </div>
          <div className="text-[11px] text-[#6f7a6e] mt-1">
            Giờ trực tổng đài: 6:00 - 21:00 hàng ngày
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <a
            href="tel:18006868"
            className="w-full py-3 px-4 rounded-xl bg-[#00652c] hover:bg-[#15803d] text-white font-bold text-[15px] flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Bấm Gọi Ngay 1800 6868</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded-xl bg-[#f0edf1] hover:bg-[#e4e1e5] text-[#1b1b1e] font-semibold text-[13px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Đã sao chép số tổng đài' : 'Sao chép số 1800 6868'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
