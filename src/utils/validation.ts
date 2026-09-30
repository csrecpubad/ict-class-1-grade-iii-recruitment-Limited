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

  
  errors.currentPosition = required(
    data.currentPosition,
    "Current service related position"
  );
  
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

  /* =======================================================
     GCE A/L
  ======================================================= */

  errors.alPassed = required(
    data.alPassed,
    "GCE A/L result"
  );

  /* -----------------------------------------------
     A/L Stream

     Required when GCE A/L is passed.
  ------------------------------------------------ */

  if (data.alPassed === "Passed") {
    errors.alStream = required(
      data.alStream,
      "A/L stream"
    );

    /* -----------------------------------------------
       A/L Subject 01
    ------------------------------------------------ */

    errors.alSub1 = required(
      data.alSub1,
      "A/L Subject 01"
    );

    /* -----------------------------------------------
       A/L Subject 02
    ------------------------------------------------ */

    errors.alSub2 = required(
      data.alSub2,
      "A/L Subject 02"
    );

    /* -----------------------------------------------
       A/L Subject 03
    ------------------------------------------------ */

    errors.alSub3 = required(
      data.alSub3,
      "A/L Subject 03"
    );
  }

  /* =======================================================
     DEGREE / MAIN QUALIFICATION
  ======================================================= */

  errors.qualification =
    required(
      data.qualification,
      "Education qualification"
    );

  /* -----------------------------------------------
     University / Institute
  ------------------------------------------------ */

  errors.university =
    required(
      data.university,
      "University / Institute / College"
    );

  /* -----------------------------------------------
     Specialization / Major
  ------------------------------------------------ */

  errors.specialization =
    required(
      data.specialization,
      "Specialization / Major"
    );

  /* -----------------------------------------------
     Degree Effective Date
  ------------------------------------------------ */

  if (!data.degreeEffectiveDate.trim()) {
    errors.degreeEffectiveDate =
      "Degree effective date is required.";
  } else if (
    !isValidDate(
      data.degreeEffectiveDate
    )
  ) {
    errors.degreeEffectiveDate =
      "Enter a valid degree effective date.";
  } else if (
    isFutureDate(
      data.degreeEffectiveDate
    )
  ) {
    errors.degreeEffectiveDate =
      "Degree effective date cannot be in the future.";
  }

  /* =======================================================
     POSTGRADUATE QUALIFICATION
     
     All postgraduate fields are optional because
     not every applicant will have a postgraduate
     qualification.
  ======================================================= */

  const hasPostGraduateQualification =
    data.postGraduateQualification.trim() !== "";

  if (hasPostGraduateQualification) {

    /* -----------------------------------------------
       Postgraduate University
    ------------------------------------------------ */

    errors.postGraduateUniversity =
      required(
        data.postGraduateUniversity,
        "Postgraduate university / institute / college"
      );

    /* -----------------------------------------------
       Postgraduate Specialization
    ------------------------------------------------ */

    errors.postGraduateSpecialization =
      required(
        data.postGraduateSpecialization,
        "Postgraduate specialization / major"
      );

    /* -----------------------------------------------
       Postgraduate Effective Date
    ------------------------------------------------ */

    if (
      !data.postGraduateEffectiveDate.trim()
    ) {
      errors.postGraduateEffectiveDate =
        "Postgraduate qualification effective date is required.";
    } else if (
      !isValidDate(
        data.postGraduateEffectiveDate
      )
    ) {
      errors.postGraduateEffectiveDate =
        "Enter a valid postgraduate qualification effective date.";
    } else if (
      isFutureDate(
        data.postGraduateEffectiveDate
      )
    ) {
      errors.postGraduateEffectiveDate =
        "Postgraduate qualification effective date cannot be in the future.";
    }
  }

  /* =======================================================
     ICT SPECIALIZED FIELDS
  ======================================================= */

  data.specializedFields.forEach(
    (field, index) => {

      /* -----------------------------------------------
         Academic Qualification
      ------------------------------------------------ */

      if (
        !field.academicCompleted
      ) {
        errors[
          `specializedFields.${index}.academic`
        ] =
          `${field.field}: Please select Yes or No for academic completion.`;
      }

      /* -----------------------------------------------
         Professional Experience Rating
         
         Rating must be from 1 to 5.
      ------------------------------------------------ */

      if (
        field.experienceRating === null ||
        field.experienceRating === undefined
      ) {
        errors[
          `specializedFields.${index}.experience`
        ] =
          `${field.field}: Please select a professional experience rating.`;
      } else if (
        field.experienceRating < 1 ||
        field.experienceRating > 5
      ) {
        errors[
          `specializedFields.${index}.experience`
        ] =
          `${field.field}: Professional experience rating must be between 1 and 5.`;
      }
    }
  );

  /* =======================================================
     PROFESSIONAL MEMBERSHIPS
  ======================================================= */

  errors.professionalMemberships =
    required(
      data.professionalMemberships,
      "Professional memberships"
    );

  /* =======================================================
     PROFESSIONAL QUALIFICATIONS
  ======================================================= */

  errors.professionalQualifications =
    required(
      data.professionalQualifications,
      "Professional qualifications"
    );

  /* =======================================================
     PROFESSIONAL QUALIFICATIONS - OTHER
     
     Optional.
  ======================================================= */

  /*
   * professionalQualificationsOther is optional.
   *
   * It is only used when the applicant has another
   * professional qualification that is not covered
   * by the main professional qualification field.
   */

  /* =======================================================
     TECHNOLOGY SKILLS
  ======================================================= */

  errors.technologySkills =
    required(
      data.technologySkills,
      "Programming languages, frameworks and related technologies"
    );

  /* =======================================================
     RESEARCH PAPER
     
     Research paper information is optional.
     
     If Topic is entered, the remaining research
     information becomes required.
  ======================================================= */

  if (
    data.researchPaper.topic.trim()
  ) {

    /* -----------------------------------------------
       Year
    ------------------------------------------------ */

    if (
      !data.researchPaper.year.trim()
    ) {
      errors[
        "researchPaper.year"
      ] =
        "Research paper year is required.";
    } else if (
      !/^\d{4}$/.test(
        data.researchPaper.year.trim()
      )
    ) {
      errors[
        "researchPaper.year"
      ] =
        "Enter a valid four-digit research paper year.";
    }

    /* -----------------------------------------------
       Local / International
    ------------------------------------------------ */

    if (
      !data.researchPaper.type
    ) {
      errors[
        "researchPaper.type"
      ] =
        "Select Local or International.";
    }

    /* -----------------------------------------------
       Institute / Magazine
    ------------------------------------------------ */

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

  /* =======================================================
     AWARDS
     
     Optional.
  ======================================================= */

  /*
   * Awards are optional, so no validation is required.
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