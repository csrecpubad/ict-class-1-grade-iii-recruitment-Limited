import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import NICField from "../common/NICField";
import SectionCard from "../common/SectionCard";
import DateField from "../common/DateField";
import { calculateAge } from "../../utils/age";
import type { PersonalDetails as PersonalDetailsType } from "../../types/recruitment";

interface PersonalDetailsProps {
  data: PersonalDetailsType;

  onChange: (field: keyof PersonalDetailsType, value: string) => void;
  errors?: Record<string, string>;
}

const prefixOptions = [
  {
    value: "Mr",
    label: "Mr",
  },
  {
    value: "Miss",
    label: "Miss",
  },
  {
    value: "Mrs",
    label: "Mrs",
  },
];

const genderOptions = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const civilStatusOptions = [
  {
    value: "Unmarried",
    label: "Unmarried",
  },
  {
    value: "Married",
    label: "Married",
  },
];

const districtOptions = [
  {
    value: "Colombo",
    label: "Colombo",
  },
  {
    value: "Gampaha",
    label: "Gampaha",
  },
  {
    value: "Kalutara",
    label: "Kalutara",
  },
  {
    value: "Kandy",
    label: "Kandy",
  },
  {
    value: "Matale",
    label: "Matale",
  },
  {
    value: "Nuwara Eliya",
    label: "Nuwara Eliya",
  },
  {
    value: "Galle",
    label: "Galle",
  },
  {
    value: "Matara",
    label: "Matara",
  },
  {
    value: "Hambantota",
    label: "Hambantota",
  },
  {
    value: "Jaffna",
    label: "Jaffna",
  },
  {
    value: "Mannar",
    label: "Mannar",
  },
  {
    value: "Mullaitivu",
    label: "Mullaitivu",
  },
  {
    value: "Vavuniya",
    label: "Vavuniya",
  },
  {
    value: "Kilinochchi",
    label: "Kilinochchi",
  },
  {
    value: "Trincomalee",
    label: "Trincomalee",
  },
  {
    value: "Batticaloa",
    label: "Batticaloa",
  },
  {
    value: "Ampara",
    label: "Ampara",
  },
  {
    value: "Puttalam",
    label: "Puttalam",
  },
  {
    value: "Kurunegala",
    label: "Kurunegala",
  },
  {
    value: "Anuradhapura",
    label: "Anuradhapura",
  },
  {
    value: "Polonnaruwa",
    label: "Polonnaruwa",
  },
  {
    value: "Badulla",
    label: "Badulla",
  },
  {
    value: "Monaragala",
    label: "Monaragala",
  },
  {
    value: "Kegalle",
    label: "Kegalle",
  },
  {
    value: "Ratnapura",
    label: "Ratnapura",
  },
];

