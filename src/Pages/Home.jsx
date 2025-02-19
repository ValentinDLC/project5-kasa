import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";
import "../assets/sass/Pages/Home.scss";
import { homeBanner } from "../Data/BannerData.js";

function Home() {
  return (
    <>
      <Banner {...homeBanner} />
      <div className="cards-container">
        <Cards
          renderCard={(card) => (
            <Link to={`/apartment/${card.id}`} key={card.id}>
              <div className="card">
                <img src={card.cover} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
            </Link>
          )}
        />
      </div>
    </>
  );
}

export default Home;
