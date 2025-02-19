import React from "react";
import AboutBanner from "../components/Banner";
import Collapse from "../components/Collapse";
import aproposData from "../Data/AboutCollapse.json";
import { aboutBanner } from "../Data/BannerData";

function About() {
  return (
    <>
      <AboutBanner {...aboutBanner} />
      <div className="about_container">
        {aproposData.map((item) => (
          <Collapse
            key={item.id}
            title={item.titre}
            content={item.description}
            variant="about"
          />
        ))}
      </div>
    </>
  );
}

export default About;
