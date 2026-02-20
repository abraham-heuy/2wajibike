// pages/auth/types.ts
export type UserRole = 'citizen' | 'leader' | 'aspirant';

export interface BaseFormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface CitizenAdditionalData {
  idNumber: string;
  ward: string;
  constituency: string;
  county: string;
  preferredLanguage: 'english' | 'swahili' | 'both';
}

export interface LeaderAdditionalData {
  idNumber: string;
  position: string;
  ward: string;
  constituency: string;
  county: string;
  politicalParty?: string;
  termStart: string;
  officeEmail?: string;
  officePhone?: string;
  identificationDoc: File | null;
}

export interface AspirantAdditionalData {
  idNumber: string;
  aspiringPosition: string;
  ward: string;
  constituency: string;
  county: string;
  politicalParty?: string;
  manifesto?: string;
  campaignWebsite?: string;
  identificationDoc: File | null;
}

export interface VerificationData {
  method: 'email' | 'sms';
  code: string;
  verified: boolean;
}

export interface SignUpFormData {
  role: UserRole;
  basic: BaseFormData;
  additional: CitizenAdditionalData | LeaderAdditionalData | AspirantAdditionalData;
  verification: VerificationData;
}