import React from "react";
export default function Card(props) {
  let { title, price, coverImg, stats, location, openSpots } = props;
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + "/images/" + coverImg}
        alt="swimming"
        className="card-image"
      />
      <div className="card-details">
        <img
          src={process.env.PUBLIC_URL + "/images/Star 1.png"}
          alt="star"
          className="card-star"
        />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) • </span>
      </div>

      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From {price}</span> / person
      </p>
    </div>
  );
}
