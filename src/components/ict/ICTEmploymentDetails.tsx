import type { EmploymentDetails } from "../../types/ict";
import TextField from "../common/TextField";
import SectionCard from "../common/SectionCard";

interface ICTEmploymentDetailsProps {
  value: EmploymentDetails;
  onChange: (value: EmploymentDetails) => void;
  errors?: Record<string, string>;
}

export default function ICTEmploymentDetails({
  value,
  onChange,
  errors = {},
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
    <SectionCard
      title="Employment Information"
      number="03"
      description="Please enter your current employment information"
    >
      <div className="form-grid">

        <TextField
          label="Work Place"
          name="workplace"
          value={value.workplace}
          onChange={(value) =>
            updateField("workplace", value)
          }
          placeholder="Enter your current work place"
          required
          error={errors.workplace}
        />

        <TextField
          label="Current Position"
          name="currentPosition"
          value={value.currentPosition}
          onChange={(value) =>
            updateField("currentPosition", value)
          }
          placeholder="Example: Grade II / Grade I"
          required
          error={errors.currentPosition}
        />

      </div>
    </SectionCard>
  );
}