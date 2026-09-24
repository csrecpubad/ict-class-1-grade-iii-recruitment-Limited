import type {
  GeneralDetails,
  PersonalDetails,
  MSOExamDetails,
  OLevelDetails,
  ALevelDetails,
} from "../types/recruitment";

import { validateNIC } from "./nic";

export interface FormErrors {
  [field: string]: string;
}

/* =========================================================
   BASIC HELPERS
========================================================= */

function required(
  value: string | undefined,
  fieldName: string
): string {
  if (!value || !value.trim()) {
    return `${fieldName} is required.`;
  }

  return "";
}

function isValidYear(
  value: string,
  minimumYear = 1950
): boolean {
  if (!/^\d{4}$/.test(value)) {
    return false;
  }

  const year = Number(value);
  const currentYear = new Date().getFullYear();

  return year >= minimumYear && year <= currentYear;
}

function isValidDate(value: string): boolean {
  if (!value) {
    return false;
  }

  const date = new Date(`${value}T00:00:00`);

  return !isNaN(date.getTime());
}

function isFutureDate(value: string): boolean {
  const date = new Date(`${value}T00:00:00`);

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date > today;
}

function isValidGrade(value: string): boolean {
  return ["A", "B", "C", "S", "F"].includes(
    value.trim().toUpperCase()
  );
}

function removeEmptyErrors(
  errors: FormErrors
): FormErrors {
  return Object.fromEntries(
    Object.entries(errors).filter(
      ([, message]) => Boolean(message)
    )
  );
}

export function validateGeneralDetails(
  data: GeneralDetails
): FormErrors {
  const errors: FormErrors = {};

  errors.callingNumber = required(
    data.callingNumber,
    "Interview calling number"
  );

  if (!data.email.trim()) {
    errors.email =
      "Email address is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      data.email.trim()
    )
  ) {
    errors.email =
      "Enter a valid email address.";
  }

  return removeEmptyErrors(errors);
}

/* =========================================================
   PERSONAL DETAILS
========================================================= */

export function validatePersonalDetails(
  data: PersonalDetails
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     Names
  ------------------------------------------------ */

  errors.nameSinhala = required(
    data.nameSinhala,
    "Name with initials"
  );

  errors.nameEnglish = required(
    data.nameEnglish,
    "Name with initials in English"
  );

  errors.prefix = required(
    data.prefix,
    "Prefix"
  );

  errors.fullNameSinhala = required(
    data.fullNameSinhala,
    "Full name"
  );

  errors.fullNameEnglish = required(
    data.fullNameEnglish,
    "Full name in English"
  );

  /* -----------------------------------------------
     NIC
  ------------------------------------------------ */

  const nicResult = validateNIC(data.nic);

  if (!nicResult.valid) {
    errors.nic = nicResult.message;
  }

  /* -----------------------------------------------
     Gender
  ------------------------------------------------ */

  errors.gender = required(
    data.gender,
    "Gender"
  );

  /* -----------------------------------------------
     Civil Status
  ------------------------------------------------ */

  errors.civilStatus = required(
    data.civilStatus,
    "Civil status"
  );

  /* -----------------------------------------------
     Addresses
  ------------------------------------------------ */

  errors.permanentAddress = required(
    data.permanentAddress,
    "Permanent address"
  );

  errors.appointmentAddress = required(
    data.appointmentAddress,
    "Appointment letter mailing address"
  );

  /* -----------------------------------------------
     District
  ------------------------------------------------ */

  errors.residentialDistrict = required(
    data.residentialDistrict,
    "Residential district"
  );

  /* -----------------------------------------------
     Mobile
  ------------------------------------------------ */

  if (!data.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^07\d{8}$/.test(data.mobile.trim())) {
    errors.mobile =
      "Enter a valid mobile number. Example: 0712345678";
  }

  /* -----------------------------------------------
     WhatsApp
  ------------------------------------------------ */

  if (data.whatsapp.trim()) {
    if (!/^07\d{8}$/.test(data.whatsapp.trim())) {
      errors.whatsapp =
        "Enter a valid WhatsApp number. Example: 0712345678";
    }
  }

  /* -----------------------------------------------
     Birthday
  ------------------------------------------------ */

  if (!data.birthday.trim()) {
    errors.birthday =
      "Date of birth is required.";
  } else if (!isValidDate(data.birthday)) {
    errors.birthday =
      "Enter a valid date of birth.";
  } else if (isFutureDate(data.birthday)) {
    errors.birthday =
      "Date of birth cannot be in the future.";
  }

  /* -----------------------------------------------
     Age
  ------------------------------------------------ */

  if (!data.age.trim()) {
    errors.age =
      "Age could not be calculated from the date of birth.";
  }

  /* -----------------------------------------------
     Current Position
  ------------------------------------------------ */

//   errors.currentPosition = required(
//     data.currentPosition,
//     "Current position"
//   );

  /* -----------------------------------------------
     Workplace
  ------------------------------------------------ */

//   errors.workPlace = required(
//     data.workPlace,
//     "Work place"
//   );

  return removeEmptyErrors(errors);
}

