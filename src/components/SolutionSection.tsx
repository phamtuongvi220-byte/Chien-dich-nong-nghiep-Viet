import React from 'react';

interface SolutionSectionProps {
  onScrollToForm: () => void;
  onOpenCalculator: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onScrollToForm, onOpenCalculator }) => {
  return (
    <section className="flex flex-col px-4 py-6">
      <div className="flex flex-col mb-4">
        <span className="text-[12px] font-bold text-[#904d00] uppercase tracking-wider mb-1">
          Giải Pháp Mùa Vụ
        </span>
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00652c] uppercase leading-tight">
          GIẢI PHÁP ĐƯỢC NHIỀU NHÀ NÔNG QUAN TÂM
        </h2>
      </div>

      {/* Solution Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#e4e1e5] flex flex-col group">
        <div className="relative overflow-hidden aspect-[16/10] w-full">
          <img
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            alt="Vườn cây ăn trái và ruộng lúa trĩu quả sử dụng giải pháp dinh dưỡng sinh học Nông Nghiệp Việt"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVkUHgvJ4GbhrTMdt1bVqLcZpmpuBaHkcLvERju4ZdS8U6NCKcGl4nOLpVzN12NAP2UXMkcM7P9fot7AJfvpyryYYFoEncHZmffKTZK3tf3AHfdqLH57E01sFjizlUZmsb5ll7ED4iGUuTLskDJBqJftQH6q8MZCJ5mWo295BlrYLhEiBzdlZKZwYHGG3iS1N6MOd13ArIDkmwB2hwKYoiiqZIvkOIfi4fHE7gsZ3sU0PWLHjKr4_OmA"
          />
          <div className="absolute top-3 right-3 bg-[#fe932c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">eco</span>
            Chứng nhận Vi sinh an toàn
          </div>
        </div>

        <div className="p-4 sm:p-5 flex flex-col">
          <div className="inline-flex items-center gap-1 text-[#904d00] text-[12px] font-bold uppercase mb-1.5">
            <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
            <span>Công Nghệ Sinh Học Cao Cấp</span>
          </div>

          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1b1b1e] mb-3 leading-snug">
            Bộ Giải Pháp Dinh Dưỡng Cây Trồng &amp; Phòng Ngừa Sâu Bệnh Sinh Học
          </h3>

          {/* Checklist of benefits */}
          <div className="flex flex-col gap-2.5 mb-5 bg-[#fbf8fc] p-3.5 rounded-xl border border-[#e4e1e5]">
            <div className="flex items-start gap-2.5">
              <span className="text-[18px] shrink-0">🌾</span>
              <div className="text-[13px] sm:text-[14px] text-[#1b1b1e] leading-snug">
                <strong className="text-[#00652c] font-bold">Tiết kiệm chi phí:</strong> Giảm tới 30% lượng phân bón hóa học thông thường.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[18px] shrink-0">⏱️</span>
              <div className="text-[13px] sm:text-[14px] text-[#1b1b1e] leading-snug">
                <strong className="text-[#00652c] font-bold">Tiết kiệm thời gian:</strong> Phun xịt dễ dàng, công thức hòa tan hoàn toàn cực nhanh.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[18px] shrink-0">🛡️</span>
              <div className="text-[13px] sm:text-[14px] text-[#1b1b1e] leading-snug">
                <strong className="text-[#00652c] font-bold">Dễ sử dụng:</strong> Hướng dẫn bằng tiếng Việt cụ thể theo từng giai đoạn phát triển cây trồng.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[18px] shrink-0">🌟</span>
              <div className="text-[13px] sm:text-[14px] text-[#1b1b1e] leading-snug">
                <strong className="text-[#00652c] font-bold">Hiệu quả thực tế:</strong> Rễ khỏe, lá xanh bền, trổ bông đều, hạt chắc mẩy nâng cao năng suất.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[18px] shrink-0">🏡</span>
              <div className="text-[13px] sm:text-[14px] text-[#1b1b1e] leading-snug">
                <strong className="text-[#00652c] font-bold">Phù hợp thực tế:</strong> Thích ứng tuyệt vời với thổ nhưỡng khắp 3 miền Bắc - Trung - Nam.
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={onScrollToForm}
              type="button"
              className="flex-1 min-h-[48px] py-2.5 px-4 rounded-xl bg-[#00652c] hover:bg-[#15803d] text-white flex items-center justify-center gap-2 transition-all cursor-pointer font-bold text-[14px] uppercase shadow-md active:scale-98"
            >
              <span className="material-symbols-outlined text-[20px]">local_florist</span>
              <span>NHẬN TƯ VẤN CHI TIẾT VỤ MÙA</span>
            </button>

            <button
              onClick={onOpenCalculator}
              type="button"
              className="sm:w-auto min-h-[48px] py-2.5 px-4 rounded-xl bg-[#f0edf1] hover:bg-[#e4e1e5] text-[#00652c] flex items-center justify-center gap-1.5 transition-colors cursor-pointer font-bold text-[13px]"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Tính tiền tiết kiệm</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
