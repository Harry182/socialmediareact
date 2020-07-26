import React from "react";
import "./css/cardsmall.css";

function CardSmall(props) {
  return (
    <div className="card__small">
      <p className="card__small-views">Page Views</p>
      <p className="card__small-icon">
        <img src={props.icon} alt="" />
      </p>
      <p className="card__small-number">{props.pageViews}</p>
      <p className="card__small-percentage">
        <span>
          <img src="images/icons8-clasificar-arriba-50.png" alt="" />
          {props.growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
