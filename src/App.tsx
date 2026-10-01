import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LeadForm } from './components/LeadForm';
import { BenefitsSection } from './components/BenefitsSection';
import { SolutionSection } from './components/SolutionSection';
import { CostCalculator } from './components/CostCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CallHotlineModal } from './components/CallHotlineModal';
import { RegisteredLeadsModal } from './components/RegisteredLeadsModal';
import { RecentRegistrationToast } from './components/RecentRegistrationToast';
import { ConsultationLead } from './types';

const INITIAL_LEADS: ConsultationLead[] = [
  {
    id: 'lead-1',
    fullName: 'Bác Ba Đạt',
    phone: '0912345678',
    province: 'Cần Thơ',
    cropType: 'Cây lúa',
    preferredTime: 'Sáng (7h - 9h)',
    createdAt: 'Hôm nay 08:30',
    status: 'contacted',
  },
  {
    id: 'lead-2',
    fullName: 'Chú Sáu Dân',
    phone: '0987654321',
    province: 'Tiền Giang',
    cropType: 'Cây ăn trái',
    preferredTime: 'Trưa (11h30 - 13h)',
    createdAt: 'Hôm nay 09:15',
    status: 'pending',
  },
];

export default function App() {
  const [leads, setLeads] = useState<ConsultationLead[]>(() => {
    try {
      const saved = localStorage.getItem('nongnghiep_leads');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_LEADS;
  });

  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'responsive'>('mobile');

  useEffect(() => {
    try {
      localStorage.setItem('nongnghiep_leads', JSON.stringify(leads));
    } catch {
      // ignore
    }
  }, [leads]);

  const handleRegisterSuccess = (newLead: ConsultationLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleToggleLeadStatus = (id: string) => {
    setLeads((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'contacted' ? 'pending' : 'contacted' }
          : item
      )
    );
  };

  const handleDeleteLead = (id: string) => {
    setLeads((prev) => prev.filter((item) => item.id !== id));
  };

  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyCropToForm = (crop: string) => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Click corresponding radio button if needed
      const radio = document.querySelector<HTMLInputElement>(`input[name="crop"][value="${crop}"]`);
      if (radio) {
        radio.click();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#ece8ed] text-[#1b1b1e] flex flex-col items-center">
      {/* View Switcher bar for testing / previewing */}
      <div className="w-full bg-[#005323] text-white py-1 px-4 text-[12px] flex items-center justify-between z-50 sticky top-0 sm:static">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#79db8d] animate-pulse"></span>
          <span className="font-semibold hidden sm:inline">Chiến Dịch Nông Nghiệp Việt</span>
          <span className="text-[#d3ffd5] text-[11px]">Hotline: 1800 6868</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#d3ffd5] hidden sm:inline">Hiển thị:</span>
          <button
            type="button"
            onClick={() => setViewMode('mobile')}
            className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-white text-[#00652c] shadow'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            📱 Khung điện thoại
          </button>
          <button
            type="button"
            onClick={() => setViewMode('responsive')}
            className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              viewMode === 'responsive'
                ? 'bg-white text-[#00652c] shadow'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            💻 Toàn màn hình
          </button>
        </div>
      </div>

      {/* Main Wrapper */}
      <div
        className={`w-full transition-all duration-300 ${
          viewMode === 'mobile'
            ? 'max-w-[430px] my-0 sm:my-6 shadow-2xl rounded-none sm:rounded-[36px] overflow-hidden border-0 sm:border-8 sm:border-[#303033]'
            : 'max-w-2xl lg:max-w-3xl my-0 sm:my-4 shadow-xl rounded-none sm:rounded-2xl overflow-hidden'
        } bg-[#fbf8fc] min-h-screen relative flex flex-col`}
      >
        {/* Header */}
        <Header
          onCallClick={() => setIsCallModalOpen(true)}
          onOpenLeads={() => setIsLeadsModalOpen(true)}
          leadCount={leads.length}
        />

        {/* Content Body */}
        <main className="flex-col relative w-full pt-16 bg-[#fbf8fc] flex-1">
          <div className="flex flex-col w-full pb-24">
            {/* 1. Hero Section */}
            <HeroSection onScrollToForm={scrollToForm} />

            {/* 2. Lead Form Section */}
            <LeadForm
              onRegisterSuccess={handleRegisterSuccess}
              onCallClick={() => setIsCallModalOpen(true)}
            />

            {/* 3. Benefits Section */}
            <BenefitsSection />

            {/* 4. Product / Solution Section */}
            <SolutionSection
              onScrollToForm={scrollToForm}
              onOpenCalculator={() => setShowCalculator((prev) => !prev)}
            />

            {/* Optional Cost Calculator Widget */}
            {showCalculator && (
              <div className="px-4">
                <CostCalculator onApplyCropToForm={handleApplyCropToForm} />
              </div>
            )}

            {/* 5. Why Choose Us Section */}
            <WhyChooseUs />

            {/* 6. Social Proof / Farmer Reviews */}
            <ReviewsSection />

            {/* 7. FAQ Section */}
            <FaqSection />

            {/* 8. Final CTA Banner */}
            <FinalCta
              onScrollToForm={scrollToForm}
              onCallClick={() => setIsCallModalOpen(true)}
            />

            {/* 9. Footer */}
            <Footer onCallClick={() => setIsCallModalOpen(true)} />
          </div>
        </main>

        {/* 10. Sticky Bottom Bar */}
        <StickyBottomBar
          onScrollToForm={scrollToForm}
          onCallClick={() => setIsCallModalOpen(true)}
        />
      </div>

      {/* Hotline Dial Modal */}
      <CallHotlineModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      {/* Registered Leads Management Modal */}
      <RegisteredLeadsModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
        leads={leads}
        onToggleStatus={handleToggleLeadStatus}
        onDeleteLead={handleDeleteLead}
      />

      {/* Recent registration ticker */}
      <RecentRegistrationToast />
    </div>
  );
}
