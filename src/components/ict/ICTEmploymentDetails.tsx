import type { EmploymentDetails } from "../../types/ict";
//import SelectField from "../common/SelectField";
import TextField from "../common/TextField";
import SectionCard from "../common/SectionCard";

interface ICTEmploymentDetailsProps {
  value: EmploymentDetails;
  onChange: (value: EmploymentDetails) => void;
}

export default function ICTEmploymentDetails({
  value,
  onChange,
}: ICTEmploymentDetailsProps) {
  const updateField = <K extends keyof EmploymentDetails>(
    field: K,
    fieldValue: EmploymentDetails[K]
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <SectionCard title="Employment Information"
    number = "03"
    description="Please enter your employment information"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* <SelectField
          label="Whether employed in public sector"
          name="isPublicSectorEmployee"
          value={value.isPublicSectorEmployee}
          onChange={(value) =>
            updateField(
              "isPublicSectorEmployee",
              value as EmploymentDetails["isPublicSectorEmployee"]
            )
          }
          options={[
            {
              value: "Yes",
              label: "Yes",
            },
            {
              value: "No",
              label: "No",
            },
          ]}
          placeholder="Select"
        /> */}

        <TextField
          label="Work Place"
          name="workplace"
          value={value.workplace}
          onChange={(value) => updateField("workplace", value)}
        />
      </div>

          <TextField
          label="Current Service Releated Position / දැනට ඔබ දරන තනතුර"
          name="currentPosition"
          value={""}
          onChange={(value) => updateField("workplace", value)}
          placeholder="2 II or 2 I"
          error={""}
        />

      {/* {value.isPublicSectorEmployee === "Yes" && (
        <div className="mt-4">
          <TextField
            label="Service particulars"
            name="serviceParticulars"
            value={value.serviceParticulars}
            onChange={(value) =>
              updateField("serviceParticulars", value)
            }
          />
        </div>
      )} */}
    </SectionCard>
  );
}