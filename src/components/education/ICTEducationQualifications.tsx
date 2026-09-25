import type {
  EducationQualifications,
  SpecializedFieldRating,
} from "../../types/ict";

import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import SectionCard from "../common/SectionCard";

// import {
//   specializedFields,
// } from "../../constants/ictFields";

interface ICTEducationQualificationsProps {
  value: EducationQualifications;
  onChange: (
    value: EducationQualifications
  ) => void;
}

export default function ICTEducationQualifications({
  value,
  onChange,
}: ICTEducationQualificationsProps) {

  /* =====================================================
     GENERAL UPDATE
  ===================================================== */

  const updateField = <
    K extends keyof EducationQualifications
  >(
    field: K,
    fieldValue: EducationQualifications[K]
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  /* =====================================================
     SPECIALIZED FIELD RATING
  ===================================================== */

  const updateSpecializedField = (
    index: number,
    rating: number
  ) => {
    const updatedFields = [
      ...value.specializedFields,
    ];

    updatedFields[index] = {
      ...updatedFields[index],
      rating,
    };

    updateField(
      "specializedFields",
      updatedFields
    );
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

  <h3 className="section-subtitle">
    Education Qualifications
  </h3>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <TextField
      label="Education Qualification"
      name="qualification"
      value={value.qualification}
      onChange={(text) =>
        updateField("qualification", text)
      }
      placeholder="Full BSc. in ICT (3 years)"
    />

    <SelectField
      label="GCE A/L"
      name="alPassed"
      value={value.alPassed}
      onChange={(selected) =>
        updateField(
          "alPassed",
          selected as "Passed" | "Not passed" | ""
        )
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
    />
  </div>

  <div className="mt-4">
    <TextField
      label="A/L Stream"
      name="alStream"
      value={value.alStream}
      onChange={(text) =>
        updateField("alStream", text)
      }
      placeholder="Enter A/L stream"
    />
  </div>


  {/* =================================================
      SPECIALIZED FIELDS
  ================================================= */}

  <div className="mt-8">
    <h3 className="section-subtitle">
      Specialized Fields
    </h3>

    <p className="field-example">
      Select your rating from 1 to 5 for each specialized field.
    </p>

    <div className="specialized-fields-table">
      <div className="specialized-header">
        <div>
          Specialized Field
        </div>

        <div>
          Rating
        </div>
      </div>

      {value.specializedFields.map(
        (
          field: SpecializedFieldRating,
          index: number
        ) => (
          <div
            className="specialized-row"
            key={field.field}
          >
            <div className="specialized-field-name">
              {field.field}
            </div>

            <div className="specialized-rating">
              {[1, 2, 3, 4, 5].map(
                (rating) => (
                  <label
                    key={rating}
                    className="rating-option"
                  >
                    <input
                      type="radio"
                      name={`specialized-${index}`}
                      value={rating}
                      checked={
                        field.rating === rating
                      }
                      onChange={() =>
                        updateSpecializedField(
                          index,
                          rating
                        )
                      }
                    />

                    <span>
                      {rating}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  </div>


  {/* =================================================
      PROFESSIONAL MEMBERSHIPS
  ================================================= */}

  <div className="mt-8">
    <h3 className="section-subtitle">
      Professional Memberships
    </h3>

    <TextField
      label="Professional Memberships"
      name="professionalMemberships"
      value={value.professionalMemberships}
      onChange={(text) =>
        updateField(
          "professionalMemberships",
          text
        )
      }
      placeholder="Enter professional memberships"
      fullWidth
    />
  </div>


  {/* =================================================
      PROFESSIONAL QUALIFICATIONS
  ================================================= */}

  <div className="mt-8">
    <h3 className="section-subtitle">
      Professional Qualifications
    </h3>

    <TextField
      label="Professional Qualifications"
      name="professionalQualifications"
      value={value.professionalQualifications}
      onChange={(text) =>
        updateField(
          "professionalQualifications",
          text
        )
      }
      placeholder="Enter professional qualifications"
      fullWidth
    />

    <div className="mt-4">
      <TextField
        label="If Other"
        name="professionalQualificationsOther"
        value={value.professionalQualificationsOther}
        onChange={(text) =>
          updateField(
            "professionalQualificationsOther",
            text
          )
        }
        placeholder="If other, please specify"
        fullWidth
      />
    </div>
  </div>


  {/* =================================================
      TECHNOLOGY SKILLS
  ================================================= */}

  <div className="mt-8">
    <h3 className="section-subtitle">
      Fluency in Programming Languages,
      Frameworks and related new Technologies
    </h3>

    <TextField
      label="Programming Languages / Frameworks / Technologies"
      name="technologySkills"
      value={value.technologySkills}
      onChange={(text) =>
        updateField(
          "technologySkills",
          text
        )
      }
      placeholder="Enter programming languages, frameworks and technologies"
      fullWidth
    />
  </div>


  {/* =================================================
      RESEARCH PAPERS
  ================================================= */}

  <div className="mt-8">
    <h3 className="section-subtitle">
      Published Research Papers
    </h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      <TextField
        label="Topic"
        name="researchTopic"
        value={value.researchPaper.topic}
        onChange={(text) =>
          updateField(
            "researchPaper",
            {
              ...value.researchPaper,
              topic: text,
            }
          )
        }
        placeholder="Enter research paper topic"
      />

      <TextField
        label="Year"
        name="researchYear"
        value={value.researchPaper.year}
        onChange={(text) =>
          updateField(
            "researchPaper",
            {
              ...value.researchPaper,
              year: text,
            }
          )
        }
        placeholder="Enter year"
        type="number"
      />

      <SelectField
        label="Local / International"
        name="researchType"
        value={value.researchPaper.type}
        onChange={(selected) =>
          updateField(
            "researchPaper",
            {
              ...value.researchPaper,
              type: selected as
                | "Local"
                | "International"
                | "",
            }
          )
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
        value={
          value.researchPaper.instituteOrMagazine
        }
        onChange={(text) =>
          updateField(
            "researchPaper",
            {
              ...value.researchPaper,
              instituteOrMagazine: text,
            }
          )
        }
        placeholder="Enter institute or magazine"
      />

    </div>
  </div>


  {/* =================================================
      AWARDS
  ================================================= */}

  <div className="mt-8">
    <h3 className="section-subtitle">
      Awards
    </h3>

    <TextField
      label="Awards"
      name="awards"
      value={value.awards}
      onChange={(text) =>
        updateField("awards", text)
      }
      placeholder="Enter awards"
      fullWidth
    />
  </div>

</SectionCard>
  );
}