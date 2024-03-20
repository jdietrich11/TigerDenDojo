import React from "react";
import IcomoonReact from "icomoon-react";

import iconSet from "../../selection.json";

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
          <div className="sectionTitle">phone number</div>
          <a className="link" href="tel:8018084182">
            801-808-4182
          </a>
        </div>
        <div className="footerBottomMiddleSection">
          <a href="mailto:tigerdendojo.karate@gmail.com">
            <IcomoonReact
              iconSet={iconSet}
              color="white"
              icon="mail"
              className="icon"
            />
          </a>
          <a
            href="https://www.instagram.com/tigerden.dojo/"
            target="_blank"
            rel="noreferrer"
          >
            <IcomoonReact
              iconSet={iconSet}
              color="white"
              icon="instagram"
              className="icon"
            />
          </a>
          <a
            href="https://www.facebook.com/people/Tiger-Den-Dojo/100094609324806/"
            target="_blank"
            rel="noreferrer"
          >
            <IcomoonReact
              iconSet={iconSet}
              color="white"
              icon="facebook2"
              className="icon"
            />
          </a>
        </div>
        <div className="footerBottomSection">
          <div className="sectionTitle">email</div>
          <div>tigerdendojo.karate@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
