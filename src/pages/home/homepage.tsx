import React from "react";

import "./homepage.scss";

import Banner from "../../components/banner/banner";

const Homepage: React.FC = () => {
  return (
    <>
      <Banner
        title={"Shoukendou Karate"}
        subtitle={"The way of the honorable fist"}
        subtitle2={["Respect", "Honor", "Gratitude", "Pride"]}
      />
      <div>WE ARE</div>
      <div>Mission Statement</div>
      <div>Gallery</div>
    </>
  );
};

export default Homepage;
