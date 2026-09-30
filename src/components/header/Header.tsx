import GovernmentLogo from "../../images/header.png";

export default function Header() {
  return (
    <header className="app-header">
            <div className="app-header-inner text-center">
              <div className="logo">
                <img src={GovernmentLogo} alt="Government Logo" />
              </div>
              <h3>
                Ministry of Public Administration, Provincial Councils and Local
                Government
              </h3>
              <h1>Candidate Evaluation Management System (CEMS)</h1>
              <h2>
                ශ්‍රී ලංකා තොරතුරු හා සන්නිවේදන තාක්ෂණ සේවයේ 1 පන්තියේ III ශ්‍රේණියට බඳවා ගැනීමේ සීමිත තරග විභාගය - 2025(2026)
              </h2>
              <h2> Limited Competitive Examination for Recruitment to Grade III of Class 1 of Sri Lanka Information and 
                Communication Technology Service - 2025(2026)
              </h2>
              <h2>
                இலங்கை தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்பச் சேவையின் வகுப்பு 1, 
                தரம் III-க்கு ஆட்சேர்ப்பு செய்வதற்கான மட்டுப்படுத்தப்பட்ட போட்டிப் பரீட்சை - 2025(2026)
              </h2>
            </div>
          </header>
  );
}