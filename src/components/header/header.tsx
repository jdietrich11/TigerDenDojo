import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <Link to="/" className="home">
        Tiger Den Dojo
      </Link>
    </div>
  );
};

export default Header;
