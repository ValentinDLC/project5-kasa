import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/Components/Cards.scss";

function Cards() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/logements.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setApartments(data))
      .catch((error) => console.error("Error fetching data:", error));
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