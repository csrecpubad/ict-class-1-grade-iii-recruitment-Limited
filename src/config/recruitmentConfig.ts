export type RecruitmentCode =
  | "MSO_SECOND_ROUND"
  | "ICT_CLASS_II_GRADE_II"
  | "ICT_CLASS_I_GRADE_III";

export interface RecruitmentConfig {
  code: RecruitmentCode;
  title: string;
  shortTitle: string;
}

export const recruitmentConfigs: RecruitmentConfig[] = [
  {
    code: "MSO_SECOND_ROUND",
    shortTitle: "MSO",
    title:
      "Open Competitive Examination for Recruitment to Grade III of Management Service Officers' Service – 2019 (2025), Second Round",
  },

  {
    code: "ICT_CLASS_II_GRADE_II",
    shortTitle: "ICT Service",
    title:
      "Sri Lanka Information and Communication Technology Service – Class II Grade II Limited Recruitment",
  },

  {
    code: "ICT_CLASS_I_GRADE_III",
    shortTitle: "ICT Service",
    title:
      "Sri Lanka Information and Communication Technology Service – Class I Grade III Limited Recruitment",
  },
];