import React from 'react';

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="flex flex-col px-4 pt-4 pb-6">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f0edf1] rounded-full self-start mb-3 border border-[#becabc]/30">
        <span className="text-[14px]">🌾</span>
        <span className="text-[12px] font-bold text-[#00652c] tracking-wider uppercase">
          ĐỒNG HÀNH CÙNG NHÀ NÔNG VIỆT NAM
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-[26px] sm:text-[32px] font-extrabold text-[#00652c] uppercase leading-[1.25] tracking-tight mb-2">
        GIẢI PHÁP TỐT HƠN CHO NHÀ NÔNG – ĐĂNG KÝ NGAY
      </h1>

      {/* Subheadline */}
      <p className="text-[15px] sm:text-[16px] text-[#3f493f] leading-relaxed mb-4">
        Để lại số điện thoại để được tư vấn miễn phí và nhận thông tin ưu đãi phù hợp với nhu cầu của gia đình bạn.
      </p>

      {/* Farmer Photo Card */}
      <div className="relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md border border-[#e4e1e5] mb-4 group">
        <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] w-full">
          <img
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            alt="Bác Ba Đạt đội nón lá rạng rỡ bên ruộng lúa trĩu hạt vàng óng"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwtGO9St_niJ2JnjVsTj40K_AyXsUbP1SjgmKWtM41M1LV5wKgkJAGzy5IbSPQTB_LwCWzmfx1Gnu0A2-jQLlIs950Lh1TU_OqPK8omOz7JU1_lPnpXMb7PRcPU51TTJ0uxAjTPeZTzg-j6gMAQmm11NgyIm1Z5r2ZWHZw5JPEW0vJSoUWjTdiDzkOk-9Lxf5eF8Lx6R-KKPjBrTwVBp_w06uss4lpduglVR6j_vHtAlRw_PBt-nEBEA"
          />
          <div className="absolute top-3 left-3 bg-[#00652c]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm shadow flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#79db8d] animate-pulse"></span>
            Mùa vụ 2025 - 2026
          </div>
        </div>

        <div className="p-3 bg-[#f5f3f6] flex items-center gap-2 border-t border-[#e4e1e5]">
          <span
            className="material-symbols-outlined text-[#00652c] text-[20px] shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <span className="text-[13px] sm:text-[14px] font-semibold text-[#1b1b1e]">
            Bác Ba Đạt (Cần Thơ) – Vụ mùa bội thu cùng Nông Nghiệp Việt
          </span>
        </div>
      </div>

      {/* Trust Badges List */}
      <div className="flex flex-col gap-2 mb-5 bg-white p-3.5 rounded-xl shadow-xs border border-[#e4e1e5]/80">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[#15803d] text-[20px] shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span className="text-[14px] sm:text-[15px] font-medium text-[#1b1b1e]">
            Tư vấn miễn phí tận nơi canh tác
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[#15803d] text-[20px] shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span className="text-[14px] sm:text-[15px] font-medium text-[#1b1b1e]">
            Không mất bất kỳ chi phí nào khi đăng ký
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[#15803d] text-[20px] shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span className="text-[14px] sm:text-[15px] font-medium text-[#1b1b1e]">
            Thông tin gia đình được bảo mật 100%
          </span>
        </div>
      </div>

      {/* Primary Hero CTA Button */}
      <button
        onClick={onScrollToForm}
        type="button"
        className="w-full min-h-[54px] py-3 px-4 rounded-xl bg-[#fe932c] hover:bg-[#e07f20] text-white flex items-center justify-center gap-2 shadow-[0_6px_18px_rgba(254,147,44,0.35)] transition-all active:scale-[0.98] cursor-pointer font-bold text-[15px] sm:text-[16px] uppercase tracking-wide"
      >
        <span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
        <span>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</span>
      </button>
    </section>
  );
};
