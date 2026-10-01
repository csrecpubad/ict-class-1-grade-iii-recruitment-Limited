import SectionCard from "../common/SectionCard";
import TextField from "../common/TextField";

import type { GeneralDetails as GeneralDetailsType } from "../../types/recruitment";

interface GeneralDetailsProps {
  data: GeneralDetailsType;

  onChange: (
    field: keyof GeneralDetailsType,
    value: string
  ) => void;

  errors?: Record<string, string>;
}

export default function GeneralDetails({
  data,
  onChange,
  errors = {},
}: GeneralDetailsProps) {
  return (
    <SectionCard
      number="01"
      title="General Information"
      description="Please provide the interview calling number and email address."
    >
      <div className="form-grid">

        <TextField
          label="Interview Calling Number"
          name="callingNumber"
          value={data.callingNumber}
          onChange={(value) =>
            onChange("callingNumber", value)
          }
          placeholder="Enter interview calling number"
          example="Example: ICTS/1-III/2026/L/S/1A/001"
          required
          error={errors.callingNumber}
        />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={data.email}
          onChange={(value) =>
            onChange("email", value)
          }
          placeholder="Enter your email address"
          required
          error={errors.email}
        />

      </div>
    </SectionCard>
  );
}