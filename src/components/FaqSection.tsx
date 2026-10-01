import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Tôi đăng ký tư vấn thì có mất phí hay bị ép mua hàng không?',
      a: 'Hoàn toàn KHÔNG. Chương trình tư vấn kỹ thuật và khảo sát đất canh tác được Nông Nghiệp Việt hỗ trợ 100% miễn phí cho bà con. Kỹ sư chỉ tư vấn giải pháp khoa học, quyền quyết định hoàn toàn thuộc về bà con.',
    },
    {
      q: 'Bộ giải pháp sinh học có dùng chung được với phân bón khác không?',
      a: 'Bộ dinh dưỡng sinh học của chúng tôi hoàn toàn có thể kết hợp linh hoạt với các loại phân bón hữu cơ hoặc phân NPK truyền thống, giúp kích hoạt vi sinh vật có lợi, giảm tải độc hại và hạn chế chai cứng đất.',
    },
    {
      q: 'Sau khi để lại số điện thoại, bao lâu thì có người liên hệ?',
      a: 'Đội ngũ kỹ sư tại từng khu vực sẽ chủ động liên hệ lại cho bà con trong vòng 15 - 30 phút theo đúng khung giờ bà con đã chọn thuận tiện.',
    },
    {
      q: 'Sản phẩm có giao về tận nhà/ấp/xã không?',
      a: 'Có. Nông Nghiệp Việt có hệ thống đại lý và dịch vụ giao hàng tận nhà trên khắp 63 tỉnh thành, bà con nhận hàng kiểm tra đúng nhãn mác, tem chống giả mới thanh toán.',
    },
  ];

  return (
    <section className="flex flex-col px-4 py-6 bg-[#f5f3f6]">
      <div className="flex flex-col mb-4">
        <span className="text-[12px] font-bold text-[#904d00] uppercase tracking-wider mb-1">
          Hỏi Đáp Nhanh
        </span>
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00652c] uppercase leading-tight">
          CÂU HỎI BÀ CON THƯỜNG QUAN TÂM
        </h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#e4e1e5] overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-[#fbf8fc]"
              >
                <span className="font-bold text-[14px] sm:text-[15px] text-[#1b1b1e] leading-snug">
                  {item.q}
                </span>
                <span
                  className={`material-symbols-outlined text-[#00652c] text-[20px] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-[13px] sm:text-[14px] text-[#3f493f] leading-relaxed border-t border-[#f0edf1]">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
