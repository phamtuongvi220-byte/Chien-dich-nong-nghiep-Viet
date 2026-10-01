import React, { useState } from 'react';
import { ConsultationLead } from '../types';

interface LeadFormProps {
  onRegisterSuccess: (lead: ConsultationLead) => void;
  onCallClick: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onRegisterSuccess, onCallClick }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('');
  const [cropType, setCropType] = useState('lua');
  const [preferredTime, setPreferredTime] = useState('anytime');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Normalize phone number
    const cleanPhone = phone.replace(/[\s.-]/g, '');
    if (!/^(0[35789])[0-9]{8}$/.test(cleanPhone)) {
      setErrorMsg('Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 số, bắt đầu bằng 03, 05, 07, 08, 09)');
      return;
    }

    if (!fullName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của bà con');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: ConsultationLead = {
        id: 'lead-' + Date.now(),
        fullName: fullName.trim(),
        phone: cleanPhone,
        province: province || 'Chưa chọn tỉnh',
        cropType:
          cropType === 'lua'
            ? 'Cây lúa'
            : cropType === 'trai'
            ? 'Cây ăn trái'
            : cropType === 'rau'
            ? 'Rau màu'
            : 'Phân bón sinh học',
        preferredTime:
          preferredTime === 'morning'
            ? 'Sáng (7h - 9h)'
            : preferredTime === 'noon'
            ? 'Trưa (11h30 - 13h)'
            : preferredTime === 'evening'
            ? 'Tối (17h - 20h)'
            : 'Bất cứ lúc nào',
        createdAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        status: 'pending',
      };

      onRegisterSuccess(newLead);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setProvince('');
    setCropType('lua');
    setPreferredTime('anytime');
    setSubmitted(false);
    setErrorMsg('');
  };

  const fillSampleData = () => {
    setFullName('Bác Tư Lúa');
    setPhone('0918765432');
    setProvince('AnGiang');
    setCropType('lua');
    setPreferredTime('morning');
  };

  return (
    <section className="scroll-mt-20 px-4 py-6" id="lead-form">
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-[#e4e1e5] flex flex-col relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#fe932c]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00652c] text-[24px]">edit_note</span>
            <span className="text-[12px] font-bold text-[#00652c] uppercase tracking-wider">
              Thông Tin Liên Hệ Nhanh
            </span>
          </div>
          {!submitted && (
            <button
              type="button"
              onClick={fillSampleData}
              className="text-[11px] text-[#00652c] hover:underline bg-[#d3ffd5]/50 px-2 py-0.5 rounded cursor-pointer font-medium"
            >
              Điền mẫu nhanh
            </button>
          )}
        </div>

        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00652c] uppercase leading-snug mb-2">
          ĐỂ LẠI SỐ ĐIỆN THOẠI – CHÚNG TÔI SẼ LIÊN HỆ VỚI BẠN
        </h2>

        <p className="text-[14px] sm:text-[15px] text-[#3f493f] mb-4">
          Chỉ mất vài giây để đăng ký. Chuyên viên nông nghiệp sẽ gọi lại giải đáp kỹ thuật tận tình cho bà con.
        </p>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-[13px] flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{errorMsg}</span>
          </div>
        )}

        {!submitted ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Họ tên bà con */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-[#1b1b1e] flex items-center gap-1" htmlFor="fullName">
                <span>Họ và tên của bà con</span>
                <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                className="w-full min-h-[50px] px-3.5 bg-[#f5f3f6] rounded-xl text-[15px] text-[#1b1b1e] placeholder:text-[#6f7a6e] border border-transparent focus:border-[#00652c] focus:bg-white focus:outline-none transition-all shadow-inner"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ví dụ: Bác Ba Đạt, Nguyễn Văn A"
                required
                type="text"
              />
            </div>

            {/* Số điện thoại */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-[#1b1b1e] flex items-center gap-1" htmlFor="phoneNum">
                <span>Số điện thoại nhận tư vấn</span>
                <span className="text-[#ba1a1a]">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full min-h-[50px] pl-10 pr-3.5 bg-[#f5f3f6] rounded-xl text-[15px] text-[#1b1b1e] placeholder:text-[#6f7a6e] border border-transparent focus:border-[#00652c] focus:bg-white focus:outline-none transition-all shadow-inner"
                  id="phoneNum"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ví dụ: 0912 345 678"
                  required
                  type="tel"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6f7a6e] text-[18px]">
                  call
                </span>
              </div>
            </div>

            {/* Khu vực / Tỉnh thành */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-[#1b1b1e]" htmlFor="province">
                Khu vực / Tỉnh thành canh tác
              </label>
              <div className="relative">
                <select
                  className="w-full min-h-[50px] px-3.5 pr-10 bg-[#f5f3f6] rounded-xl text-[15px] text-[#1b1b1e] border border-transparent focus:border-[#00652c] focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
                  id="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="">Chọn tỉnh thành của bà con</option>
                  <optgroup label="Miền Tây Nam Bộ">
                    <option value="DongThap">Đồng Tháp</option>
                    <option value="AnGiang">An Giang</option>
                    <option value="TienGiang">Tiền Giang</option>
                    <option value="CanTho">Cần Thơ</option>
                    <option value="SocTrang">Sóc Trăng</option>
                    <option value="KienGiang">Kiên Giang</option>
                    <option value="VinhLong">Vĩnh Long</option>
                    <option value="BenTre">Bến Tre</option>
                  </optgroup>
                  <optgroup label="Tây Nguyên">
                    <option value="DakLak">Đắk Lắk</option>
                    <option value="GiaLai">Gia Lai</option>
                    <option value="LamDong">Lâm Đồng</option>
                    <option value="DakNong">Đắk Nông</option>
                  </optgroup>
                  <optgroup label="Miền Bắc & Miền Trung">
                    <option value="ThaiBinh">Thái Bình</option>
                    <option value="NamDinh">Nam Định</option>
                    <option value="ThanhHoa">Thanh Hóa</option>
                    <option value="NgheAn">Nghệ An</option>
                    <option value="BinhDinh">Bình Định</option>
                  </optgroup>
                  <option value="Other">Tỉnh thành khác</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#3f493f]">
                  arrow_drop_down
                </span>
              </div>
            </div>

            {/* Mô hình cây trồng đang quan tâm */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-[#1b1b1e]">
                Mô hình cây trồng đang quan tâm
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'lua', label: 'Cây lúa', icon: '🌾' },
                  { id: 'trai', label: 'Cây ăn trái', icon: '🍊' },
                  { id: 'rau', label: 'Rau màu', icon: '🥬' },
                  { id: 'phan', label: 'Phân bón sinh học', icon: '🌱' },
                ].map((item) => {
                  const isChecked = cropType === item.id;
                  return (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2 p-2.5 rounded-xl cursor-pointer border transition-all ${
                        isChecked
                          ? 'bg-[#d3ffd5]/40 border-[#00652c] text-[#00652c] font-semibold shadow-xs'
                          : 'bg-[#f5f3f6] border-transparent text-[#1b1b1e] hover:bg-[#eae7eb]'
                      }`}
                    >
                      <input
                        checked={isChecked}
                        onChange={() => setCropType(item.id)}
                        className="w-4 h-4 text-[#00652c] accent-[#00652c]"
                        name="crop"
                        type="radio"
                        value={item.id}
                      />
                      <span className="text-[16px]">{item.icon}</span>
                      <span className="text-[14px]">{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Thời gian thuận tiện để gọi lại */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] sm:text-[14px] font-semibold text-[#1b1b1e]">
                Thời gian thuận tiện để kỹ sư gọi lại
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {[
                  { id: 'anytime', label: 'Bất cứ lúc nào' },
                  { id: 'morning', label: 'Sáng (7h - 9h)' },
                  { id: 'noon', label: 'Trưa (11h30 - 13h)' },
                  { id: 'evening', label: 'Tối (17h - 20h)' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setPreferredTime(t.id)}
                    className={`py-1.5 px-2 rounded-lg text-[12px] font-medium transition-all text-center border cursor-pointer ${
                      preferredTime === t.id
                        ? 'bg-[#00652c] text-white border-[#00652c] shadow-xs'
                        : 'bg-[#f5f3f6] text-[#3f493f] border-transparent hover:bg-[#e4e1e5]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className="w-full min-h-[54px] py-3 px-4 rounded-xl bg-[#fe932c] hover:bg-[#e07f20] text-white flex items-center justify-center gap-2 shadow-[0_6px_18px_rgba(254,147,44,0.35)] transition-all active:scale-[0.98] mt-2 cursor-pointer font-bold text-[15px] sm:text-[16px] uppercase tracking-wide disabled:opacity-70"
              type="submit"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Đang gửi thông tin...</span>
                </div>
              ) : (
                <span>👉 ĐĂNG KÝ NGAY (MIỄN PHÍ)</span>
              )}
            </button>

            {/* Trust Note */}
            <div className="flex items-center justify-center gap-1.5 text-center mt-1">
              <span className="material-symbols-outlined text-[#6f7a6e] text-[16px]">lock</span>
              <p className="text-[12px] text-[#3f493f]">
                Thông tin của bạn được bảo mật và chỉ sử dụng cho mục đích tư vấn kỹ thuật.
              </p>
            </div>
          </form>
        ) : (
          /* Feedback Success State */
          <div className="flex flex-col items-center justify-center p-6 text-center bg-[#f5f3f6] rounded-2xl border border-[#79db8d]/50 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#00652c] text-white flex items-center justify-center mb-3 shadow-lg shadow-[#00652c]/20">
              <span className="material-symbols-outlined text-[36px]">check</span>
            </div>

            <span className="text-[12px] font-bold text-[#15803d] uppercase tracking-wider mb-1">
              ĐÃ GỬI THÀNH CÔNG!
            </span>
            <h3 className="text-[20px] font-extrabold text-[#00652c] mb-2">
              Kỹ sư sẽ gọi lại cho {fullName} trong ít phút tới!
            </h3>

            <p className="text-[14px] text-[#3f493f] mb-4 max-w-sm">
              Chúng tôi đã ghi nhận số điện thoại <strong className="text-[#1b1b1e]">{phone}</strong>. Kỹ sư chuyên môn về{' '}
              <strong className="text-[#00652c]">
                {cropType === 'lua'
                  ? 'Cây lúa'
                  : cropType === 'trai'
                  ? 'Cây ăn trái'
                  : cropType === 'rau'
                  ? 'Rau màu'
                  : 'Phân bón sinh học'}
              </strong>{' '}
              sẽ liên hệ hỗ trợ kỹ thuật tận nơi cho gia đình bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-[#becabc] text-[#1b1b1e] font-semibold text-[13px] hover:bg-[#eae7eb] transition-colors cursor-pointer"
              >
                Đăng ký thêm số khác
              </button>
              <button
                type="button"
                onClick={onCallClick}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#fe932c] text-white font-bold text-[13px] hover:bg-[#e07f20] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Cần gấp? Gọi 1800 6868</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
