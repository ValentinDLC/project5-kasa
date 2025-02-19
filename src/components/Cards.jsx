import React, { useState } from "react";
import { Link } from "react-router-dom";
import logementsData from "../data/logements.json"; // Importation directe
import "../assets/sass/Components/Cards.scss";

function Cards() {
  const [apartments] = useState(logementsData); // Initialisation directe

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Link
          key={apartment.id}
          to={`/apartment/${apartment.id}`}
          className="location"
        >
          <img src={apartment.cover} alt={apartment.title} />
          <div className="apartment_subtitle">{apartment.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;