/* =========================================================
   MSO EXAM DETAILS
========================================================= */

export function validateMSOExamDetails(
  data: MSOExamDetails
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     Examination Number
  ------------------------------------------------ */

  errors.msoExamNumber = required(
    data.msoExamNumber,
    "MSO examination number"
  );

  /* -----------------------------------------------
     Marks
  ------------------------------------------------ */

  if (!data.msoMarks.trim()) {
    errors.msoMarks =
      "MSO marks are required.";
  } else {
    const marks = Number(data.msoMarks);

    if (
      !Number.isFinite(marks) ||
      marks < 0 ||
      marks > 200
    ) {
      errors.msoMarks =
        "MSO marks must be between 0 and 200.";
    }
  }

  /* -----------------------------------------------
     Rank
  ------------------------------------------------ */

  if (!data.msoRank.trim()) {
    errors.msoRank =
      "MSO rank is required.";
  } else if (!/^\d+$/.test(data.msoRank.trim())) {
    errors.msoRank =
      "MSO rank must be a whole number.";
  } else if (Number(data.msoRank) <= 0) {
    errors.msoRank =
      "MSO rank must be greater than 0.";
  }

  /* -----------------------------------------------
     Medium
  ------------------------------------------------ */

  errors.msoMedium = required(
    data.msoMedium,
    "Examination medium"
  );

  /* -----------------------------------------------
     District
  ------------------------------------------------ */

  errors.examDistrict = required(
    data.examDistrict,
    "Selected district"
  );

  /* -----------------------------------------------
     District Qualification
  ------------------------------------------------ */

  errors.selectedDistrictQualification =
    required(
      data.selectedDistrictQualification,
      "District qualification"
    );

  return removeEmptyErrors(errors);
}

/* =========================================================
   O/L DETAILS
========================================================= */

export function validateOLevelDetails(
  data: OLevelDetails
): FormErrors {

  const errors: FormErrors = {};


  /* -----------------------------------------------
     O/L Year
  ------------------------------------------------ */

  if (!data.olYear.trim()) {

    errors.olYear =
      "O/L year is required.";

  } else if (!isValidYear(data.olYear)) {

    errors.olYear =
      "Enter a valid 4-digit O/L year.";

  }


  /* -----------------------------------------------
     O/L Index
  ------------------------------------------------ */

  errors.olIndex = required(
    data.olIndex,
    "O/L index number"
  );


  /* -----------------------------------------------
     REQUIRED SUBJECTS
  ------------------------------------------------ */

  const requiredResultFields: {
    field: "maths" | "language";
    label: string;
  }[] = [

    {
      field: "maths",
      label: "Mathematics",
    },

    {
      field: "language",
      label: "Language",
    },

  ];


  requiredResultFields.forEach(
    ({ field, label }) => {

      const value = data[field].trim();


      if (!value) {

        errors[field] =
          `${label} result is required.`;

        return;
      }


      /*
       * Expected format:
       *
       * Mathematics-A
       * Sinhala-A
       * Tamil-B
       * English-C
       *
       * The final grade must be:
       * A, B, C, S or F
       */

      const subjectResultPattern =
        /^.+\s*-\s*[ABCSF]$/i;


      if (!subjectResultPattern.test(value)) {

        errors[field] =
          `${label} must be entered as Subject-Result. Example: ${label}-A`;

      }

    }
  );


  /* -----------------------------------------------
     OPTIONAL O/L SUBJECTS
  ------------------------------------------------ */

  const optionalResultFields: {
    field:
      | "sub3"
      | "sub4"
      | "sub5"
      | "sub6"
      | "sub7"
      | "sub8"
      | "sub9";

    label: string;

  }[] = [

    {
      field: "sub3",
      label: "O/L subject 3",
    },

    {
      field: "sub4",
      label: "O/L subject 4",
    },

    {
      field: "sub5",
      label: "O/L subject 5",
    },

    {
      field: "sub6",
      label: "O/L subject 6",
    },

    {
      field: "sub7",
      label: "O/L subject 7",
    },

    {
      field: "sub8",
      label: "O/L subject 8",
    },

    {
      field: "sub9",
      label: "O/L subject 9",
    },

  ];


  optionalResultFields.forEach(
    ({ field, label }) => {

      const value = data[field].trim();


      /*
       * Empty optional subjects are allowed.
       */

      if (!value) {
        return;
      }


      /*
       * If the applicant enters a subject,
       * it must contain the subject name
       * and result.
       *
       * Examples:
       *
       * History-A
       * Science-B
       * Commerce-C
       * ICT-S
       */

      const subjectResultPattern =
        /^.+\s*-\s*[ABCSF]$/i;


      if (!subjectResultPattern.test(value)) {

        errors[field] =
          `${label} must be entered as Subject-Result. Example: History-A`;

      }

    }
  );


  return removeEmptyErrors(errors);
}

