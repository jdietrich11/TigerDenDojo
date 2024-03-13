import React, { useState } from "react";

import Banner from "../../components/banner/banner";
import Dropdown from "../../components/dropdown/dropdown";

import FAQ from "../../assets/Information/FAQDetails";

import "./about.styles.scss";

const AboutFAQPage: React.FC = () => {
  return (
    <>
      <Banner title={"About/FAQ"} subtitle="" subtitle2={[]} />
      <div className="featureContainer">
        <div className="featureHeading">About Sensei Chambers</div>
        <div className="featureSubSection">
          <div className="featureDescription">
            Sensei Brandon Chambers is the owner and Head Instructor of Tiger
            Den Dojo and the Founder of Shoukendou Karate. He began learning
            karate in 2003 and began teaching in 2007. He earned his first two
            Black Belts (in Karate Shin-Toshi and Taekwondo Moo Duk Kwan) at the
            age of fourteen in 2010. In 2019, he was promoted to 2nd Degree in
            Tan Ren Do Karate. In early 2023, he began working with some of his
            peers and long-time students (Henry Spackman, Mike Andelin, Noah
            Andelin) to create the curriculum for Shoukendou Karate. Sensei
            Chambers selected the name Shoukendou because it means, “Way of the
            Honorable Fist.” When he isn’t teaching karate, he can often be
            found writing books.
          </div>
          <img
            src={require("../../assets/Gallery/BrandonCWithSword.jpg")}
            alt="Sensei Brandon Chambers with practicing with a katana"
            className="featureImg"
          />
        </div>
      </div>
      <div className="featureContainer">
        <div className="featureHeading">Instructor of the year 2023</div>
        <div className="featureSubSection">
          <img
            src={require("../../assets/HenrySpackmanImg.jpeg")}
            alt="Henry Spackman Smiling"
            className="featureImg"
          />
          <div className="featureDescription">
            We’re proud to announce Sensei Henry Spackman as our 2023 Instructor
            of the Year! Sensei Spackman had an extremely packed year working
            multiple jobs and attending college, but he still somehow made the
            time to come to as many classes as possible. Sensei Spackman was
            absolutely essential in creating the curriculum for Shoukendou in
            2023. His positive attitude, dependability, initiative,
            communication skills, and broad knowledge base all made him the
            clear choice to win this award. We honor him. We respect him. We’re
            grateful for him. We’re proud of him. Sensei Henry Spackman is a
            prime example of what we expect from somebody who teaches The Way of
            the Honorable Fist.
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="FAQBanner">
        <div>FAQ</div>
      </div>
      <div>
        {FAQ.map((item) => {
          return (
            <Dropdown
              q={item.question}
              a={item.answer}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default AboutFAQPage;
