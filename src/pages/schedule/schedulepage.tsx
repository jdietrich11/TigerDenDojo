import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import ApiCalendar from "react-google-calendar-api";

import Banner from "../../components/banner/banner";

import "./schedules.styles.scss";

// const config = {
//   clientId: "",
//   apiKey: "AIzaSyD-UVPBRzOnkBq133qsiky3KpLN1qOtl1Y",
//   scope: "https://www.googleapis.com/auth/calendar",
//   discoveryDocs: [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//   ],
// };

// const apiCalendar = new ApiCalendar(config);

const SchedulePage: React.FC = () => {
  const position = { lat: 40.158408968849436, lng: -111.597738394804 };

  return (
    <div>
      <Banner title={"Schedule"} subtitle="" subtitle2={[]} />
      <div className="infoContainer">
        <div className="infoSection">
          <div>Tuesday, Wednesday, Thursday</div>
          <ul className="list">
            <li>5:30-6:20 (ages 6-10)</li>
            <li>6:30-7:20 (ages 11-17)</li>
            <li>7:30-8:30 (ages 18+)</li>
          </ul>
        </div>
        <div className="infoSection">
          Clases held at Kolob park in springville (600 S 700 E) April-November
          (weather permitting)
        </div>
      </div>
      <div className="classSpaceContainer">
        <div>Class space limited!</div>
        <div className="spaceUnderline">
          Call ahead to schedule your two free trial classes!
        </div>
      </div>
      <div className="map">
        <APIProvider apiKey={"AIzaSyD-UVPBRzOnkBq133qsiky3KpLN1qOtl1Y"}>
          <Map center={position} zoom={15}>
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
      <div className="questionSection">
        <div className="question">have a question?</div>
        <div
          className="btn"
          onClick={() =>
            (window.location.href = "mailto:tigerdendojo.karate@gmail.com")
          }
        >
          email us!
        </div>
      </div>
      <div className="calendar">
        <iframe
          className="calanderIframe"
          src="https://calendar.google.com/calendar/embed?src=tigerdendojo.karate%40gmail.com&ctz=mt"
        >
          google calander
        </iframe>
      </div>
    </div>
  );
};

export default SchedulePage;