export default function PersonalDetails({
  data,
  onChange,
  errors = {},
}: PersonalDetailsProps) {
  return (
    <SectionCard
      number="02"
      title="Personal Details"
      description="Please enter your personal and contact information"
    >
      <div className="form-grid">
        {/* Prefix */}
        <SelectField
          label="Prefix"
          name="prefix"
          value={data.prefix}
          options={prefixOptions}
          onChange={(value) => onChange("prefix", value)}
          placeholder="Select"
          required
          error={errors.prefix}
        />

        {/* Name with initials - English */}
        <TextField
          label="Name with Initials (English)"
          name="nameEnglish"
          value={data.nameEnglish}
          onChange={(value) => onChange("nameEnglish", value)}
          placeholder="Enter name with initials"
          example="Example: B.A.C.D. Perera"
          required
          error={errors.nameEnglish}
        />

        {/* Name with initials - Sinhala/Tamil */}
        <TextField
          label="Name with Initials (Sinhala / Tamil)"
          name="nameSinhala"
          value={data.nameSinhala}
          onChange={(value) => onChange("nameSinhala", value)}
          placeholder="Enter name with initials"
          example="Example: බී.ඒ්.සී.ඩී.පෙරේරා / பி.ஏ.சி.டி.பெரேரா"
          required
          error={errors.nameSinhala}
        />

        {/* Full name - English */}
        <TextField
          label="Full Name (English)"
          name="fullNameEnglish"
          value={data.fullNameEnglish}
          onChange={(value) => onChange("fullNameEnglish", value)}
          placeholder="Enter full name"
          example="Example: Balasooriya Arachchige Chaminda Dushantha Perera"
          required
          error={errors.fullNameEnglish}
        />

        {/* Full name - Sinhala/Tamil */}
        <TextField
          label="Full Name (Sinhala/Tamil) "
          name="fullNameSinhala"
          value={data.fullNameSinhala}
          onChange={(value) => onChange("fullNameSinhala", value)}
          placeholder="Enter full name"
          example="Example: බාලසූරිය ආරච්චිගේ චමින්ද දුෂාන්ත පෙරේරා / பாலசூரிய ஆராச்சிகே சமிந்த துஷாந்த பெரேரா"
          required
          error={errors.fullNameSinhala}
        />

        {/* NIC */}
        <NICField
          value={data.nic}
          onChange={(value) => onChange("nic", value)}
          error={errors.nic}
        />

        {/* Gender */}
        <SelectField
          label="Gender"
          name="gender"
          value={data.gender}
          options={genderOptions}
          onChange={(value) => onChange("gender", value)}
          placeholder="Select"
          required
          error={errors.gender}
        />

        {/* Civil Status */}
        <SelectField
          label="Civil Status"
          name="civilStatus"
          value={data.civilStatus}
          options={civilStatusOptions}
          onChange={(value) => onChange("civilStatus", value)}
          placeholder="Select"
          required
          error={errors.civilStatus}
        />

        {/* Permanent Address */}
        <TextField
          label="Permanent Address (Sinhala / Tamil)"
          name="permanentAddress"
          value={data.permanentAddress}
          onChange={(value) => onChange("permanentAddress", value)}
          placeholder="Enter permanent address"
          required
          error={errors.permanentAddress}
        />

        {/* Appointment Address */}
        <TextField
          label="Address to which Appointment Letter should be sent (Sinhala / Tamil)"
          name="appointmentAddress"
          value={data.appointmentAddress}
          onChange={(value) => onChange("appointmentAddress", value)}
          placeholder="Enter appointment letter address"
          required
          error={errors.appointmentAddress}
        />

        {/* Residential District */}
        <SelectField
          label="Residential District"
          name="residentialDistrict"
          value={data.residentialDistrict}
          options={districtOptions}
          onChange={(value) => onChange("residentialDistrict", value)}
          placeholder="Select District"
          required
          error={errors.residentialDistrict}
        />

        {/* Mobile */}
        <TextField
          label="Mobile Number"
          name="mobile"
          type="tel"
          value={data.mobile}
          onChange={(value) => onChange("mobile", value)}
          placeholder="07XXXXXXXX"
          maxLength={10}
          required
          error={errors.mobile}
        />

        {/* WhatsApp */}
        <TextField
          label="WhatsApp Number"
          name="whatsapp"
          type="tel"
          value={data.whatsapp}
          onChange={(value) => onChange("whatsapp", value)}
          placeholder="07XXXXXXXX"
          maxLength={10}
        />

        {/* Birthday */}
        <DateField
          label="Date of Birth"
          name="birthday"
          value={data.birthday}
          onChange={(value) => {
            onChange("birthday", value);

            const calculatedAge = calculateAge(value, "2025-12-08");

            onChange("age", calculatedAge);
          }}
          required
          error={errors.birthday}
        />

        {/* Age */}
        <TextField
          label="Age as at 80.12.2025 (Automatically calculated)"
          name="age"
          value={data.age}
          onChange={() => {}}
          placeholder="Automatically calculated"
          example="Example: 23 Years 05 Months 04 Days"
          disabled
        />

        {/* Current Position */}
        {/* <TextField
          label="If currently employed in public service, Current Position / දැනට ඔබ දරන තනතුර"
          name="currentPosition"
          value={data.currentPosition}
          onChange={(value) => onChange("currentPosition", value)}
          placeholder="Current Position"
          error={errors.currentPosition}
        /> */}

        {/* Workplace */}
        {/* <TextField
          label="Current Workplace / වර්තමාන සේවා ස්ථානය"
          name="workPlace"
          value={data.workPlace}
          onChange={(value) => onChange("workPlace", value)}
          placeholder="Enter current workplace"
          error={errors.workPlace}
        /> */}
      </div>
    </SectionCard>
  );
}
