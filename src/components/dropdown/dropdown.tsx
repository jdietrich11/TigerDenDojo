import React, { useState, useEffect, useRef } from "react";

import "./dropdown.styles.scss";

interface DropdownProps {
  q: string;
  a: string[];
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { q, a } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onBodyClick = (event: { target: any }) => {
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, {
      capture: true,
    });
  }, []);

  const renderedAnswers = a.map((answerItem) => {
    return <div className="item">{answerItem}</div>;
  });

  return (
    <div className="ui form">
      <div className="field">
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{q}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedAnswers}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
