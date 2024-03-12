import React from "react";

import "./galleryCard.styles.scss";

interface GalleryProps {
  id: number;
  name: string;
  description: string;
  imgSrc: any;
}

const GalleryCard: React.FC<GalleryProps> = (props) => {
  const { id, name, description, imgSrc } = props;

  return (
    <div className="GalleryCardContainer">
      <img src={imgSrc} alt={name} className="GalleryCardImage" />
    </div>
  );
};

export default GalleryCard;
