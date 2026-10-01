import React, { useState, useEffect } from 'react';

const mockActivity = [
  { name: 'Bác Ba Đạt', province: 'Cần Thơ', crop: 'Cây lúa', time: '1 phút trước' },
  { name: 'Chú Năm Huỳnh', province: 'An Giang', crop: 'Lúa Đông Xuân', time: '3 phút trước' },
  { name: 'Bác Sáu Thơm', province: 'Tiền Giang', crop: 'Cây sầu riêng', time: '5 phút trước' },
  { name: 'Cô Bảy Mai', province: 'Đắk Lắk', crop: 'Cà phê & Hồ tiêu', time: '7 phút trước' },
  { name: 'Anh Hai Lúa', province: 'Đồng Tháp', crop: 'Rau màu hữu cơ', time: '10 phút trước' },
];

export const RecentRegistrationToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show toast after 2s
    const firstTimer = setTimeout(() => {
      setVisible(true);
    }, 2500);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mockActivity.length);
        setVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const current = mockActivity[index];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-[320px] bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border border-[#becabc]/40 flex items-center gap-2.5 transition-all transform animate-fadeIn">
      <div className="w-9 h-9 rounded-full bg-[#00652c]/10 text-[#00652c] flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-[18px]">verified_user</span>
      </div>

      <div className="flex flex-col text-left overflow-hidden">
        <div className="text-[12px] font-bold text-[#1b1b1e] truncate">
          {current.name} ({current.province})
        </div>
        <div className="text-[11px] text-[#3f493f] truncate">
          Vừa đăng ký tư vấn <span className="text-[#00652c] font-semibold">{current.crop}</span>
        </div>
        <div className="text-[10px] text-[#6f7a6e]">{current.time}</div>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="text-[#6f7a6e] hover:text-[#1b1b1e] p-1 rounded-full cursor-pointer ml-auto"
        aria-label="Đóng thông báo"
      >
        <span className="material-symbols-outlined text-[14px]">close</span>
      </button>
    </div>
  );
};
