export type DemoRequestFormValues = {
  fullName: string;
  role: "PRINCIPAL" | "MANAGER" | "ADMIN" | "TEACHER" | "OTHER";
  email: string;
  phone: string;

  schoolName: string;
  schoolType: string;
  numberOfStudents: string;

  biggestChallenge: string;
  preferredDate: string; // yyyy-MM-dd

  address: {
    line1: string;
    line2: string;
    suburb: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
  };
};
