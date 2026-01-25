import { EUserRole } from "@/enums";

export type DemoRequestFormValues = {
  fullName: string;
  role: EUserRole;
  email: string;
  phone: string;

  schoolName: string;
  schoolType: string;
  numberOfStudents: string;

  biggestChallenge: string[];
  preferredDate: Date | null;

  address: {
    line1: string;
    line2: string;
    suburb: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
  };

  confirmAccuracy: boolean;
  acceptTerms: boolean;
};
