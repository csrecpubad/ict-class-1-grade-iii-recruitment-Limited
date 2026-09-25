// src/types/ict.ts

export interface EmploymentDetails {
  isPublicSectorEmployee: "Yes" | "No" | "";
  serviceParticulars: string;
  workplace: string;
}

export interface EducationQualifications {
  qualification: string;
  alPassed: "Passed" | "Not passed" | "";
  alStream: string;
}

export interface SpecializedFieldRating {
  field: string;
  rating: number | null;
}

export interface ProfessionalQualification {
  qualification: string;
  other: string;
}

export interface TechnologySkill {
  technology: string;
  other: string;
}

export interface EducationQualifications {
  qualification: string;

  alPassed: "Passed" | "Not passed" | "";
  alStream: string;

  specializedFields: SpecializedFieldRating[];

  professionalMemberships: string;

  professionalQualifications: string;
  professionalQualificationsOther: string;

  technologySkills: string;

  researchPaper: ResearchPaper;

  awards: string;
}

export interface ResearchPaper {
  topic: string;
  year: string;
  type: "Local" | "International" | "";
  instituteOrMagazine: string;
}

export interface ICTFormData {
  employmentDetails: EmploymentDetails;

  educationQualifications: EducationQualifications;

  specializedFields: SpecializedFieldRating[];

  professionalMemberships: string;

  professionalQualifications: ProfessionalQualification[];

  technologySkills: TechnologySkill[];

  researchPapers: ResearchPaper[];

  awards: string;
}

export interface EmploymentDetails {
  isPublicSectorEmployee: "Yes" | "No" | "";
  serviceParticulars: string;
  workplace: string;
}