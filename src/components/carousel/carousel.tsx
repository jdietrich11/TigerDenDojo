import React from "react";

import CarouselDetails from "../../assets/Information/CarouselDetails";
import CarouselItem from "../carouselItem/carouselItem";

import "./carousel.styless.scss";

const Carousel: React.FC = () => {
  return (
    <div className="carouselContainer">
      <div className="carouselTrack">
        {CarouselDetails.map((item) => {
          return <CarouselItem imgUrl={item.imgUrl} ImgTitle={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
