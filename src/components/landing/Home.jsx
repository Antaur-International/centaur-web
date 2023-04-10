import React from "react";

export default function Home() {
  return (
    <div className="page_body_home" id="home">
      <div className="body_home_leftSec">
        <h1>
          Management <br /> Made <span style={{ color: "#4FFF40" }}>Easy</span>
        </h1>
        <p>
          Platform that enables an institution to manage their day-to-day
          activities.
        </p>
      </div>
      <div
        className="body_home_rightSec"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bgHome.png)`,
        }}
      >
        <img src="/centaur-web/images/mockup01.png" alt="" />
      </div>
    </div>
  );
}
