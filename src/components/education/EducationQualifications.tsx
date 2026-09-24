import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import DateField from "../common/DateField";
import SectionCard from "../common/SectionCard";

import type {
  OLevelDetails,
  ALevelDetails,
} from "../../types/recruitment";

interface EducationQualificationsProps {
  olData: OLevelDetails;
  alData: ALevelDetails;

  onOLChange: (
    field: keyof OLevelDetails,
    value: string
  ) => void;

  onALChange: (
    field: keyof ALevelDetails,
    value: string
  ) => void;

  olErrors?: Record<string, string>;
  alErrors?: Record<string, string>;
}

const yesNoOptions = [
  {
    value: "Yes",
    label: "ඔව් / ஆம்",
  },
  {
    value: "No",
    label: "නැත / இல்லை",
  },
];

const gradeOptions = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "C",
    label: "C",
  },
  {
    value: "S",
    label: "S",
  },
];

export default function EducationQualifications({
  olData,
  alData,
  onOLChange,
  onALChange,
  olErrors = {},
  alErrors = {},
}: EducationQualificationsProps) {
  return (
    <SectionCard
      number="04"
      title="Education Qualifications / අධ්‍යාපන සුදුසුකම් / கல்வித் தகைமைகள்"
      description="Please provide your educational qualifications."
    >
      {/* =========================
          O/L
      ========================= */}

      <div className="education-subsection">

        <h3>
          අධ්‍යයන පොදු සහතික පත්‍ර (සාමාන්‍ය පෙළ)
        </h3>

        <p className="education-subtitle">
          கல்விப் பொதுத் தராதர (சாதாரண தரம்)
        </p>

        <div className="education-description">
          මෙම අධ්‍යාපන සුදුසුකම් 2025.06.30 දිනට පෙර
          සම්පූර්ණ කර තිබිය යුතු වේ.
          <br />

          විෂයයේ නම සහ ඔබ ලබාගත් සාමාර්ථය ඉංග්‍රීසි
          මාධ්‍යයෙන් උදාහරණයේ ආකාරයට පහත සඳහන් කරන්න.
          <br />

          උදා:- Mathematics-A
          <br />
          <br />

          இந்த கல்வித் தகைமைகள் 2025.06.30 க்கு முன்
          பூர்த்தி செய்யப்பட்டிருக்க வேண்டும்.
          <br />

          பாடம் மற்றும் நீங்கள் பெற்றுக்கொண்ட பெறுபேறு
          என்பவற்றை உதாரணத்தில் குறிப்பிடப்பட்டுள்ளதன்படி
          ஆங்கிலத்தில் குறிப்பிடவும்.
          <br />

          உதா:- Mathematics - A
        </div>

        <div className="form-grid">

          <TextField
            label="විභාග වර්ෂය / பரீட்சை ஆண்டு"
            name="olYear"
            value={olData.olYear}
            onChange={(value) =>
              onOLChange("olYear", value)
            }
            placeholder="Enter examination year"
            maxLength={4}
            required
            error={olErrors.olYear}
          />

          <TextField
            label="විභාග අංකය / பரீட்சை சுட்டெண்"
            name="olIndex"
            value={olData.olIndex}
            onChange={(value) =>
              onOLChange("olIndex", value)
            }
            placeholder="Enter examination index"
            required
            error={olErrors.olIndex}
          />

          <TextField
            label="විෂයය 01 / பாடம் 01 (Mathematics)"
            name="maths"
            value={olData.maths}
            onChange={(value) =>
              onOLChange("maths", value)
            }
            placeholder="Example: Mathematics-A"
            required
            error={olErrors.maths}
          />

          <TextField
            label="විෂයය 02 / பாடம் 02 (Language)"
            name="language"
            value={olData.language}
            onChange={(value) =>
              onOLChange("language", value)
            }
            placeholder="Example: Sinhala-A"
            required
            error={olErrors.language}
          />

          <TextField
            label="විෂයය 03 / பாடம் 03"
            name="sub3"
            value={olData.sub3}
            onChange={(value) =>
              onOLChange("sub3", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub3}
          />

          <TextField
            label="විෂයය 04 / பாடம் 04"
            name="sub4"
            value={olData.sub4}
            onChange={(value) =>
              onOLChange("sub4", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub4}
          />

          <TextField
            label="විෂයය 05 / பாடம் 05"
            name="sub5"
            value={olData.sub5}
            onChange={(value) =>
              onOLChange("sub5", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub5}
          />

          <TextField
            label="විෂයය 06 / பாடம் 06"
            name="sub6"
            value={olData.sub6}
            onChange={(value) =>
              onOLChange("sub6", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub6}
          />

          <TextField
            label="විෂයය 07 / பாடம் 07"
            name="sub7"
            value={olData.sub7}
            onChange={(value) =>
              onOLChange("sub7", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub7}
          />

          <TextField
            label="විෂයය 08 / பாடம் 08"
            name="sub8"
            value={olData.sub8}
            onChange={(value) =>
              onOLChange("sub8", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub8}
          />

          <TextField
            label="විෂයය 09 / பாடம் 09"
            name="sub9"
            value={olData.sub9}
            onChange={(value) =>
              onOLChange("sub9", value)
            }
            placeholder="Subject Name - Result"
            error={olErrors.sub9}
          />

        </div>
      </div>

      {/* =========================
          A/L
      ========================= */}

      <div className="education-subsection">

        <h3>
          අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ)
        </h3>

        <p className="education-subtitle">
          கல்விப் பொதுத் தராதர (உயர் தரம்)
        </p>

        <div className="education-description">
          මෙම අධ්‍යාපන සුදුසුකම් 2025.06.30 දිනට පෙර
          සම්පූර්ණ කර තිබිය යුතු වේ.
          <br />

          අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගයේ
          සාමාන්‍ය ඉංග්‍රීසි විෂයය හැර සමත් විෂයයේ නම සහ
          ඔබ ලබාගත් සාමාර්ථය ඉංග්‍රීසි මාධ්‍යයෙන්
          උදාහරණයේ ආකාරයට පහත සඳහන් කරන්න.
          <br />

          උදා:- Economics-A
          <br />
          <br />

          இந்த கல்வித் தகுதிகள் 2025.06.30 தேதிக்கு முன்பு
          முழுமையாகப் பூர்த்தியாகியிருக்க வேண்டும்.
          <br />

          உயர்நிலைப் பரீட்சையில் (GCE A/L) பொது ஆங்கிலம்
          தவிர, நீங்கள் தேர்ச்சி பெற்ற பாடத்தின் பெயர் மற்றும்
          பெறப்பட்ட தரம் ஆங்கிலத்தில் குறிப்பிடவும்.
          <br />

          உதா:- Economics-A
        </div>

        <div className="form-grid">

          <TextField
            label="විභාග වර්ෂය / பரீட்சை ஆண்டு"
            name="alYear"
            value={alData.alYear}
            onChange={(value) =>
              onALChange("alYear", value)
            }
            placeholder="Enter examination year"
            maxLength={4}
            required
            error={alErrors.alYear}
          />

          <TextField
            label="විභාග අංකය / பரீட்சை சுட்டெண்"
            name="alIndex"
            value={alData.alIndex}
            onChange={(value) =>
              onALChange("alIndex", value)
            }
            placeholder="Enter examination index"
            required
            error={alErrors.alIndex}
          />

          <TextField
            label="උසස් පෙළ විභාගයට පෙනී සිටි විෂයය ධාරාව / உயர்நிலைப் பரீட்சைக்கு தோற்றும் பாடத் துறை"
            name="stream"
            value={alData.stream}
            onChange={(value) =>
              onALChange("stream", value)
            }
            placeholder="Example: Commerce"
            required
            error={alErrors.stream}
          />

          <TextField
            label="විෂයය 01 / பாடம் 01"
            name="alSub1"
            value={alData.alSub1}
            onChange={(value) =>
              onALChange("alSub1", value)
            }
            placeholder="Subject Name - Result"
            required
            error={alErrors.alSub1}
          />

          <TextField
            label="විෂයය 02 / பாடம் 02"
            name="alSub2"
            value={alData.alSub2}
            onChange={(value) =>
              onALChange("alSub2", value)
            }
            placeholder="Subject Name - Result"
            required
            error={alErrors.alSub2}
          />

          <TextField
            label="විෂයය 03 / பாடம் 03"
            name="alSub3"
            value={alData.alSub3}
            onChange={(value) =>
              onALChange("alSub3", value)
            }
            placeholder="Subject Name - Result"
            required
            error={alErrors.alSub3}
          />

          <SelectField
            label="ඔබ සාමාන්‍ය ඉංග්‍රීසි විෂයය සමත් ද? / நீங்கள் பொது ஆங்கிலப் பாடத்தில் தேர்ச்சி பெற்றீர்களா?"
            name="generalEnglish"
            value={alData.generalEnglish}
            options={yesNoOptions}
            onChange={(value) =>
              onALChange("generalEnglish", value)
            }
            placeholder="Select"
            required
            error={alErrors.generalEnglish}
          />

          <SelectField
            label="සාමාන්‍ය ඉංග්‍රීසි විෂයය සමත් නම් ලබා ඇති සාමාර්ථය / அவ்வாறு தேர்ச்சி பெற்றிருப்பின் தேர்ச்சியின் தரம்"
            name="geGrade"
            value={alData.geGrade}
            options={gradeOptions}
            onChange={(value) =>
              onALChange("geGrade", value)
            }
            placeholder="Select Grade"
            error={alErrors.geGrade}
          />

          <SelectField
            label="ඔබ විසින් උපාධි සුදුසුකමක් සම්පූර්ණ කර ඇත් ද? / நீங்கள் பட்டதாரி தகுதியை முழுமையாக நிறைவு செய்துள்ளீர்களா?"
            name="degreeQualification"
            value={alData.degreeQualification}
            options={yesNoOptions}
            onChange={(value) =>
              onALChange(
                "degreeQualification",
                value
              )
            }
            placeholder="Select"
            required
            error={alErrors.degreeQualification}
          />

          <TextField
            label="ඔබ විසින් උපාධි සුදුසුකමක් සම්පූර්ණ කර ඇත්නම් ලබා ඇති උපාධිය / நீங்கள் பெற்ற பட்டம்"
            name="degree"
            value={alData.degree}
            onChange={(value) =>
              onALChange("degree", value)
            }
            placeholder="Enter degree"
            error={alErrors.degree}
          />

          <TextField
            label="එම උපාධිය පිරිනමන ලද විශ්වවිද්‍යාලය / ආයතනය / அந்த பட்டம் வழங்கிய பல்கலைக்கழகம் / நிறுவனம்"
            name="university"
            value={alData.university}
            onChange={(value) =>
              onALChange("university", value)
            }
            placeholder="Enter university / institute"
            error={alErrors.university}
          />

          <DateField
            label="උපාධිය වලංගු දිනය / பட்டத்தின் செல்லுபடியாகும் தேதி"
            name="degreeDate"
            value={alData.degreeDate}
            onChange={(value) =>
              onALChange("degreeDate", value)
            }
            error={alErrors.degreeDate}
          />

          <TextField
            label="වෙනත් උසස් අධ්‍යාපන සුදුසුකම් / வேறு உயர்கல்வி தகுதி"
            name="otherQualification"
            value={alData.otherQualification}
            onChange={(value) =>
              onALChange(
                "otherQualification",
                value
              )
            }
            placeholder="Enter other qualification"
            error={alErrors.otherQualification}
          />

        </div>
      </div>
    </SectionCard>
  );
}