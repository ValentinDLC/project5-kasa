import React from "react";
import "../assets/sass/Components/Apartment_Head.scss";
import SuperStar from "../assets/images/star-rate.svg";
import Star from "../assets/images/emptystar(1).svg";

function Apartment_Head({
  selectedCards: { title, location, tags, host, rating },
}) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="apartment_head">
      <div className="apartment-rental_title">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="apartments_tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h3 className="name">{host.name}</h3>
          <div className="apartment_owner_badge">
            <img src={host.picture} alt="facepic" />
          </div>
        </div>
        <div className="apartment_owner_stars">
          {stars.map((level) =>
            rating >= level ? (
              <img
                key={level.toString()}
                className="star"
                src={SuperStar}
                alt="rating star"
              />
            ) : (
              <img
                key={level.toString()}
                className="star"
                src={Star}
                alt="rating star"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Apartment_Head;
