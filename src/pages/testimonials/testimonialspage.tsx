import React from "react";

import Banner from "../../components/banner/banner";
import Carousel from "../../components/carousel/carousel";

import Testimonials from "../../assets/Information/Testimonials";
import "./testimonials.styles.scss";

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Banner title={"Testimonials"} subtitle="" subtitle2={[]} />
      <Carousel />
      <div className="testimonialsContainer">
        {Testimonials.map((testimonial) => {
          return (
            <div className="testimonialContainer">
              <div className="testimonial">"{testimonial.testimonial}"</div>
              <div className="testimonialAuthor">-{testimonial.author}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TestimonialsPage;
