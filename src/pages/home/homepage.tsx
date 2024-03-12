import React from "react";

import "./homepage.scss";
import gallery from "../../assets/Information/Gallery.js";

import Banner from "../../components/banner/banner";
import GalleryCard from "../../components/galleryCard/galleryCard";

const Homepage: React.FC = () => {
  return (
    <>
      <Banner
        title={"Shoukendou Karate"}
        subtitle={"The way of the honorable fist"}
        subtitle2={["Respect", "Honor", "Gratitude", "Pride"]}
      />
      <div className="WeAreContainer">
        <div className="WeAreStatementContainer">
          <div className="WeAreStatementHeading">we are tiger den dojo</div>
          <div className="WeAreStatement">
            Welcome to Tiger Den Dojo! Sensei Brandon Chambers has been
            practicing karate for over twenty years. Now, he teaches classes at
            Kolob Park in Springville from April-November as he saves up money
            to open a physical location. In the winter, classes are suspended
            and he teaches Community Classes through Nebo School District
            instead. We hope you’ll reach out to ask about two free trial
            classes!
          </div>
        </div>
        <div className="WeAreImageContainer">
          <img
            src={require("../../assets/WeAreIMG.jpg")}
            alt="Sensei Brandon Chambers, Noah and Michael Andelin"
            className="WeAreImage"
          />
        </div>
      </div>
      <div className="MissionStatementContainer">
        <div className="MissionStatementLinearGrade">
          <div className="MissionStatementHeading">Mission statement</div>
          <div className="MissionStatement">
            At Tiger Den Dojo, we treat our students with respect, gratitude,
            honor, and pride and we expect the same from them. Our style of
            karate is called Shoukendou (a translation of the phrase, “Way of
            the Honorable Fist”). Its a style crafted from principles found in
            Kempo, Shotokan, Taekwondo, Kobudo, and other martial arts. We
            ensure a fun, challenging, and rewarding environment for our
            students to learn self-defense, get great exercise, and become the
            best version of themselves.
          </div>
        </div>
      </div>
      <div className="GalleryContainer">
        {gallery.map((item) => {
          return (
            <GalleryCard
              id={item.id}
              name={item.name}
              description={item.description}
              imgSrc={item.imgSrc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
