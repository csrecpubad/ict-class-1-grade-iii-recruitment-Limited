// src/types/ict.ts

import type { SpecializedFieldName } from "../constants/ictFields";

export interface SpecializedField {
  field: SpecializedFieldName;
  academicCompleted: "Yes" | "No" | "";
  experienceRating: number | null;
}

export interface EmploymentDetails {
  currentPosition: string;
  workplace: string;
}

export interface EducationQualifications {
  alPassed: "Passed" | "Not passed" | "";
  alStream: string;
  alSub1: string;
  alSub2: string;
  alSub3: string;
  qualification: string;
  university: string;
  specialization : string;
  degreeEffectiveDate: string;
  postGraduateQualification: string;
  postGraduateUniversity: string;
  postGraduateSpecialization: string;
  postGraduateEffectiveDate: string;

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

  specializedFields: SpecializedField[];

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