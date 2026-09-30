import type {
  EducationQualifications,
  SpecializedField,
} from "../../types/ict";

import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import SectionCard from "../common/SectionCard";
import { specializedFieldExamples } from "../../constants/ictFields";

// import {
//   specializedFields,
// } from "../../constants/ictFields";

interface ICTEducationQualificationsProps {
  value: EducationQualifications;
  onChange: (value: EducationQualifications) => void;

  errors?: Record<string, string>;
}

export default function ICTEducationQualifications({
  value,
  onChange,
  errors = {},
}: ICTEducationQualificationsProps) {
  /* =====================================================
     GENERAL UPDATE
  ===================================================== */

  const updateField = <K extends keyof EducationQualifications>(
    field: K,
    fieldValue: EducationQualifications[K],
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  /* =====================================================
     SPECIALIZED FIELD RATING
  ===================================================== */

  const updateAcademicStatus = (index: number, status: "Yes" | "No") => {
    const updatedFields = [...value.specializedFields];

    updatedFields[index] = {
      ...updatedFields[index],
      academicCompleted: status,
    };

    updateField("specializedFields", updatedFields);
  };

  const updateExperienceRating = (index: number, rating: number) => {
    const updatedFields = [...value.specializedFields];

    updatedFields[index] = {
      ...updatedFields[index],
      experienceRating: rating,
    };

    updateField("specializedFields", updatedFields);
  };

  return (
    <SectionCard
      title="Education & Professional Qualifications"
      number="04"
      description="Please enter your education and professional qualification information"
    >
      {/* =================================================
      EDUCATION QUALIFICATIONS
  ================================================= */}

      <h3 className="section-subtitle">Education Qualifications</h3>

      <div className="form-grid">
        <SelectField
          label="GCE A/L"
          name="alPassed"
          value={value.alPassed}
          onChange={(selected) =>
            updateField("alPassed", selected as "Passed" | "Not passed" | "")
          }
          options={[
            {
              value: "Passed",
              label: "Passed",
            },
            {
              value: "Not passed",
              label: "Not passed",
            },
          ]}
          placeholder="Select"
          required
          error={errors.alPassed}
        />

        <TextField
          label="A/L Stream"
          name="alStream"
          value={value.alStream}
          onChange={(text) => updateField("alStream", text)}
          placeholder="Enter A/L stream"
          required
          error={errors.alStream}
        />

        <TextField
          label="Subject 01"
          name="alSub1"
          value={value.alSub1}
          onChange={(value) => updateField("alSub1", value)}
          placeholder="Subject Name - Result"
          required
          error={errors.alsub1}
        />

        <TextField
          label="Subject 02"
          name="alSub2"
          value={value.alSub2}
          onChange={(value) => updateField("alSub2", value)}
          placeholder="Subject Name - Result"
          required
          error={errors.alSub2}
        />

        <TextField
          label="Subject 03"
          name="alSub3"
          value={value.alSub3}
          onChange={(value) => updateField("alSub3", value)}
          placeholder="Subject Name - Result"
          required
          error={errors.alSub3}
        />

        <TextField
          label="Title / Name of the Degree"
          name="qualification"
          value={value.qualification}
          onChange={(text) => updateField("qualification", text)}
          placeholder="Full BSc. in ICT (3 years)"
          required
          error={errors.qualification}
        />

        <TextField
          label="University / Institute / College"
          name="university"
          value={value.university}
          onChange={(text) => updateField("university", text)}
          placeholder="University Name"
          required
          error={errors.university}
        />

        <TextField
          label="Specialization / Major"
          name="specialization"
          value={value.specialization}
          onChange={(text) => updateField("specialization", text)}
          placeholder="Specialization Name"
          required
          error={errors.specialization}
        />

        <TextField
          label="Degree effective date"
          name="degreeEffectiveDate"
          value={value.degreeEffectiveDate}
          onChange={(text) => updateField("degreeEffectiveDate", text)}
          placeholder="YYYY-MM-DD"
          required
          error={errors.degreeEffectiveDate}
        />

        <TextField
          label="Name / Title of Post Graduate Diploma / Post Graduate Degree"
          name="postGraduateQualification"
          value={value.postGraduateQualification}
          onChange={(text) => updateField("postGraduateQualification", text)}
          placeholder="Enter Post Graduate Qualification"
          error={errors.postGraduateQualification}
        />

        <TextField
          label="Name of the University / Institute / College for Post Graduate Qualification"
          name="postGraduateUniversity"
          value={value.postGraduateUniversity}
          onChange={(text) => updateField("postGraduateUniversity", text)}
          placeholder="Enter University / Institute / College Name"
          error={errors.postGraduateUniversity}
        />

        <TextField
          label="Specialization / Major for Post Graduate Qualification"
          name="postGraduateSpecialization"
          value={value.postGraduateSpecialization}
          onChange={(text) => updateField("postGraduateSpecialization", text)}
          placeholder="Enter Specialization / Major"
          error={errors.postGraduateSpecialization}
        />

        <TextField
          label="Post Graduate Qualification effective date"
          name="postGraduateEffectiveDate"
          value={value.postGraduateEffectiveDate}
          onChange={(text) => updateField("postGraduateEffectiveDate", text)}
          placeholder="YYYY-MM-DD"
          error={errors.postGraduateEffectiveDate}
        />
      </div>
      <br />
      {/* =================================================
      SPECIALIZED FIELDS
  ================================================= */}

      {/* Academic ICT Fields */}
      <div className="mt-8">
        <h3 className="section-subtitle">
          ICT Specialized Fields - Academic Qualification
        </h3>

        <p className="field-example">
          Indicate whether you have academically completed studies or
          qualifications related to each ICT field.
        </p>

        <div className="specialized-fields-table">
          <div className="specialized-header academic-header">
            <div>ICT Specialized Field</div>
            <div>Academically Completed</div>
          </div>

          {value.specializedFields.map(
            (field: SpecializedField, index: number) => (
              <div className="specialized-row" key={field.field}>
                <div className="specialized-field-name">
                  <div className="specialized-field-title">
                    {index + 1}. {field.field}
                  </div>
                  <div className="specialized-field-example">
                    <em>{specializedFieldExamples[field.field].academic}</em>
                  </div>
                </div>

                <div className="academic-options">
                  <label className="rating-option">
                    <input
                      type="radio"
                      name={`academic-${index}`}
                      value="Yes"
                      checked={field.academicCompleted === "Yes"}
                      onChange={() => updateAcademicStatus(index, "Yes")}
                      required
                    />

                    <span>Yes</span>
                  </label>

                  <label className="rating-option">
                    <input
                      type="radio"
                      name={`academic-${index}`}
                      value="No"
                      checked={field.academicCompleted === "No"}
                      onChange={() => updateAcademicStatus(index, "No")}
                      required
                    />

                    <span>No</span>
                  </label>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <br />

      {/* Professional Experience */}
      <div className="mt-8">
        <h3 className="section-subtitle">
          ICT Specialized Fields - Professional Experience
        </h3>

        <p className="field-example">
          Rate your professional experience in each ICT field from 1 to 5.
        </p>

        <div className="specialized-fields-table">
          <div className="specialized-header">
            <div>ICT Specialized Field</div>
            <div>Professional Experience Rating</div>
          </div>

          {value.specializedFields.map(
            (field: SpecializedField, index: number) => (
              <div
                className="specialized-row"
                key={`experience-${field.field}`}
              >
                <div className="specialized-field-name">
                  <div className="specialized-field-title">
                    {index + 1}. {field.field}
                  </div>

                  <div className="specialized-field-example">
                    <em>
                      {specializedFieldExamples[field.field].professional}
                    </em>
                  </div>
                </div>

                <div className="specialized-rating">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="rating-option">
                      <input
                        type="radio"
                        name={`experience-${index}`}
                        value={rating}
                        checked={field.experienceRating === rating}
                        onChange={() => updateExperienceRating(index, rating)}
                        required
                      />

                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <br />
      {/* =================================================
      PROFESSIONAL MEMBERSHIPS
  ================================================= */}

      <div className="mt-8">
        <h3 className="section-subtitle">Professional Memberships</h3>

        <TextField
          label="Professional Memberships"
          name="professionalMemberships"
          value={value.professionalMemberships}
          onChange={(text) => updateField("professionalMemberships", text)}
          placeholder="Enter professional memberships"
          fullWidth
          required
          error={errors.professionalMemberships}
        />
      </div>

      <br />
      {/* =================================================
      PROFESSIONAL QUALIFICATIONS
  ================================================= */}

        <h3 className="section-subtitle">Professional Qualifications</h3>
      <div className="form-grid">
        <TextField
          label="Professional Qualifications"
          name="professionalQualifications"
          value={value.professionalQualifications}
          onChange={(text) => updateField("professionalQualifications", text)}
          placeholder="Enter professional qualifications"
          required
          error={errors.professionalQualifications}
        />

        <TextField
          label="If Other"
          name="professionalQualificationsOther"
          value={value.professionalQualificationsOther}
          onChange={(text) =>
            updateField("professionalQualificationsOther", text)
          }
          placeholder="If other, please specify"
        />
      </div>

      <br />
      {/* =================================================
      TECHNOLOGY SKILLS
  ================================================= */}

      <div className="mt-8">
        <h3 className="section-subtitle">
          Fluency in Programming Languages, Frameworks and related new
          Technologies
        </h3>

        <TextField
          label="Programming Languages / Frameworks / Technologies"
          name="technologySkills"
          value={value.technologySkills}
          onChange={(text) => updateField("technologySkills", text)}
          placeholder="Enter programming languages, frameworks and technologies"
          fullWidth
          required
          error={errors.technologySkills}
        />
      </div>

      <br />
      {/* =================================================
      RESEARCH PAPERS
  ================================================= */}

      <div className="mt-8">
        <h3 className="section-subtitle">Published Research Papers</h3>

        <div className="form-grid">
          <TextField
            label="Topic"
            name="researchTopic"
            value={value.researchPaper.topic}
            onChange={(text) =>
              updateField("researchPaper", {
                ...value.researchPaper,
                topic: text,
              })
            }
            placeholder="Enter research paper topic"
          />

          <TextField
            label="Year"
            name="researchYear"
            value={value.researchPaper.year}
            onChange={(text) =>
              updateField("researchPaper", {
                ...value.researchPaper,
                year: text,
              })
            }
            placeholder="Enter year"
            type="number"
          />

          <SelectField
            label="Local / International"
            name="researchType"
            value={value.researchPaper.type}
            onChange={(selected) =>
              updateField("researchPaper", {
                ...value.researchPaper,
                type: selected as "Local" | "International" | "",
              })
            }
            options={[
              {
                value: "Local",
                label: "Local",
              },
              {
                value: "International",
                label: "International",
              },
            ]}
            placeholder="Select"
          />

          <TextField
            label="Institute / Magazine"
            name="researchInstitute"
            value={value.researchPaper.instituteOrMagazine}
            onChange={(text) =>
              updateField("researchPaper", {
                ...value.researchPaper,
                instituteOrMagazine: text,
              })
            }
            placeholder="Enter institute or magazine"
          />
        </div>
      </div>

      <br />
      {/* =================================================
      AWARDS
  ================================================= */}

      <div className="mt-8">
        <h3 className="section-subtitle">Awards</h3>

        <TextField
          label="Awards"
          name="awards"
          value={value.awards}
          onChange={(text) => updateField("awards", text)}
          placeholder="Enter awards"
          fullWidth
        />
      </div>
    </SectionCard>
  );
}
