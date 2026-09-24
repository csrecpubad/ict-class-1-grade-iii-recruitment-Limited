import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import RadioGroup from "../common/RadioGroup";
import SectionCard from "../common/SectionCard";

import type {
  MSOExamDetails as MSOExamDetailsType,
} from "../../types/recruitment";

interface MSOExamDetailsProps {
  data: MSOExamDetailsType;

  onChange: (
    field: keyof MSOExamDetailsType,
    value: string
  ) => void;

  errors?: Record<string, string>;
}

const mediumOptions = [
  {
    value: "Sinhala",
    label: "සිංහල / சிங்களம்",
  },
  {
    value: "Tamil",
    label: "දෙමළ / தமிழ்",
  },
  {
    value: "English",
    label: "ඉංග්‍රීසි / ஆங்கிலம்",
  },
];

const districtOptions = [
  { value: "Colombo", label: "Colombo / කොළඹ / கொழும்பு" },
  { value: "Gampaha", label: "Gampaha / ගම්පහ / காம்பா" },
  { value: "Kalutara", label: "Kalutara / කළුතර / களுத்தாரா" },
  { value: "Kandy", label: "Kandy / නුවර / கண்டி" },
  { value: "Matale", label: "Matale / මාතලේ / மாத்தளை" },
  { value: "Nuwara Eliya", label: "Nuwara Eliya / නුවරඑළිය / நுவரெலியா" },
  { value: "Galle", label: "Galle / ගාල්ල / கள்ளி" },
  { value: "Matara", label: "Matara / මාතර / மாத்தளை" },
  { value: "Hambantota", label: "Hambantota / හම්බන්තොට / ஹம்பந்தோட்டு" },
  { value: "Jaffna", label: "Jaffna / යාපනය / யாபனை" },
  { value: "Mannar", label: "Mannar / මන්නාරම / மன்னாரம்" },
  { value: "Mullaitivu", label: "Mullaitivu / මුලතිව් / முல்லைத்திவு" },
  { value: "Vavuniya", label: "Vavuniya / වවුනියා / வாவுனியா" },
  { value: "Trincomalee", label: "Trincomalee / ත්‍රිකුණාමලය / திரின்கோமலீ" },
  { value: "Batticaloa", label: "Batticaloa / මඩකලපුව / பட்டிகாலா" },
  { value: "Ampara", label: "Ampara / අම්පාර / அம்பாரா" },
  { value: "Puttalam", label: "Puttalam / පුත්තලම / புத்தாலம்" },
  { value: "Kurunegala", label: "Kurunegala / කුරුණෑගල / குருநாகலா" },
  { value: "Anuradhapura", label: "Anuradhapura / අනුරාධපුර / அனுராதபுரம்" },
  { value: "Polonnaruwa", label: "Polonnaruwa / පොලොන්නරුව / பொல்லன்னறுவ" },
  { value: "Badulla", label: "Badulla / බදුල්ල / பதுல்லை" },
  { value: "Monaragala", label: "Monaragala / මොණරාගල / மோனாரகாலா" },
  { value: "Kegalle", label: "Kegalle / කෑගල්ල / கேகல்லை" },
  { value: "Ratnapura", label: "Ratnapura / රත්නපුර / ரத்தினபுரம்" },
  { value: "Kilinochchi", label: "Kilinochchi / කිලිනොච්චිය / கிளினோச்சி" },
];

const districtQualificationOptions = [
  {
    value: "ByBirth",
    label:
      "එම දිස්ත්‍රික්කය තුළ ඉපදුනු අයකු වීම / இந்த மாவட்டத்தில் தற்போது பிறந்துள்ளது",
  },
  {
    value: "PermanentResidence",
    label:
      "2025.06.30 දිනට පූර්වයෙන් වූ අවුරුදු පහක් ඇතුළත යටත් පිරිසෙන් අවුරුදු තුනක්වත් අඛණ්ඩව එම දිස්ත්‍රික්කයේ ස්ථීර වශයෙන් පදිංචිව සිටි අයකු වීම / 2025.06.30 அன்று முதல் 5 ஆண்டுகளில் 3 ஆண்டுகள் தொடர்ச்சியாக அந்த மாவட்டத்தில் நிரந்தரமாக வசித்து வந்தவராக இருக்க வேண்டும்",
  },
  {
    value: "SecondaryEducation",
    label:
      "නොකඩවා අවුරුදු පහක් එම දිස්ත්‍රික්කයේ ද්විතීයික පාසල් අධ්‍යාපනය ලබා තිබීම / தொடர்ச்சியாக 5 ஆண்டுகள் அந்த மாவட்டத்தில் இரண்டாம் நிலை பாடசாலை கல்வி பெற்றிருப்பது",
  },
];

