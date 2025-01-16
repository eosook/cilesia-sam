import "./HomePage.scss";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Reviews from "../../components/Reviews/Reviews";
import ReadyToBook from "../../components/ReadyToBook/ReadyToBook";
import arrow from "../../assets/images/white-right-arrow.png";
import { useNavigate } from "react-router-dom";
import HomeAdditions from "../../components/HomeAdditions/HomeAdditions";

export default function HomePage() {
  const navigate = useNavigate();
  const toBooking = () => {
    navigate("/book");
    window.scrollTo(0, 0);
  };


  return (
    <main className="home">
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Make your lash </h1>
          <h1 className="hero__title--indent">
            dreams a <span className="hero__span">reality.</span>
          </h1>
          <button className="hero__button" onClick={toBooking}>
            Book Now
          </button>
          <h2 className="hero__subtitle">Cilesia Beauty Bar</h2>
        </div>
      </div>
      <WhatWeDo />
      <Reviews />
      <WhoWeAre />
      <HomeAdditions />
    </main>
  );
}
