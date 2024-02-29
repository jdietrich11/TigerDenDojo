import React from "react";

import "./banner.styles.scss";

interface BannerProps {
  title: string;
  subtitle: string;
  subtitle2: string[];
}

const Banner: React.FC<BannerProps> = (props) => {
  const { title, subtitle, subtitle2 } = props;

  return (
    <div className="bannerContainer">
      <div className="textContainer">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <ul className="subtitle2Container">
          {subtitle2.map((name) => {
            return <li className="subtitle2">{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
