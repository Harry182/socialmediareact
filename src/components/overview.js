import React from "react";
import CardSmall from "./cardSmall";

const cardSmallList = [
  {
    icon: "images/icons8-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 1,
  },
  {
    icon: "images/icons8-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 2,
  },
  {
    icon: "images/icons8-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 3,
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          <CardSmall />
          {/* <div className="card__small">
            <p class="card__small-views">Likes</p>
            <p class="card__small-icon">
              <img src="images/icons8-facebook.svg" alt="" />
            </p>
            <p class="card__small-number">52</p>
            <p class="card__small-percentage is-danger">
              <span>
                <img src="images/icons8-clasificar-abajo-48.png" alt="" />
                2%
              </span>
            </p>
          </div>

          <div class="card__small">
            <p class="card__small-views">Likes</p>
            <p class="card__small-icon">
              <img src="images/icons8-instagram.svg" alt="" />
            </p>
            <p class="card__small-number">5462</p>
            <p class="card__small-percentage">
              <span>
                <img src="images/icons8-clasificar-arriba-50.png" alt="" />
                2257%
              </span>
            </p>
          </div>

          <div class="card__small">
            <p class="card__small-views">Profile Views</p>
            <p class="card__small-icon">
              <img src="images/icons8-instagram.svg" alt="" />
            </p>
            <p class="card__small-number">52k</p>
            <p class="card__small-percentage">
              <span>
                <img src="images/icons8-clasificar-arriba-50.png" alt="" />
                1357%
              </span>
            </p>
          </div>

          <div class="card__small">
            <p class="card__small-views">Retweets</p>
            <p class="card__small-icon">
              <img src="images/icons8-twitter.svg" alt="" />
            </p>
            <p class="card__small-number">117</p>
            <p class="card__small-percentage">
              <span>
                <img src="images/icons8-clasificar-arriba-50.png" alt="" />
                303%
              </span>
            </p>
          </div>

          <div class="card__small">
            <p class="card__small-views">Likes</p>
            <p class="card__small-icon">
              <img src="images/icons8-twitter.svg" alt="" />
            </p>
            <p class="card__small-number">507</p>
            <p class="card__small-percentage">
              <span>
                <img src="images/icons8-clasificar-arriba-50.png" alt="" />
                553%
              </span>
            </p>
          </div>

          <div class="card__small">
            <p class="card__small-views">Likes</p>
            <p class="card__small-icon">
              <img src="images/icons8-youtube-play.svg" alt="" />
            </p>
            <p class="card__small-number">107</p>
            <p class="card__small-percentage is-danger">
              <span>
                <img src="images/icons8-clasificar-abajo-48.png" alt="" />
                19%
              </span>
            </p>
          </div>

          <div class="card__small">
            <p class="card__small-views">Total Views</p>
            <p class="card__small-icon">
              <img src="images/icons8-youtube-play.svg" alt="" />
            </p>
            <p class="card__small-number">147</p>
            <p class="card__small-percentage is-danger">
              <span>
                <img src="images/icons8-clasificar-abajo-48.png" alt="" />
                12%
              </span>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Overview;
