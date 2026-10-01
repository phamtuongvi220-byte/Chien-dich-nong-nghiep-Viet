import React from 'react';
import { ConsultationLead } from '../types';

interface RegisteredLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: ConsultationLead[];
  onToggleStatus: (id: string) => void;
  onDeleteLead: (id: string) => void;
}

export const RegisteredLeadsModal: React.FC<RegisteredLeadsModalProps> = ({
  isOpen,
  onClose,
  leads,
  onToggleStatus,
  onDeleteLead,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl p-4 sm:p-6 max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#e4e1e5] relative animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e4e1e5]">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#00652c]/10 text-[#00652c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">assignment</span>
            </div>
            <div>
              <h3 className="font-bold text-[16px] sm:text-[18px] text-[#00652c]">
                Danh Sách Đăng Ký Tư Vấn
              </h3>
              <p className="text-[12px] text-[#3f493f]">
                Tổng cộng: {leads.length} lượt đăng ký từ bà con
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-[#f0edf1] hover:bg-[#e4e1e5] flex items-center justify-center text-[#1b1b1e] cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1">
          {leads.length === 0 ? (
            <div className="text-center py-10 text-[#6f7a6e]">
              <span className="material-symbols-outlined text-[40px] mb-2 opacity-50">inbox</span>
              <p className="text-[14px]">Chưa có lượt đăng ký nào. Hãy thử điền vào biểu mẫu!</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="p-3 bg-[#f5f3f6] rounded-xl border border-[#e4e1e5] flex flex-col gap-1.5 transition-all hover:border-[#becabc]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[14px] text-[#1b1b1e]">{lead.fullName}</span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      lead.status === 'contacted'
                        ? 'bg-[#d3ffd5] text-[#00652c]'
                        : 'bg-[#ffdcc3] text-[#904d00]'
                    }`}
                  >
                    {lead.status === 'contacted' ? 'Đã liên hệ' : 'Chờ liên hệ'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1 text-[12px] text-[#3f493f]">
                  <div>
                    📞 <strong>{lead.phone}</strong>
                  </div>
                  <div>
                    📍 <span>{lead.province}</span>
                  </div>
                  <div>
                    🌾 Quan tâm: <strong className="text-[#00652c]">{lead.cropType}</strong>
                  </div>
                  <div>
                    ⏰ Giờ gọi: <span>{lead.preferredTime || 'Linh hoạt'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#e4e1e5]/60 text-[11px] text-[#6f7a6e]">
                  <span>Đăng ký lúc: {lead.createdAt}</span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onToggleStatus(lead.id)}
                      className="text-[#00652c] font-semibold hover:underline cursor-pointer"
                    >
                      {lead.status === 'contacted' ? 'Đánh dấu chưa gọi' : 'Đã gọi điện'}
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => onDeleteLead(lead.id)}
                      className="text-[#ba1a1a] hover:underline cursor-pointer"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#e4e1e5] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#00652c] text-white font-bold rounded-xl text-[13px] hover:bg-[#15803d] transition-colors cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
