import React from "react";
import Card from "./card";

const cardListData = [
  {
    userName: "gopDev_",
    id: 1,
    followers: 1483,
    totalFollower: 12,
    icon: "images/icons8-facebook.svg",
    name: "facebook",
  },
  {
    userName: "gopDev_",
    id: 2,
    followers: "28k",
    totalFollower: 20,
    icon: "images/icons8-twitter.svg",
    name: "twitter",
  },
  {
    userName: "gopDev_",
    id: 3,
    followers: "18k",
    totalFollower: 30,
    icon: "images/icons8-instagram.svg",
    name: "instagram",
  },
  {
    userName: "gopDev_",
    id: 4,
    followers: "12k",
    totalFollower: -50,
    icon: "images/icons8-youtube-play.svg",
    name: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {/* {cardListData.map(
            ({ userName, id, followers, totalFollower, icon }) => (
              <Card
                key={id}
                userName={userName}
                followers={followers}
                totalFollower={totalFollower}
                icon={icon}
              />
            )
          )} */}
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
            // con spread_operator
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
