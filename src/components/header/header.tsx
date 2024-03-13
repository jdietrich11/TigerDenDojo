import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const links = [
  { id: 0, name: "testimonials", location: "testimonials" },
  {
    id: 1,
    name: "About/FAQ",
    location: "aboutFAQ",
  },
  {
    id: 2,
    name: "Pricing",
    location: "pricing",
  },
  {
    id: 3,
    name: "Schedule",
    location: "schedule",
  },
];

// const links = ["testimonials", "about/FAQ", "pricing", "schedule"];

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <div className="headerSection1">
        <div className="nameSection">
          <Link to="/" className="home">
            Tiger Den Dojo
          </Link>
        </div>
      </div>
      <div className="headerSection2">
        {links.map((link) => {
          return (
            <div key={link.id} className="linkContainer">
              <Link to={`/${link.location}`} className="linkText">
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
