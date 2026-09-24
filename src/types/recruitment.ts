export interface GeneralDetails {
  callingNumber: string;
  email: string;
}
export interface PersonalDetails {
  nameSinhala: string;
  nameEnglish: string;

  prefix: "Mr" | "Mrs" | "Miss" | "";

  fullNameSinhala: string;
  fullNameEnglish: string;

  nic: string;

  gender: "Male" | "Female" | "";

  civilStatus: "Unmarried" | "Married" | "";

  permanentAddress: string;
  appointmentAddress: string;

  residentialDistrict: string;

  mobile: string;
  whatsapp: string;

  birthday: string;
  age: string;

  currentPosition: string;
  workPlace: string;
}

export interface MSOExamDetails {
  msoExamNumber: string;
  msoMarks: string;
  msoRank: string;
  msoMedium: "Sinhala" | "Tamil" | "English" | "";
  examDistrict: string;
  selectedDistrictQualification:
    | "ByBirth"
    | "PermanentResidence"
    | "SecondaryEducation"
    | "";
}

export interface OLevelDetails {
  olYear: string;
  olIndex: string;

  maths: string;
  language: string;

  sub3: string;
  sub4: string;
  sub5: string;
  sub6: string;
  sub7: string;
  sub8: string;
  sub9: string;
}

export interface ALevelDetails {
  alYear: string;
  alIndex: string;
  stream: string;

  alSub1: string;
  alSub2: string;
  alSub3: string;

  generalEnglish: "Yes" | "No" | "";
  geGrade: "A" | "B" | "C" | "S" | "F" |"";

  degreeQualification: "Yes" | "No" | "";
  degree: string;
  university: string;
  degreeDate: string;

  otherQualification: string;
}