export default function MSOExamDetails({
  data,
  onChange,
  errors = {},
}: MSOExamDetailsProps) {
  return (
    <SectionCard
      number="03"
      title="Management Service Officers' Service Examination Details / කළමනාකරණ සේවා නිලධාරී සේවයේ III ශ්‍රේණියට බඳවා ගැනීමේ විවෘත තරග විභාගය සම්බන්ධ තොරතුරු"
      description="முகாமைத்துவ சேவை உத்தியோகத்தர் சேவையின் தரம் III இற்கு ஆட்சேர்ப்பதற்கான போட்டிப் பரீட்சை தொடர்பான தகவல்கள்"
    >
      <div className="form-grid">

        <TextField
          label="Your Index Number / ඔබගේ විභාග අංකය / உங்கள் பரீட்சை இலக்கம்"
          name="msoExamNumber"
          value={data.msoExamNumber}
          onChange={(value) =>
            onChange("msoExamNumber", value)
          }
          placeholder="Enter examination number"
          required
          error={errors.msoExamNumber}
        />

        <TextField
          label="Total Marks /ලකුණු ප්‍රමාණය / புள்ளிகள்"
          name="msoMarks"
          type="number"
          value={data.msoMarks}
          onChange={(value) =>
            onChange("msoMarks", value)
          }
          placeholder="Enter marks"
          required
          error={errors.msoMarks}
        />

        <TextField
          label="Your Rank / ඔබගේ කුසලතාවය / திறமை இலக்கம்"
          name="msoRank"
          type="number"
          value={data.msoRank}
          onChange={(value) =>
            onChange("msoRank", value)
          }
          placeholder="Enter merit/rank"
          required
          error={errors.msoRank}  
        />

        <SelectField
          label="Medium of Examination / විභාගයට පෙනී සිටි භාෂා මාධ්‍යය / பரீட்சைக்குத் தோற்றிய மொழி மூலம்"
          name="msoMedium"
          value={data.msoMedium}
          options={mediumOptions}
          onChange={(value) =>
            onChange("msoMedium", value)
          }
          placeholder="Select Medium"
          required
          error={errors.msoMedium}
        />

        <SelectField
          label="District of Examination which applied in accordance with 7.0 in exam notification gazzete / විභාග නිවේදනයේ 7.0 අනුව ඔබ පුරප්පාඩු සඳහා තරග කිරීමට තෝරාගත් දිස්ත්‍රික්කය / தேர்வு அறிவிப்பின் 7.0 க்கு ஏற்ப நீங்கள் போட்டியிடத் தேர்ந்தெடுத்த மாவட்டம்"
          name="examDistrict"
          value={data.examDistrict}
          options={districtOptions}
          onChange={(value) =>
            onChange("examDistrict", value)
          }
          placeholder="Select District"
          required
          error={errors.examDistrict}
        />

        <RadioGroup
          label="විභාග නිවේදනයේ 7.0 (ආ) අනුව එම දිස්ත්‍රික්කයට අයත් වීම සඳහා ඔබ විසින් සපුරා ඇති සුදුසුකම / விபாக அறிவிப்பின் 7.0 (ஆ) படி அந்த மாவட்டத்துக்கு சார்ந்தவராக இருக்க உங்களால் பூர்த்தி செய்யப்பட்ட தகுதி"
          name="selectedDistrictQualification"
          value={data.selectedDistrictQualification}
          options={districtQualificationOptions}
          onChange={(value) =>
            onChange(
              "selectedDistrictQualification",
              value
            )
          }
          required
          error={errors.selectedDistrictQualification}
        />

      </div>
    </SectionCard>
  );
}