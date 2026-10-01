import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const commitments = [
    {
      icon: 'verified',
      title: 'UY TÍN HÀNG ĐẦU',
      desc: 'Thông tin sản phẩm công khai rõ ràng, xuất xứ minh bạch, đạt đầy đủ chứng nhận kiểm định chất lượng từ cơ quan quản lý nông nghiệp.',
    },
    {
      icon: 'eco',
      title: 'CHẤT LƯỢNG ĐẢM BẢO',
      desc: 'Giải pháp được thử nghiệm thực tế tại nhiều vùng chuyên canh, tuyển chọn kỹ lưỡng, phù hợp nhất với điều kiện thời tiết khắc nghiệt.',
    },
    {
      icon: 'group',
      title: 'TẬN TÂM ĐỒNG HÀNH',
      desc: 'Luôn có kỹ sư đồng hành từ lúc gieo hạt, bón phân đến khi thu hoạch. Bà con thắc mắc chỉ cần gọi là có chuyên gia hướng dẫn.',
    },
    {
      icon: 'handshake',
      title: 'ĐỒNG HÀNH CÙNG NHÀ NÔNG',
      desc: 'Không chỉ cung ứng sản phẩm, chúng tôi trao gửi sự an tâm, giảm bớt âu lo chi phí và mang lại vụ mùa bội thu cho mọi gia đình nông thôn.',
    },
  ];

  return (
    <section className="flex flex-col px-4 py-6 bg-[#f5f3f6]">
      <div className="flex flex-col mb-4">
        <span className="text-[12px] font-bold text-[#904d00] uppercase tracking-wider mb-1">
          Cam Kết Vàng
        </span>
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00652c] uppercase leading-tight">
          VÌ SAO NHÀ NÔNG NÊN CHỌN CHÚNG TÔI?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {commitments.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow-xs border border-[#e4e1e5]/80 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="material-symbols-outlined text-[#00652c] text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <h3 className="text-[14px] sm:text-[15px] font-bold text-[#00652c] uppercase tracking-tight">
                {item.title}
              </h3>
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#3f493f] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
