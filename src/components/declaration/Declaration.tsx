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
      title="Declaration / ප්‍රකාශය / உறுதிமொழி"
      description="Please read the declaration carefully and confirm it."
    >
      <div className="declaration-box">

        <div className="declaration-text">

          <p>
            ඉහත සඳහන් තොරතුරු සත්‍ය සහ නිවැරදි බව මම
            සහතික කරමි.
          </p>

          <p>
            මා කළමනාකරණ සේවා නිලධාරි සේවයේ III ශ්‍රේණියේ
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
            முகாமைத்துவ சேவை உத்தியோகத்தர் தரம் III சேவையில்
            நியமனம் செய்வதற்குத் தேவையான தகுதிகளை நான்
            பூர்த்தி செய்துள்ளேன் என்றும், நியமனத்திற்கு நான்
            தகுதியுடையவனாக இருந்தால், இணைப்பு செய்யப்படும்
            நிலையத்தில் பணியாற்ற உடன்படுகின்றேன் எனவும் மற்றும்
            இணைப்பு செய்யப்பட்ட சேவை நிலையத்தை மாற்றக்
            கோரமாட்டேன் என்றும் சான்றளிக்கிறேன்.
          </p>

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
            ඉහත ප්‍රකාශය කියවා අවබෝධ කරගත් අතර,
            එහි සඳහන් කරුණු වලට එකඟ වෙමි.
            <br />
            மேலே உள்ள உறுதிமொழியைப் படித்து புரிந்துகொண்டு,
            அதில் குறிப்பிடப்பட்டுள்ள விடயங்களுக்கு
            உடன்படுகிறேன்.
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