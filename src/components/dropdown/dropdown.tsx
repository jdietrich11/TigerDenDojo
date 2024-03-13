import React, { useState } from "react";

import "./dropdown.styles.scss";

interface DropdownProps {
  key: number;
  id: number;
  q: string;
  a: string[];
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { q, a, id } = props;
  const [activeIndex, setActiveIndex]: any[] = useState([]);

  const onTitleClick = (id: number) => {
    if (activeIndex.includes(id)) {
      const tempArr = activeIndex.filter((item: number) => item !== id);
      setActiveIndex(tempArr);
      console.log("includes");
    } else {
      setActiveIndex([...activeIndex, id]);
      console.log("does not include");
    }
  };

  return (
    <div key={id} onClick={() => onTitleClick(id)} className="dropdown">
      <div className={activeIndex.includes(id) ? `selected` : "question"}>
        <div>{activeIndex.includes(id) ? "-" : "+"}</div>
        {q}
      </div>
      <div className={activeIndex.includes(id) ? `answer-active` : "answer"}>
        {a.map((item) => {
          return <div className="answerItem">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
