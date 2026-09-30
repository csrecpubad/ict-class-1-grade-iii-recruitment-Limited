import { useState } from "react";

import PersonalDetails from "./components/personal/PersonalDetails";

import ICTEmploymentDetails from "./components/ict/ICTEmploymentDetails";
import ICTEducationQualifications from "./components/education/ICTEducationQualifications";

import Declaration from "./components/declaration/Declaration";
import { specializedFields } from "./constants/ictFields";
import { submitApplication } from "./services/recruitmentApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GeneralDetails from "./components/general/GeneralDetails";

import { validateForm, type FormErrors } from "./utils/validation";

import type {
  GeneralDetails as GeneralDetailsType,
  PersonalDetails as PersonalDetailsType,
} from "./types/recruitment";

import type { EmploymentDetails, EducationQualifications } from "./types/ict";

import Footer from "./components/fotter/Fotter";
import Header from "./components/header/Header";

function App() {
  /* =====================================================
     DECLARATION
  ===================================================== */

  const [declarationAccepted, setDeclarationAccepted] = useState(false);

  /* =====================================================
     VALIDATION ERRORS
  ===================================================== */

  const [errors, setErrors] = useState<FormErrors>({});

  /* =====================================================
     GENERAL DETAILS
  ===================================================== */

  const [generalDetails, setGeneralDetails] = useState<GeneralDetailsType>({
    callingNumber: "",
    email: "",
  });

  /* =====================================================
     PERSONAL DETAILS
  ===================================================== */

  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsType>({
    nameSinhala: "",
    nameEnglish: "",

    prefix: "",

    fullNameSinhala: "",
    fullNameEnglish: "",

    nic: "",

    gender: "",
    civilStatus: "",

    permanentAddress: "",
    appointmentAddress: "",

    residentialDistrict: "",

    mobile: "",
    whatsapp: "",

    birthday: "",
    age: "",

    currentPosition: "",
    workPlace: "",
  });

  /* =====================================================
     ICT EMPLOYMENT DETAILS
  ===================================================== */

const [employmentDetails, setEmploymentDetails] =
  useState<EmploymentDetails>({
    currentPosition: "",
    workplace: "",
  });

  /* =====================================================
     ICT EDUCATION QUALIFICATIONS
  ===================================================== */

  const [educationQualifications, setEducationQualifications] =
    useState<EducationQualifications>({
      alPassed: "",
      alStream: "",
      alSub1: "",
      alSub2: "",
      alSub3: "",
      qualification: "",
      university: "",
      specialization: "",
      degreeEffectiveDate: "",
      postGraduateQualification: "",
      postGraduateUniversity: "",
      postGraduateSpecialization: "",
      postGraduateEffectiveDate: "",
      specializedFields: specializedFields.map((field) => ({
        field,
        academicCompleted: "",
        experienceRating: null,
      })),

      professionalMemberships: "",

      professionalQualifications: "",

      professionalQualificationsOther: "",

      technologySkills: "",

      researchPaper: {
        topic: "",
        year: "",
        type: "",
        instituteOrMagazine: "",
      },

      awards: "",
    });

  /* =====================================================
     GENERAL DETAILS CHANGE
  ===================================================== */

  const handleGeneralChange = (
    field: keyof GeneralDetailsType,
    value: string,
  ) => {
    setGeneralDetails((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => {
      const updated = { ...previous };

      delete updated[`general.${field}`];

      return updated;
    });
  };

  /* =====================================================
     PERSONAL DETAILS CHANGE
  ===================================================== */

  const handlePersonalChange = (
    field: keyof PersonalDetailsType,
    value: string,
  ) => {
    setPersonalDetails((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => {
      const updated = { ...previous };

      delete updated[`personal.${field}`];

      return updated;
    });
  };

  /* =====================================================
     DECLARATION CHANGE
  ===================================================== */

  const handleDeclarationChange = (accepted: boolean) => {
    setDeclarationAccepted(accepted);

    if (accepted) {
      setErrors((previous) => {
        const updated = { ...previous };

        delete updated.declaration;

        return updated;
      });
    }
  };

  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm({
      general: generalDetails,
      personal: personalDetails,
      employment: employmentDetails,
      education: educationQualifications,
      declarationAccepted,
    });

    setErrors(validationErrors);

    /* -----------------------------------------------
       FORM HAS ERRORS
    ------------------------------------------------ */

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please check the highlighted fields and complete the form.");

      const firstErrorKey = Object.keys(validationErrors)[0];

      const sectionKey = firstErrorKey.split(".")[0];

      const element = document.querySelector(`[data-section="${sectionKey}"]`);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /* -----------------------------------------------
       FORM IS VALID
    ------------------------------------------------ */

    const submissionData: Record<string, string> = {
  // =========================
  // GENERAL INFORMATION
  // =========================

  callingNumber:
    generalDetails.callingNumber,

  email:
    generalDetails.email,

  // =========================
  // PERSONAL INFORMATION
  // =========================

  nameEnglish:
    personalDetails.nameEnglish,

  nameSinhala:
    personalDetails.nameSinhala,

  prefix:
    personalDetails.prefix,

  fullNameEnglish:
    personalDetails.fullNameEnglish,

  fullNameSinhala:
    personalDetails.fullNameSinhala,

  nic:
    personalDetails.nic,

  gender:
    personalDetails.gender,

  civilStatus:
    personalDetails.civilStatus,

  permanentAddress:
    personalDetails.permanentAddress,

  appointmentAddress:
    personalDetails.appointmentAddress,

  residentialDistrict:
    personalDetails.residentialDistrict,

  mobile:
    personalDetails.mobile,

  whatsapp:
    personalDetails.whatsapp,

  birthday:
    personalDetails.birthday,

  age:
    personalDetails.age,

  // =========================
  // EMPLOYMENT INFORMATION
  // =========================

  workplace:
    employmentDetails.workplace,

  currentPosition:
    employmentDetails.currentPosition,

  // =========================
  // GCE A/L
  // =========================

  alPassed:
    educationQualifications.alPassed,

  alStream:
    educationQualifications.alStream,

  alSub1:
    educationQualifications.alSub1,

  alSub2:
    educationQualifications.alSub2,

  alSub3:
    educationQualifications.alSub3,

  // =========================
  // DEGREE / MAIN QUALIFICATION
  // =========================

  educationQualification:
    educationQualifications.qualification,

  university:
    educationQualifications.university,

  specialization:
    educationQualifications.specialization,

  degreeEffectiveDate:
    educationQualifications.degreeEffectiveDate,

  // =========================
  // POSTGRADUATE
  // =========================

  postGraduateQualification:
    educationQualifications.postGraduateQualification,

  postGraduateUniversity:
    educationQualifications.postGraduateUniversity,

  postGraduateSpecialization:
    educationQualifications.postGraduateSpecialization,

  postGraduateEffectiveDate:
    educationQualifications.postGraduateEffectiveDate,

  // =========================
  // PROFESSIONAL INFORMATION
  // =========================

  professionalMemberships:
    educationQualifications.professionalMemberships,

  professionalQualifications:
    educationQualifications.professionalQualifications,

  professionalQualificationsOther:
    educationQualifications.professionalQualificationsOther,

  technologySkills:
    educationQualifications.technologySkills,

  // =========================
  // RESEARCH PAPER
  // =========================

  researchPaperTopic:
    educationQualifications.researchPaper.topic,

  researchPaperYear:
    educationQualifications.researchPaper.year,

  researchPaperType:
    educationQualifications.researchPaper.type,

  researchPaperInstitute:
    educationQualifications.researchPaper.instituteOrMagazine,

  // =========================
  // AWARDS
  // =========================

  awards:
    educationQualifications.awards,

  // =========================
  // DECLARATION
  // =========================

  declarationAccepted:
    declarationAccepted ? "Yes" : "No",
};

// =========================
// SPECIALIZED ICT FIELDS
// =========================

educationQualifications.specializedFields.forEach(
  (field) => {
    submissionData[
      `${field.field} - Academic`
    ] = field.academicCompleted;

    submissionData[
      `${field.field} - Experience Rating`
    ] =
      field.experienceRating !== null
        ? field.experienceRating.toString()
        : "";
  }
);

    console.log(
  "FINAL SUBMISSION DATA",
  submissionData
);

    toast.info("Submitting your application...");

    const result = await submitApplication(submissionData);

    if (result.success) {
      toast.success("Application submitted successfully!");
    } else {
      toast.error(result.message || "Application submission failed.");
    }
  };

  /* =====================================================
     ERROR GROUPS
  ===================================================== */

  const generalErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) => key.startsWith("general."))
      .map(([key, message]) => [key.replace("general.", ""), message]),
  );

  const personalErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) => key.startsWith("personal."))
      .map(([key, message]) => [key.replace("personal.", ""), message]),
  );

  const educationErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) => key.startsWith("education."))
      .map(([key, message]) => [key.replace("education.", ""), message]),
  );

  const employmentErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) => key.startsWith("employment."))
      .map(([key, message]) => [key.replace("employment.", ""), message]),
  );


  /* =====================================================
     UI
  ===================================================== */

  return (
    <div>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />

        <Header />

        <form onSubmit={handleSubmit}>
          {/* =========================================
              GENERAL DETAILS
          ========================================== */}

          <div data-section="general">
            <GeneralDetails
              data={generalDetails}
              onChange={handleGeneralChange}
              errors={generalErrors}
            />
          </div>

          {/* =========================================
              PERSONAL DETAILS
          ========================================== */}

          <div data-section="personal">
            <PersonalDetails
              data={personalDetails}
              onChange={handlePersonalChange}
              errors={personalErrors}
            />
          </div>

          {/* =========================================
              ICT EMPLOYMENT DETAILS
          ========================================== */}

          <div data-section="employment">
            <ICTEmploymentDetails
              value={employmentDetails}
              onChange={setEmploymentDetails}
              errors={employmentErrors}
            />
          </div>

          {/* =========================================
              ICT EDUCATION QUALIFICATIONS
          ========================================== */}

          <div data-section="education">
            <ICTEducationQualifications
              value={educationQualifications}
              onChange={setEducationQualifications}
              errors={educationErrors}
            />
          </div>

          {/* =========================================
              DECLARATION
          ========================================== */}

          <div data-section="declaration">
            <Declaration
              accepted={declarationAccepted}
              onChange={handleDeclarationChange}
              error={errors.declaration}
            />
          </div>

          {/* =========================================
              SUBMIT
          ========================================== */}

          <div className="submit-area">
            <button type="submit" className="btn">
              Submit Application
            </button>
          </div>
        </form>

        {/* =========================================
            FOOTER
        ========================================== */}

        <Footer />
      </main>
    </div>
  );
}

export default App;
