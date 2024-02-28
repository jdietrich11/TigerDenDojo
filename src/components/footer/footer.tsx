import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="headerContainer">
      <Link to="/" className="home">
        Tiger Den Dojo
      </Link>
    </div>
  );
};

export default Footer;
