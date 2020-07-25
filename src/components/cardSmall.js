import React from "react";
import Card from "./card";
import "./css/cardsmall.css";

function CardSmall() {
  return (
    <div className="card__small">
      <p className="card__small-views">Page Views</p>
      <p className="card__small-icon">
        <img src="images/icons8-facebook.svg" alt="" />
      </p>
      <p className="card__small-number">87</p>
      <p className="card__small-percentage">
        <span>
          <img src="images/icons8-clasificar-arriba-50.png" alt="" />
          3%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
