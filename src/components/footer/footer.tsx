import React from "react";

import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerTopContainer">
        <div className="footerCompanyName">Tiger Den Dojo</div>
        <div>&#169; 2024</div>
      </div>
      <div className="footerBottomContainer">
        <div className="footerBottomSection">
          <div>phone number</div>
          <div>801-808-4182</div>
        </div>
        <div className="footerBottomMiddleSection">
          <div>email</div>
          <div>Instagram</div>
          <div>Facebook</div>
        </div>
        <div className="footerBottomSection">
          <div>email</div>
          <div>tigerdendojo.karate@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
