import React from "react";
import "./css/card.css";

function Card(props) {
  // console.log(props.name);

  const cardClass = `card ${props.name}`;

  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={props.icon} alt="" />@{props.userName}
      </p>
      <p className="card__followers">
        <span className="card__followers-number">{props.followers}</span>
        <span className="card__followers-title"> Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icons8-clasificar-arriba-50.png" alt="" />
        {props.totalFollower} Today
      </p>
    </article>
  );
}

export default Card;
