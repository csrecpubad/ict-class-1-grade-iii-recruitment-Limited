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
    label: "Mr / මයා / திரு",
  },
  {
    value: "Miss",
    label: "Miss / මෙය / செல்வி",
  },
  {
    value: "Mrs",
    label: "Mrs / මිය / திருமதி",
  },
];

const genderOptions = [
  {
    value: "Male",
    label: "Male / පුරුෂ / ஆண்",
  },
  {
    value: "Female",
    label: "Female / ස්ත්‍රී / பெண்",
  },
];

const civilStatusOptions = [
  {
    value: "Unmarried",
    label: "Unmarried / අවිවාහක / திருமணமாகாதவர்",
  },
  {
    value: "Married",
    label: "Married / විවාහක / திருமணமானவர்",
  },
];

const districtOptions = [
  {
    value: "Colombo",
    label: "Colombo / කොළඹ / கொழும்பு",
  },
  {
    value: "Gampaha",
    label: "Gampaha / ගම්පහ / கம்பஹா",
  },
  {
    value: "Kalutara",
    label: "Kalutara / කළුතර / களுத்தாரா",
  },
  {
    value: "Kandy",
    label: "Kandy / නුවර / கண்டி",
  },
  {
    value: "Matale",
    label: "Matale / මාතලේ / மாத்தளை",
  },
  {
    value: "Nuwara Eliya",
    label: "Nuwara Eliya / නුවරඑළිය / நுவரெலியா",
  },
  {
    value: "Galle",
    label: "Galle / ගාල්ල / காலி",
  },
  {
    value: "Matara",
    label: "Matara / මාතර / மாத்தறை",
  },
  {
    value: "Hambantota",
    label: "Hambantota / හම්බන්තොට / அம்பாந்தோட்டை",
  },
  {
    value: "Jaffna",
    label: "Jaffna / යාපනය / யாழ்ப்பாணம்",
  },
  {
    value: "Mannar",
    label: "Mannar / මන්නාරම / மன்னார்",
  },
  {
    value: "Mullaitivu",
    label: "Mullaitivu / මුලතිව් / முல்லைத்தீவு",
  },
  {
    value: "Vavuniya",
    label: "Vavuniya / වවුනියාව / வவுனியா",
  },
  {
    value: "Kilinochchi",
    label: "Kilinochchi / කිලිනොච්චි / கிளிநொச்சி",
  },
  {
    value: "Trincomalee",
    label: "Trincomalee / ත්‍රිකුණාමලය / திருகோணமலை",
  },
  {
    value: "Batticaloa",
    label: "Batticaloa / මඩකලපුව / மட்டக்களப்பு",
  },
  {
    value: "Ampara",
    label: "Ampara / අම්පාර / அம்பாறை",
  },
  {
    value: "Puttalam",
    label: "Puttalam / පුත්තලම / புத்தளம்",
  },
  {
    value: "Kurunegala",
    label: "Kurunegala / කුරුණෑගල / குருநாகல்",
  },
  {
    value: "Anuradhapura",
    label: "Anuradhapura / අනුරාධපුර / அனுராதபுரம்",
  },
  {
    value: "Polonnaruwa",
    label: "Polonnaruwa / පොළොන්නරුව / பொலன்னறுவை",
  },
  {
    value: "Badulla",
    label: "Badulla / බදුල්ල / பதுளை",
  },
  {
    value: "Monaragala",
    label: "Monaragala / මොණරාගල / மொனராகலை",
  },
  {
    value: "Kegalle",
    label: "Kegalle / කෑගල්ල / கேகாலை",
  },
  {
    value: "Ratnapura",
    label: "Ratnapura / රත්නපුර / இரத்தினபுரி",
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
      title="Personal Details / පෞද්ගලික තොරතුරු / தனிப்பட்ட தகவல்"
      description="Please enter your personal and contact information"
    >
      <div className="form-grid">
        {/* Prefix */}
        <SelectField
          label="Prefix / මයා/මෙය/මිය / திரு/திருமதி/செல்வி"
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
          example="Example: A.B.C.D. Perera"
          required
          error={errors.nameEnglish}
        />

        {/* Name with initials - Sinhala/Tamil */}
        <TextField
          label="Name with Initials (Sinhala / Tamil) / මුලකුරු සමග නම / ஆரம்ப எழுத்துக்களுடன் பெயர்"
          name="nameSinhala"
          value={data.nameSinhala}
          onChange={(value) => onChange("nameSinhala", value)}
          placeholder="Enter name with initials"
          example="Example: ඒ.බී.සී.ඩී. පෙරේරා / ஏ.பி.சி.டி. பேரேரா"
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
          example="Example: Anole Berd Chirsh Perera"
          required
          error={errors.fullNameEnglish}
        />

        {/* Full name - Sinhala/Tamil */}
        <TextField
          label="Full Name (Sinhala/Tamil) / සම්පූර්ණ නම / முழு பெயர்"
          name="fullNameSinhala"
          value={data.fullNameSinhala}
          onChange={(value) => onChange("fullNameSinhala", value)}
          placeholder="Enter full name"
          example="Example: අනෝල් බර්ඩ් චර්ෂ් පෙරේරා / அனோல் பெர்ட் சிர்ஷ் பேரேரா"
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
          label="Gender / ස්ත්‍රී/පුරුෂ භාවය / பாலினம்"
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
          label="Civil Status / විවාහක/අවිවාහකභාවය / சிவில் நிலை"
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
          label="Permanent Address / ස්ථීර ලිපිනය / நிரந்தர முகவரி"
          name="permanentAddress"
          value={data.permanentAddress}
          onChange={(value) => onChange("permanentAddress", value)}
          placeholder="Enter permanent address"
          required
          error={errors.permanentAddress}
        />

        {/* Appointment Address */}
        <TextField
          label="Address to which Appointment Letter should be sent / පත්වීම් ලිපිය යොමු කළ යුතු ලිපිනය / நியமனக் கடிதம் அனுப்ப வேண்டிய முகவரி"
          name="appointmentAddress"
          value={data.appointmentAddress}
          onChange={(value) => onChange("appointmentAddress", value)}
          placeholder="Enter appointment letter address"
          required
          error={errors.appointmentAddress}
        />

        {/* Residential District */}
        <SelectField
          label="Residential District / පදිංචි දිස්ත්‍රික්කය / மாவட்டம்"
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
          label="Mobile Number / ජංගම දුරකථන අංකය / கையடக்கத் தொலைபேசி இல."
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
          label="Date of Birth / උපන් දිනය / பிறந்த திகதி"
          name="birthday"
          value={data.birthday}
          onChange={(value) => {
            onChange("birthday", value);

            const calculatedAge = calculateAge(value, "2025-06-30");

            onChange("age", calculatedAge);
          }}
          required
          error={errors.birthday}
        />

        {/* Age */}
        <TextField
          label="Age as at 30.06.2025 / 2025.06.30 දිනට වයස"
          name="age"
          value={data.age}
          onChange={() => {}}
          placeholder="Automatically calculated"
          example="Example: 23 Years 05 Months 04 Days"
          disabled
        />

        {/* Current Position */}
        <TextField
          label="If currently employed in public service, Current Position / දැනට ඔබ දරන තනතුර"
          name="currentPosition"
          value={data.currentPosition}
          onChange={(value) => onChange("currentPosition", value)}
          placeholder="Current Position"
          error={errors.currentPosition}
        />

        {/* Workplace */}
        <TextField
          label="Current Workplace / වර්තමාන සේවා ස්ථානය"
          name="workPlace"
          value={data.workPlace}
          onChange={(value) => onChange("workPlace", value)}
          placeholder="Enter current workplace"
          error={errors.workPlace}
        />
      </div>
    </SectionCard>
  );
}
