import { Link } from "react-router-dom";
import couch from "../../../Assets/couch.png";
import calender from "../../../Assets/calender.png";
import giftPhone from "../../../Assets/gift-phone.png";
import "./HomePage.scss";

function HomePage() {
  return (
    <main className="home">
      <div className="home__main-container">
        <div className="home__main-container__left">
          <h1 className="home__main-container__left__title">
            Where heartfelt gifting meets perfect harmony.
          </h1>
          <p className="home__main-container__left__para">
            An app designed to keep you on top of your loved ones upcoming
            birthdays, where you can effortlessly select the perfect gift.
          </p>
          <Link to={"/signup"}>
            <button className="home__main-container__left__btn">
              Sign Me Up
            </button>
          </Link>
        </div>
        <div className="home__main-container__right">
          <div className="home__main-container__right__image-container">
            <img
              className="home__main-container__right__image-container__image"
              src={giftPhone}
              alt="gift pic"
            />
          </div>
        </div>
      </div>
      <div className="home__content-container">
        <p className="home__content-container__text">
          Never miss your loved one's special day. Easily keep track of upcoming
          birthdays and pick out the perfect gift hassle-free.
        </p>
        <div className="home__content-container__image-container">
          <img
            className="home__content-container__image-container__image"
            src={calender}
            alt="gift pic"
          />
        </div>
        <div className="home__content-container__image-container">
          <img
            className="home__content-container__image-container__image"
            src={couch}
            alt="gift pic"
          />
        </div>
        <p className="home__content-container__text">
          No more unwanted gifts that keep piling up. Giftune relieves the
          tension within families and relationships.
        </p>
      </div>
    </main>
  );
}

export default HomePage;
