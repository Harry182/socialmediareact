import React from "react";
import CardSmall from "./cardSmall";
import "./css/overview.css";

const cardSmallList = [
  {
    icon: "images/icons8-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 1,
  },
  {
    icon: "images/icons8-twitter.svg",
    pageViews: "52",
    growth: 2257,
    key: 2,
  },
  {
    icon: "images/icons8-instagram.svg",
    pageViews: "5462",
    growth: 1375,
    key: 3,
  },
  {
    icon: "images/icons8-youtube-play.svg",
    pageViews: "52k",
    growth: 303,
    key: 4,
  },
  // {
  //   icon: "images/icons8-facebook.svg",
  //   pageViews: "117",
  //   growth: 303,
  //   key: 5,
  // },
  // {
  //   icon: "images/icons8-facebook.svg",
  //   pageViews: "507",
  //   growth: 303,
  //   key: 6,
  // },
  // {
  //   icon: "images/icons8-facebook.svg",
  //   pageViews: "107",
  //   growth: 19,
  //   key: 7,
  // },
  // {
  //   icon: "images/icons8-facebook.svg",
  //   pageViews: "147",
  //   growth: 12,
  //   key: 8,
  // },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map((cardDataSmall) => (
            <CardSmall {...cardDataSmall} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
