import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <div className="headerSection1">
        <Link to="/" className="home">
          Tiger Den Dojo
        </Link>
      </div>
      <div className="headerSection2">Links</div>
    </div>
  );
};

export default Header;
