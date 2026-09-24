
export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">

        <p className="footer-title">
          Recruitment and Examination Division
        </p>
        <p>
          Ministry of Public Administration, Provincial Councils and Local
          Government
        </p>

        <p className="footer-system">
          <strong>Recruitment Data Collection System</strong>
        </p>

        <p className="footer-version">
          Version 1.0.5
        </p>

        {/* Contact Information */}
        <div className="footer-contact">
          <p className="footer-contact-title">
            Contact Us
          </p>

          <div className="footer-contact-list">

            <p>
              <strong>Call Us:</strong>{" "}
              0112 166 000 Ext. 606
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:csrec.pubad@gmail.com">
                csrec.pubad@gmail.com
              </a>
            </p>

            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/94702667828"
                target="_blank"
                rel="noopener noreferrer"
              >
                070 266 7828
              </a>
            </p>

          </div>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          © 2026 CSREC &amp; Sanjaya Kasun. All Rights Reserved.
        </p>

      </footer>
    </div>
  );
}

