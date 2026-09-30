import SectionCard from "../common/SectionCard";

interface DeclarationProps {
  accepted: boolean;
  onChange: (value: boolean) => void;
  error?: string;
}

export default function Declaration({
  accepted,
  onChange,
  error,
}: DeclarationProps) {
  return (
    <SectionCard
      number="05"
      title="Declaration"
      description="Please read the declaration carefully and confirm it."
    >
      <div className="declaration-box">

        <div className="declaration-text">
          
          <p>
            I certify that the above-mentioned information is true and correct.
          </p>

          <p>
            I certify that I possess the required qualifications for appointment to 
            Class 1, Grade III of the Sri Lanka Information and Communication Technology Service. 
            furthermore, I pledge that, should I be selected for the appointment, 
            I will serve at the assigned duty station and will not request a change of the assigned 
            duty station for any reason.
          </p>

          {/* <div className="declaration-divider"/>

          <p>
            ඉහත සඳහන් තොරතුරු සත්‍ය සහ නිවැරදි බව මම
            සහතික කරමි.
          </p>

          <p>
            මා ශ්‍රී ලංකා තොරතුරු හා සන්නිවේදන තාක්ෂණ සේවයේ 1 වන පන්තියේ III ශ්‍රේණියේ
            පත්වීමක් සඳහා අවශ්‍ය සුදුසුකම් සපුරා ඇති බව
            සහතික කරන අතර මා පත්වීමට සුදුසුකම් ලබන්නේ නම්,
            අනුයුක්ත කරන සේවා ස්ථානයේ සේවය කිරීමට එකඟ වන
            බවත්, කිසිදු හේතුවක් නිසා අනුයුක්ත කළ සේවා
            ස්ථානය වෙනස් කිරීමට ඉල්ලීමක් සිදු නොකරන බවත්
            මම පොරොන්දු වෙමි.
          </p>

          <div className="declaration-divider" />

          <p>
            மேலே உள்ள தகவல்கள் உண்மையானவை மற்றும்
            சரியானவை என்று நான் சான்றளிக்கிறேன்.
          </p>

          <p>
            இலங்கை தகவல் மற்றும் தொடர்பு தொழில்நுட்ப சேவையின் வகுப்பு 1, தரம் III இல் நியமனம் 
            பெறுவதற்குத் தேவையான தகுதிகளை நான் பூர்த்தி செய்துள்ளேன் என்று சான்றளிக்கிறேன். 
            மேலும், நான் நியமனத்திற்குத் தகுதியுடையவனாக இருந்தால், பணி நியமன இடத்தில் பணியாற்ற 
            ஒப்புக்கொள்வேன் என்றும், எந்தக் காரணத்திற்காகவும் பணி நியமன இட மாற்றத்தைக் கோர மாட்டேன் 
            என்றும் உறுதியளிக்கிறேன்.
          </p> */}

        </div>

        <label className="declaration-checkbox">

          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) =>
              onChange(e.target.checked)
            }
          />

          <span>
            I have read and understood the above declaration and agree to the points mentioned there in.
            {/* <br/>
            ඉහත ප්‍රකාශය කියවා අවබෝධ කරගත් අතර,
            එහි සඳහන් කරුණු වලට එකඟ වෙමි.
            <br />
            மேலே உள்ள உறுதிமொழியைப் படித்து புரிந்துகொண்டு,
            அதில் குறிப்பிடப்பட்டுள்ள விடயங்களுக்கு
            உடன்படுகிறேன். */}
          </span>

        </label>
        {error && (
  <small className="field-error">
    {error}
  </small>
)}

      </div>
    </SectionCard>
  );
}