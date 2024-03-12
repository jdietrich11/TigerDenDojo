import React from "react";

interface CarouselItemProps {
  imgUrl: any;
  ImgTitle: string;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { imgUrl, ImgTitle } = props;

  return (
    <div className="carouselCard">
      <img src={imgUrl} alt={ImgTitle} className="carouselCardImg" />
    </div>
  );
};

export default CarouselItem;
