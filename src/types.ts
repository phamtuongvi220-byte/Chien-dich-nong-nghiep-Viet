export interface ConsultationLead {
  id: string;
  fullName: string;
  phone: string;
  province: string;
  cropType: string;
  preferredTime?: string;
  createdAt: string;
  status: 'pending' | 'contacted';
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  detail: string;
  comment: string;
  avatarChar: string;
  rating: number;
}

export interface CropPreset {
  name: string;
  icon: string;
  avgFertilizerCostPerHa: number; // VND per hectare
  estimatedSavingPct: number; // e.g. 30%
  expectedYieldIncrease: string; // e.g. "12% - 18%"
}
