import "./HomePage.scss";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Reviews from "../../components/Reviews/Reviews";
import ReadyToBook from "../../components/ReadyToBook/ReadyToBook";
import arrow from "../../assets/images/white-right-arrow.png";

export default function HomePage() {
  const toBooking = () => {
    location.href="https://book.squareup.com/appointments/vp26zekhc1y452/location/L91FW9Z6QEKDK/services"
  }
  return (
    <main className="home">
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Make your lash dreams a <span className="hero__span">reality.</span></h1>
          <button className="hero__button" onClick={toBooking}><img className="hero__button--image" src={arrow}></img>Book Now</button>
          <h2 className="hero__subtitle">Cilesia Beauty Bar</h2>
        </div>
      </div>
      <WhatWeDo />
      <Reviews />
      <WhoWeAre />
      <div className="home__seperate"></div>
      <ReadyToBook />
    </main>
  );
}
