import React from "react";

import Banner from "../../components/banner/banner";

import AdditionalFees from "../../assets/Information/additonalFees";

import "./pricing.styles.scss";

const PricingPage: React.FC = () => {
  return (
    <div>
      <Banner
        title={"Pricing"}
        subtitle=""
        subtitle2={["Affordable", "transparent"]}
      />
      <div className="sectionContainer">
        <div className="sectionHeading">Pricing Mission</div>
        <div className="sectionContent">
          {" "}
          We have two missions when it comes to our pricing. First, we want to
          lower the barrier of entry for people to begin their martial arts
          journey by having the most{" "}
          <span className="underline">affordable</span> prices in town WITHOUT
          compromising on value and quality . Second, we seek to be{" "}
          <span className="underline">transparent</span> with our pricing. We
          hate it (and suspect you do too) when businesses try to hide how
          expensive something is going to be. As is the case with many sports,
          tuition is not the only cost you can expect, and we’ve done our honest
          best to list any other things you can expect to pay for here.
        </div>
      </div>
      <div className="sectionContainer">
        <div className="sectionHeading">Tuition</div>
        <div className="sectionContent">
          $50.00/month. No annual contract. Contact us to set up your{" "}
          <span className="bold">TWO FREE TRIAL CLASSES! </span>
        </div>
      </div>
      <div className="sectionContainer">
        <div className="sectionHeading">Additional Fee's</div>
        <div className="sectionContent">
          {AdditionalFees.map((item) => {
            return (
              <div className="feesContainer">
                <div className="feeNumber">{item.id}.</div>
                <div className="feeName"> {item.name}:</div>
                <div className="feeDescription">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
