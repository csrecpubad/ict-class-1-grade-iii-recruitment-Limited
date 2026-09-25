import type {
  GeneralDetails,
  PersonalDetails,
} from "../types/recruitment";

import type {
  EmploymentDetails,
  EducationQualifications,
} from "../types/ict";

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

function removeEmptyErrors(
  errors: FormErrors
): FormErrors {
  return Object.fromEntries(
    Object.entries(errors).filter(
      ([, message]) => Boolean(message)
    )
  );
}

/* =========================================================
   GENERAL DETAILS
========================================================= */

export function validateGeneralDetails(
  data: GeneralDetails
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     Interview Calling Number
  ------------------------------------------------ */

  errors.callingNumber = required(
    data.callingNumber,
    "Interview calling number"
  );

  /* -----------------------------------------------
     Email
  ------------------------------------------------ */

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
     Name with initials
  ------------------------------------------------ */

  errors.nameSinhala = required(
    data.nameSinhala,
    "Name with initials"
  );

  errors.nameEnglish = required(
    data.nameEnglish,
    "Name with initials in English"
  );

  /* -----------------------------------------------
     Prefix
  ------------------------------------------------ */

  errors.prefix = required(
    data.prefix,
    "Prefix"
  );

  /* -----------------------------------------------
     Full name
  ------------------------------------------------ */

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
     Permanent Address
  ------------------------------------------------ */

  errors.permanentAddress = required(
    data.permanentAddress,
    "Permanent address"
  );

  /* -----------------------------------------------
     Appointment Address
  ------------------------------------------------ */

  errors.appointmentAddress = required(
    data.appointmentAddress,
    "Appointment letter mailing address"
  );

  /* -----------------------------------------------
     Residential District
  ------------------------------------------------ */

  errors.residentialDistrict = required(
    data.residentialDistrict,
    "Residential district"
  );

  /* -----------------------------------------------
     Mobile
  ------------------------------------------------ */

  if (!data.mobile.trim()) {
    errors.mobile =
      "Mobile number is required.";
  } else if (
    !/^07\d{8}$/.test(
      data.mobile.trim()
    )
  ) {
    errors.mobile =
      "Enter a valid mobile number. Example: 0712345678";
  }

  /* -----------------------------------------------
     WhatsApp
  ------------------------------------------------ */

  if (data.whatsapp.trim()) {
    if (
      !/^07\d{8}$/.test(
        data.whatsapp.trim()
      )
    ) {
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
  } else if (
    !isValidDate(data.birthday)
  ) {
    errors.birthday =
      "Enter a valid date of birth.";
  } else if (
    isFutureDate(data.birthday)
  ) {
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

  /*
   * Current position and workplace are intentionally
   * not validated here because ICT employment details
   * are handled separately.
   */

  return removeEmptyErrors(errors);
}

/* =========================================================
   EMPLOYMENT DETAILS
========================================================= */

export function validateEmploymentDetails(
  data: EmploymentDetails
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     Public Sector Employment
  ------------------------------------------------ */

  errors.isPublicSectorEmployee =
    required(
      data.isPublicSectorEmployee,
      "Public sector employment status"
    );

  /* -----------------------------------------------
     Service Particulars
     
     Required only if the applicant is employed
     in the public sector.
  ------------------------------------------------ */

  if (
    data.isPublicSectorEmployee ===
    "Yes"
  ) {
    errors.serviceParticulars =
      required(
        data.serviceParticulars,
        "Service particulars"
      );
  }

  /* -----------------------------------------------
     Work Place
  ------------------------------------------------ */

  errors.workplace = required(
    data.workplace,
    "Work place"
  );

  return removeEmptyErrors(errors);
}

/* =========================================================
   EDUCATION QUALIFICATIONS
========================================================= */

export function validateEducationQualifications(
  data: EducationQualifications
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     Education Qualification
     
     The document specifies:
     Full BSc. in ICT (3 years)
  ------------------------------------------------ */

  errors.qualification =
    required(
      data.qualification,
      "Education qualification"
    );

  /* -----------------------------------------------
     GCE A/L
  ------------------------------------------------ */

  errors.alPassed =
    required(
      data.alPassed,
      "GCE A/L result"
    );

  /* -----------------------------------------------
     A/L Stream
     
     Required when GCE A/L is passed.
  ------------------------------------------------ */

  if (
    data.alPassed === "Passed"
  ) {
    errors.alStream =
      required(
        data.alStream,
        "A/L stream"
      );
  }

  /* -----------------------------------------------
     Specialized Fields
  ------------------------------------------------ */

  data.specializedFields.forEach(
    (field, index) => {

      if (
        field.rating === null
      ) {
        errors[
          `specializedFields.${index}`
        ] =
          `${field.field} rating is required.`;
      }

    }
  );

  /* -----------------------------------------------
     Professional Memberships
  ------------------------------------------------ */

  errors.professionalMemberships =
    required(
      data.professionalMemberships,
      "Professional memberships"
    );

  /* -----------------------------------------------
     Professional Qualifications
  ------------------------------------------------ */

  errors.professionalQualifications =
    required(
      data.professionalQualifications,
      "Professional qualifications"
    );

  /* -----------------------------------------------
     Professional Qualifications - Other
  ------------------------------------------------ */

  /*
   * This field is optional because it is only
   * applicable when the applicant has another
   * professional qualification.
   */

  /* -----------------------------------------------
     Technology Skills
  ------------------------------------------------ */

  errors.technologySkills =
    required(
      data.technologySkills,
      "Programming languages, frameworks and related technologies"
    );

  /* -----------------------------------------------
     Research Paper
  ------------------------------------------------ */

  /*
   * Research papers are not made mandatory here.
   * The document asks for these details, but it
   * does not indicate that every applicant must
   * have a published research paper.
   */

  if (
    data.researchPaper.topic.trim()
  ) {

    if (
      !data.researchPaper.year.trim()
    ) {
      errors[
        "researchPaper.year"
      ] =
        "Research paper year is required.";
    }

    if (
      !data.researchPaper.type
    ) {
      errors[
        "researchPaper.type"
      ] =
        "Select Local or International.";
    }

    if (
      !data.researchPaper
        .instituteOrMagazine
        .trim()
    ) {
      errors[
        "researchPaper.instituteOrMagazine"
      ] =
        "Institute / Magazine is required.";
    }
  }

  /* -----------------------------------------------
     Awards
  ------------------------------------------------ */

  /*
   * Awards are optional.
   */
  return removeEmptyErrors(errors);
}

/* =========================================================
   COMPLETE FORM DATA
========================================================= */

export interface CompleteFormData {
  general: GeneralDetails;
  personal: PersonalDetails;
  employment: EmploymentDetails;
  education: EducationQualifications;
  declarationAccepted: boolean;
}

/* =========================================================
   COMPLETE FORM VALIDATION
========================================================= */

export function validateForm(
  data: CompleteFormData
): FormErrors {
  const errors: FormErrors = {};

  /* -----------------------------------------------
     General Details
  ------------------------------------------------ */

  const generalErrors =
    validateGeneralDetails(
      data.general
    );

  Object.entries(
    generalErrors
  ).forEach(
    ([field, message]) => {
      errors[`general.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     Personal Details
  ------------------------------------------------ */

  const personalErrors =
    validatePersonalDetails(
      data.personal
    );

  Object.entries(
    personalErrors
  ).forEach(
    ([field, message]) => {
      errors[`personal.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     Employment Details
  ------------------------------------------------ */

  const employmentErrors =
    validateEmploymentDetails(
      data.employment
    );

  Object.entries(
    employmentErrors
  ).forEach(
    ([field, message]) => {
      errors[`employment.${field}`] =
        message;
    }
  );

  /* -----------------------------------------------
     Education Qualifications
  ------------------------------------------------ */

  const educationErrors =
    validateEducationQualifications(
      data.education
    );

  Object.entries(
    educationErrors
  ).forEach(
    ([field, message]) => {
      errors[`education.${field}`] =
        message;
    }
  );
// const qualificationErrors =
//   validateICTQualificationDetails(
//     data.education
//   );

// Object.entries(
//   qualificationErrors
// ).forEach(
//   ([field, message]) => {
//     errors[`education.${field}`] =
//       message;
//   }
// );
  /* -----------------------------------------------
     Declaration
  ------------------------------------------------ */

  if (
    !data.declarationAccepted
  ) {
    errors.declaration =
      "You must accept the declaration before submitting the application.";
  }

  return errors;
}