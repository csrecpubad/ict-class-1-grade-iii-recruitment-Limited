import { useState } from "react";

import PersonalDetails from "./components/personal/PersonalDetails";
import MSOExamDetails from "./components/mso/MSOExamDetails";
import EducationQualifications from "./components/education/EducationQualifications";
import Declaration from "./components/declaration/Declaration";
import { submitApplication } from "./services/recruitmentApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GeneralDetails from "./components/general/GeneralDetails";
import {
  validateForm,
  type FormErrors,
} from "./utils/validation";

import type {
  GeneralDetails as GeneralDetailsType,
  PersonalDetails as PersonalDetailsType,
  MSOExamDetails as MSOExamDetailsType,
  OLevelDetails,
  ALevelDetails,
} from "./types/recruitment";

import Footer from "./components/fotter/Fotter";
import Header from "./components/header/Header";

function App() {
  /* =====================================================
     DECLARATION
  ===================================================== */

  const [declarationAccepted, setDeclarationAccepted] =
    useState(false);

  /* =====================================================
     VALIDATION ERRORS
  ===================================================== */

  const [errors, setErrors] = useState<FormErrors>({});

  const [generalDetails, setGeneralDetails] =
  useState<GeneralDetailsType>({
    callingNumber: "",
    email: "",
  });

  /* =====================================================
     PERSONAL DETAILS
  ===================================================== */

  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetailsType>({
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
     MSO EXAM DETAILS
  ===================================================== */

  const [msoExamDetails, setMsoExamDetails] =
    useState<MSOExamDetailsType>({
      msoExamNumber: "",
      msoMarks: "",
      msoRank: "",
      msoMedium: "",
      examDistrict: "",
      selectedDistrictQualification: "",
    });

  /* =====================================================
     O/L DETAILS
  ===================================================== */

  const [olData, setOlData] =
    useState<OLevelDetails>({
      olYear: "",
      olIndex: "",
      maths: "",
      language: "",
      sub3: "",
      sub4: "",
      sub5: "",
      sub6: "",
      sub7: "",
      sub8: "",
      sub9: "",
    });

  /* =====================================================
     A/L DETAILS
  ===================================================== */

  const [alData, setAlData] =
    useState<ALevelDetails>({
      alYear: "",
      alIndex: "",
      stream: "",

      alSub1: "",
      alSub2: "",
      alSub3: "",

      generalEnglish: "",
      geGrade: "",

      degreeQualification: "",
      degree: "",
      university: "",
      degreeDate: "",

      otherQualification: "",
    });


    const handleGeneralChange = (
  field: keyof GeneralDetailsType,
  value: string
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
    value: string
  ) => {
    setPersonalDetails((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove error for this field after user changes it
    setErrors((previous) => {
      const updated = { ...previous };

      delete updated[`personal.${field}`];

      return updated;
    });
  };

  /* =====================================================
     MSO EXAM CHANGE
  ===================================================== */

  const handleMSOExamChange = (
    field: keyof MSOExamDetailsType,
    value: string
  ) => {
    setMsoExamDetails((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove error for this field after user changes it
    setErrors((previous) => {
      const updated = { ...previous };

      delete updated[`msoExam.${field}`];

      return updated;
    });
  };

  /* =====================================================
     O/L CHANGE
  ===================================================== */

  const handleOLChange = (
    field: keyof OLevelDetails,
    value: string
  ) => {
    setOlData((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove error for this field after user changes it
    setErrors((previous) => {
      const updated = { ...previous };

      delete updated[`ol.${field}`];

      return updated;
    });
  };

  /* =====================================================
     A/L CHANGE
  ===================================================== */

  const handleALChange = (
    field: keyof ALevelDetails,
    value: string
  ) => {
    setAlData((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove error for this field after user changes it
    setErrors((previous) => {
      const updated = { ...previous };

      delete updated[`al.${field}`];

      return updated;
    });
  };

  /* =====================================================
     DECLARATION CHANGE
  ===================================================== */

  const handleDeclarationChange = (
    accepted: boolean
  ) => {
    setDeclarationAccepted(accepted);

    // Remove declaration error when accepted
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

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validateForm({
      general: generalDetails,
      personal: personalDetails,

      msoExam: msoExamDetails,

      ol: olData,

      al: alData,

      declarationAccepted,
    });

    setErrors(validationErrors);

    /* -----------------------------------------------
       FORM HAS ERRORS
    ------------------------------------------------ */

    if (Object.keys(validationErrors).length > 0) {
      toast.error(
        "Please check the highlighted fields and complete the form."
      );

      // Scroll to first error
      const firstErrorKey =
        Object.keys(validationErrors)[0];

      const sectionKey =
        firstErrorKey.split(".")[0];

      const element =
        document.querySelector(
          `[data-section="${sectionKey}"]`
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }
const submissionData: Record<string, string> = {
  callingNumber: generalDetails.callingNumber,
  email: generalDetails.email,

  nameSinhala: personalDetails.nameSinhala,
  nameEnglish: personalDetails.nameEnglish,
  prefix: personalDetails.prefix,
  fullNameSinhala: personalDetails.fullNameSinhala,
  fullNameEnglish: personalDetails.fullNameEnglish,
  nic: personalDetails.nic,
  gender: personalDetails.gender,
  civilStatus: personalDetails.civilStatus,
  permanentAddress: personalDetails.permanentAddress,
  appointmentAddress: personalDetails.appointmentAddress,
  residentialDistrict: personalDetails.residentialDistrict,
  mobile: personalDetails.mobile,
  whatsapp: personalDetails.whatsapp,
  birthday: personalDetails.birthday,
  age: personalDetails.age,
  currentPosition: personalDetails.currentPosition,
  workPlace: personalDetails.workPlace,

  msoExamNumber: msoExamDetails.msoExamNumber,
  msoMarks: msoExamDetails.msoMarks,
  msoRank: msoExamDetails.msoRank,
  msoMedium: msoExamDetails.msoMedium,
  examDistrict: msoExamDetails.examDistrict,
  selectedDistrictQualification:
    msoExamDetails.selectedDistrictQualification,

  olYear: olData.olYear,
  olIndex: olData.olIndex,
  maths: olData.maths,
  language: olData.language,
  sub3: olData.sub3,
  sub4: olData.sub4,
  sub5: olData.sub5,
  sub6: olData.sub6,
  sub7: olData.sub7,
  sub8: olData.sub8,
  sub9: olData.sub9,

  alYear: alData.alYear,
  alIndex: alData.alIndex,
  stream: alData.stream,
  alSub1: alData.alSub1,
  alSub2: alData.alSub2,
  alSub3: alData.alSub3,
  generalEnglish: alData.generalEnglish,
  geGrade: alData.geGrade,
  degreeQualification:
    alData.degreeQualification,
  degree: alData.degree,
  university: alData.university,
  degreeDate: alData.degreeDate,
  otherQualification:
    alData.otherQualification,

  declarationAccepted:
    declarationAccepted ? "Yes" : "No",
};

toast.info("Submitting your application...");

const result =
  await submitApplication(
    submissionData
  );

  if (result.success) {
  toast.success(
    "Application submitted successfully!"
  );
} else {
  toast.error(
    result.message ||
      "Application submission failed."
  );
}
    /* -----------------------------------------------
       FORM IS VALID
    ------------------------------------------------ */
    console.log("VALID FORM", {
      personal: personalDetails,
      msoExam: msoExamDetails,
      ol: olData,
      al: alData,
      declarationAccepted,
    });

    /*
      Google Sheets submission will be added here
      after React validation is completely tested.
    */
  };

  /* =====================================================
     ERROR GROUPS
  ===================================================== */
const generalErrors = Object.fromEntries(
  Object.entries(errors)
    .filter(([key]) =>
      key.startsWith("general.")
    )
    .map(([key, message]) => [
      key.replace("general.", ""),
      message,
    ])
);
  const personalErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) =>
        key.startsWith("personal.")
      )
      .map(([key, message]) => [
        key.replace("personal.", ""),
        message,
      ])
  );

  const msoExamErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) =>
        key.startsWith("msoExam.")
      )
      .map(([key, message]) => [
        key.replace("msoExam.", ""),
        message,
      ])
  );

  const olErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) =>
        key.startsWith("ol.")
      )
      .map(([key, message]) => [
        key.replace("ol.", ""),
        message,
      ])
  );

  const alErrors = Object.fromEntries(
    Object.entries(errors)
      .filter(([key]) =>
        key.startsWith("al.")
      )
      .map(([key, message]) => [
        key.replace("al.", ""),
        message,
      ])
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
              MSO EXAM DETAILS
          ========================================== */}

          <div data-section="msoExam">
            <MSOExamDetails
              data={msoExamDetails}
              onChange={handleMSOExamChange}
              errors={msoExamErrors}
            />
          </div>

          {/* =========================================
              EDUCATION
          ========================================== */}

          <div data-section="education">

            <EducationQualifications
              olData={olData}
              alData={alData}
              onOLChange={handleOLChange}
              onALChange={handleALChange}
              olErrors={olErrors}
              alErrors={alErrors}
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

            <button
              type="submit"
              className="btn"
            >
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