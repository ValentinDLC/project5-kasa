import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/Components/Cards.scss";

function Cards() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }, []);

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
