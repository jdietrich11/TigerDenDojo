import React, { useState } from "react";

import "./dropdown.styles.scss";

import SvgPose1 from "../../Icons/SVG/Pose1.js";

interface DropdownProps {
  key: number;
  id: number;
  q: string;
  a: string[];
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { q, a, id } = props;
  const [activeIndex, setActiveIndex]: any[] = useState([]);
  const [imgIndex, setImgIndex]: any = useState("1");

  const onTitleClick = (id: number) => {
    if (activeIndex.includes(id)) {
      const tempArr = activeIndex.filter((item: number) => item !== id);
      setActiveIndex(tempArr);
      setImgIndex("2");
      setTimeout(() => {
        setImgIndex("1");
      }, 500);
    } else {
      setActiveIndex([...activeIndex, id]);
      setImgIndex("2");
      setTimeout(() => {
        setImgIndex("3");
      }, 400);
    }
  };

  return (
    <div key={id} onClick={() => onTitleClick(id)} className="dropdown">
      <div className={activeIndex.includes(id) ? `selected` : "question"}>
        <img
          className="kickImg"
          src={require(`../../assets/Kick/pose${imgIndex}.png`)}
          alt="karate kick"
        />
        {/* <div>{activeIndex.includes(id) ? "-" : "+"}</div> */}
        <div className="questionText">{q}</div>
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
