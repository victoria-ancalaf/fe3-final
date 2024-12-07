import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" />
      </div>
      <div className="footer-icons">
        <img src="/images/ico-facebook.png" alt="FB-logo" width={50} />
        <img src="/images/ico-instagram.png" alt="IG-logo" width={50} />
        <img src="/images/ico-tiktok.png" alt="TT-logo" width={50} />
        <img src="/images/ico-whatsapp.png" alt="WSlogo" width={50} />
      </div>
    </footer>
  );
};

export default Footer;
