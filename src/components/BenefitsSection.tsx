import React from 'react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: 'support_agent',
      iconBg: 'bg-[#00652c]/10 text-[#00652c]',
      title: 'ĐƯỢC TƯ VẤN MIỄN PHÍ',
      desc: 'Được kỹ sư nông nghiệp giải đáp và tư vấn kỹ thuật phù hợp với đất đai thực tế của gia đình.',
    },
    {
      icon: 'redeem',
      iconBg: 'bg-[#fe932c]/15 text-[#904d00]',
      title: 'NHẬN THÔNG TIN ƯU ĐÃI',
      desc: 'Cập nhật nhanh chương trình khuyến mãi, trợ giá vật tư mùa vụ mới nhất từ nhà máy sản xuất.',
    },
    {
      icon: 'bolt',
      iconBg: 'bg-[#00652c]/10 text-[#00652c]',
      title: 'HỖ TRỢ NHANH CHÓNG',
      desc: 'Đội ngũ kỹ thuật chủ động gọi lại hướng dẫn chi tiết tận nơi trong vòng 15 phút sau khi đăng ký.',
    },
    {
      icon: 'shield_with_heart',
      iconBg: 'bg-[#00652c]/10 text-[#00652c]',
      title: 'AN TÂM KHI ĐĂNG KÝ',
      desc: 'Cam kết bảo mật thông tin, không làm phiền hoặc chèo kéo khi bà con chưa có nhu cầu sử dụng.',
    },
  ];

  return (
    <section className="flex flex-col px-4 py-6 bg-[#f5f3f6]">
      <div className="flex flex-col mb-4">
        <span className="text-[12px] font-bold text-[#904d00] uppercase tracking-wider mb-1">
          Đồng Hành Tận Tâm
        </span>
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00652c] uppercase leading-tight">
          ĐĂNG KÝ NGAY – NHẬN NHIỀU QUYỀN LỢI
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow-xs border border-[#e4e1e5]/70 flex items-start gap-3 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${b.iconBg}`}>
              <span className="material-symbols-outlined text-[26px]">{b.icon}</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[14px] sm:text-[15px] font-bold text-[#1b1b1e] uppercase mb-1 tracking-tight">
                {b.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#3f493f] leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