/* =========================================================
   A/L DETAILS
========================================================= */

export function validateALevelDetails(
  data: ALevelDetails
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     A/L Year
  ------------------------------------------------ */

  if (!data.alYear.trim()) {
    errors.alYear =
      "A/L year is required.";
  } else if (!isValidYear(data.alYear)) {
    errors.alYear =
      "Enter a valid 4-digit A/L year.";
  }

  /* -----------------------------------------------
     A/L Index
  ------------------------------------------------ */

  errors.alIndex = required(
    data.alIndex,
    "A/L index number"
  );

  /* -----------------------------------------------
     Stream
  ------------------------------------------------ */

  errors.stream = required(
    data.stream,
    "A/L stream"
  );

  /* -----------------------------------------------
   A/L Results
------------------------------------------------ */

const alResultFields: {
  field: "alSub1" | "alSub2" | "alSub3";
  label: string;
}[] = [
  {
    field: "alSub1",
    label: "A/L subject 1",
  },
  {
    field: "alSub2",
    label: "A/L subject 2",
  },
  {
    field: "alSub3",
    label: "A/L subject 3",
  },
];


alResultFields.forEach(
  ({ field, label }) => {

    const value = data[field].trim();


    /* -------------------------------------------
       Required
    ------------------------------------------- */

    if (!value) {

      errors[field] =
        `${label} result is required.`;

      return;
    }


    /* -------------------------------------------
       Subject + Result validation
       
       Examples:
       Physics-A
       Chemistry-B
       Biology-C
       Combined Mathematics-S
    ------------------------------------------- */

    const subjectResultPattern =
      /^.+\s*-\s*[ABCSF]$/i;


    if (!subjectResultPattern.test(value)) {

      errors[field] =
        `${label} must be entered as Subject-Result. Example: Physics-A`;

    }

  }
);


/* -----------------------------------------------
   General English
------------------------------------------------ */

errors.generalEnglish = required(
  data.generalEnglish,
  "General English selection"
);


/* -----------------------------------------------
   General English Grade
------------------------------------------------ */

if (data.generalEnglish === "Yes") {

  if (!data.geGrade.trim()) {

    errors.geGrade =
      "General English grade is required.";

  } else if (!isValidGrade(data.geGrade)) {

    errors.geGrade =
      "General English grade must be A, B, C, or S.";

  } else if (
    data.geGrade.toUpperCase() === "F"
  ) {

    errors.geGrade =
      "General English grade must be A, B, C, or S.";

  }

}
  /* -----------------------------------------------
     Degree Qualification
  ------------------------------------------------ */

  errors.degreeQualification = required(
    data.degreeQualification,
    "Degree qualification"
  );

  /* -----------------------------------------------
     Degree details
  ------------------------------------------------ */

  if (data.degreeQualification === "Yes") {

    errors.degree = required(
      data.degree,
      "Degree"
    );

    errors.university = required(
      data.university,
      "University"
    );

    if (!data.degreeDate.trim()) {
      errors.degreeDate =
        "Degree date is required.";
    } else if (!isValidDate(data.degreeDate)) {
      errors.degreeDate =
        "Enter a valid degree date.";
    } else if (isFutureDate(data.degreeDate)) {
      errors.degreeDate =
        "Degree date cannot be in the future.";
    }
  }

  return removeEmptyErrors(errors);
}

/* =========================================================
   COMPLETE FORM VALIDATION
========================================================= */

export interface CompleteFormData {
  general: GeneralDetails;
  personal: PersonalDetails;
  msoExam: MSOExamDetails;
  ol: OLevelDetails;
  al: ALevelDetails;
  declarationAccepted: boolean;
}

export function validateForm(
  data: CompleteFormData
): FormErrors {

  const errors: FormErrors = {};
const generalErrors =
  validateGeneralDetails(
    data.general
  );

Object.entries(generalErrors).forEach(
  ([field, message]) => {
    errors[`general.${field}`] =
      message;
  }
);
  /* -----------------------------------------------
     Personal
  ------------------------------------------------ */

  const personalErrors =
    validatePersonalDetails(
      data.personal
    );

  Object.entries(personalErrors).forEach(
    ([field, message]) => {
      errors[`personal.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     MSO Exam
  ------------------------------------------------ */

  const examErrors =
    validateMSOExamDetails(
      data.msoExam
    );

  Object.entries(examErrors).forEach(
    ([field, message]) => {
      errors[`msoExam.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     O/L
  ------------------------------------------------ */

  const olErrors =
    validateOLevelDetails(
      data.ol
    );

  Object.entries(olErrors).forEach(
    ([field, message]) => {
      errors[`ol.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     A/L
  ------------------------------------------------ */

  const alErrors =
    validateALevelDetails(
      data.al
    );

  Object.entries(alErrors).forEach(
    ([field, message]) => {
      errors[`al.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     Declaration
  ------------------------------------------------ */

  if (!data.declarationAccepted) {
    errors.declaration =
      "You must accept the declaration before submitting the application.";
  }

  return errors;
}