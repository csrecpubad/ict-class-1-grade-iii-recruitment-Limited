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
      title="General Information / සාමාන්‍ය තොරතුරු / பொது தகவல்"
      description="Please provide the interview calling number and email address."
    >
      <div className="form-grid">

        <TextField
          label="Interview Calling Number / සම්මුඛ පරීක්ෂණ කැදවීම් ලිපි අංකය / நேர்காணல் அழைப்பு எண்"
          name="callingNumber"
          value={data.callingNumber}
          onChange={(value) =>
            onChange("callingNumber", value)
          }
          placeholder="Enter interview calling number"
          example="Example: ICT/001"
          required
          error={errors.callingNumber}
        />

        <TextField
          label="Email Address / විද්‍යුත් තැපැල් ලිපිනය / மின்னஞ்சல் முகவரி"
          name="email"
          type="email"
          value={data.email}
          onChange={(value) =>
            onChange("email", value)
          }
          placeholder="Enter your email address"
          example="Example: applicant@example.com"
          required
          error={errors.email}
        />

      </div>
    </SectionCard>
  );
}