import React, { useState } from 'react';

interface CostCalculatorProps {
  onApplyCropToForm: (crop: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyCropToForm }) => {
  const [selectedCrop, setSelectedCrop] = useState<'lua' | 'trai' | 'rau' | 'phan'>('lua');
  const [area, setArea] = useState<number>(5); // default 5 công
  const [unit, setUnit] = useState<'cong' | 'ha'>('cong');

  // Baseline cost estimates per unit per crop
  // 1 cong = 1000m2 (approx 0.1 ha)
  const cropConfig = {
    lua: {
      name: 'Lúa Nước (Đông Xuân / Hè Thu)',
      costPerCong: 2200000, // 2.2M VND / công tiền phân thuốc hóa học
      savingPct: 0.3,
      yieldGainPct: 15,
      icon: '🌾',
    },
    trai: {
      name: 'Cây Ăn Trái (Sầu Riêng, Bưởi, Cam...)',
      costPerCong: 5500000, // 5.5M VND / công
      savingPct: 0.32,
      yieldGainPct: 20,
      icon: '🍊',
    },
    rau: {
      name: 'Rau Màu & Củ Quả Ngắn Ngày',
      costPerCong: 3000000, // 3M VND / công
      savingPct: 0.28,
      yieldGainPct: 18,
      icon: '🥬',
    },
    phan: {
      name: 'Cây Công Nghiệp (Cà Phê, Tiêu...)',
      costPerCong: 4200000,
      savingPct: 0.3,
      yieldGainPct: 15,
      icon: '🌱',
    },
  };

  const current = cropConfig[selectedCrop];
  const effectiveAreaInCong = unit === 'ha' ? area * 10 : area;
  const standardCost = effectiveAreaInCong * current.costPerCong;
  const estimatedSavings = Math.round(standardCost * current.savingPct);

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-[#e4e1e5] my-2">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-[#00652c] text-[24px]">calculate</span>
        <span className="text-[12px] font-bold text-[#00652c] uppercase tracking-wider">
          Công Cụ Tính Toán Nhanh
        </span>
      </div>

      <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00652c] mb-1">
        Ước Tính Tiết Kiệm Chi Phí Cho Vụ Mùa
      </h3>
      <p className="text-[13px] text-[#3f493f] mb-4">
        Nhập diện tích vườn/ruộng của gia đình để biết ngay số tiền dự kiến tiết kiệm được mỗi mùa vụ.
      </p>

      {/* Select crop tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {(Object.keys(cropConfig) as Array<keyof typeof cropConfig>).map((key) => {
          const item = cropConfig[key];
          const isSelected = selectedCrop === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCrop(key)}
              className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#00652c] bg-[#d3ffd5]/30 shadow-xs'
                  : 'border-[#e4e1e5] bg-[#f5f3f6] hover:bg-[#eae7eb]'
              }`}
            >
              <span className="text-[20px]">{item.icon}</span>
              <span className="text-[13px] font-semibold text-[#1b1b1e] line-clamp-1">
                {key === 'lua' ? 'Cây Lúa' : key === 'trai' ? 'Ăn Trái' : key === 'rau' ? 'Rau Màu' : 'Cây CN'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Area inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        <div>
          <label className="text-[13px] font-semibold text-[#1b1b1e] block mb-1">
            Diện tích canh tác của bà con:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={500}
              value={area}
              onChange={(e) => setArea(Math.max(1, Number(e.target.value) || 1))}
              className="w-full min-h-[46px] px-3.5 bg-[#f5f3f6] rounded-xl text-[16px] font-bold text-[#00652c] border border-transparent focus:border-[#00652c] focus:bg-white focus:outline-none"
            />
            <div className="flex bg-[#f5f3f6] p-1 rounded-xl shrink-0">
              <button
                type="button"
                onClick={() => setUnit('cong')}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-bold cursor-pointer transition-all ${
                  unit === 'cong' ? 'bg-[#00652c] text-white shadow-xs' : 'text-[#3f493f]'
                }`}
              >
                Công (1.000m²)
              </button>
              <button
                type="button"
                onClick={() => setUnit('ha')}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-bold cursor-pointer transition-all ${
                  unit === 'ha' ? 'bg-[#00652c] text-white shadow-xs' : 'text-[#3f493f]'
                }`}
              >
                Hécta (Ha)
              </button>
            </div>
          </div>
        </div>

        {/* Live Calculation Result Card */}
        <div className="bg-gradient-to-br from-[#00652c] to-[#15803d] text-white p-3.5 rounded-xl shadow flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-wider text-[#d3ffd5] font-semibold">
            Số tiền ước tính tiết kiệm:
          </span>
          <div className="text-[22px] sm:text-[24px] font-extrabold text-[#ffdcc3] my-0.5">
            {formatVND(estimatedSavings)}
          </div>
          <div className="text-[12px] text-[#d3ffd5] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>Năng suất tăng thêm khoảng: +{current.yieldGainPct}%</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onApplyCropToForm(selectedCrop)}
        className="w-full py-2.5 px-4 bg-[#fe932c] hover:bg-[#e07f20] text-white font-bold rounded-xl text-[14px] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow active:scale-98"
      >
        <span>Áp dụng diện tích này vào mẫu đăng ký</span>
        <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
      </button>
    </div>
  );
};
