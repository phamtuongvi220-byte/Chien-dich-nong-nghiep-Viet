import React from 'react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      comment:
        '"Được tư vấn khá kỹ, nhân viên giải thích dễ hiểu nên tôi quyết định đăng ký. Vụ rồi trái tròn đều, đỡ tốn tiền thuốc hơn hẳn."',
      avatarChar: 'M',
      author: 'Bác Nguyễn Văn Mười',
      location: 'Huyện Cái Bè, Tiền Giang – Vườn sầu riêng',
      badge: 'Đã dùng 3 vụ liên tiếp',
    },
    {
      comment:
        '"Thông tin rõ ràng, có người gọi lại tư vấn tận tình nên dễ lựa chọn. Vụ mùa năm nay lúa trổ đều, rơm vàng óng ả."',
      avatarChar: 'H',
      author: 'Chú Trần Văn Hải',
      location: 'Huyện Thọ Xuân, Thanh Hóa – 2 mẫu ruộng lúa',
      badge: 'Năng suất đạt 8.5 tấn/ha',
    },
    {
      comment:
        '"Đăng ký để lại số điện thoại cái là các cháu kỹ sư gọi lại hướng dẫn cặn kẽ, thuốc sinh học dùng an toàn cho sức khỏe."',
      avatarChar: 'M',
      author: 'Cô Lê Thị Mai',
      location: 'Huyện Krông Pắk, Đắk Lắk – Cà phê, hồ tiêu',
      badge: 'Đất xốp hơn, rễ chắc khỏe',
    },
  ];

  return (
    <section className="flex flex-col px-4 py-6">
      <div className="flex flex-col mb-4">
        <span className="text-[12px] font-bold text-[#904d00] uppercase tracking-wider mb-1">
          Chia Sẻ Thực Tế
        </span>
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00652c] uppercase leading-tight">
          NHÀ NÔNG NÓI GÌ VỀ CHÚNG TÔI?
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow-xs border border-[#e4e1e5] flex flex-col gap-2 hover:shadow-md transition-shadow"
          >
            {/* Stars & Verified tag */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5 text-[#fe932c]">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-medium text-[#00652c] bg-[#d3ffd5]/60 px-2 py-0.5 rounded-full">
                {rev.badge}
              </span>
            </div>

            <p className="text-[14px] text-[#1b1b1e] italic leading-relaxed">
              {rev.comment}
            </p>

            <div className="flex items-center gap-2.5 pt-1 border-t border-[#f0edf1]">
              <div className="w-10 h-10 rounded-full bg-[#00652c]/15 flex items-center justify-center text-[#00652c] font-bold text-[16px] shrink-0 border border-[#00652c]/20">
                {rev.avatarChar}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[14px] text-[#1b1b1e]">{rev.author}</span>
                <span className="text-[12px] text-[#3f493f]">{rev.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
