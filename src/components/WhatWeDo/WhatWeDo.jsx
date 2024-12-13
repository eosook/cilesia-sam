import "./WhatWeDo.scss";
import photo from "../../assets/images/Elevate Your Everyday.png";

export default function WhatWeDo() {
  const toBooking = () => {
    location.href="http://localhost:5173/services"
  }
  return (
    <section className="home-section">
      <img className="home-section__photo" src={photo} alt="Some Picture"></img>
      <div className="home-section__div">
        <h3 className="home-section__subtitle">Luxurious Lash Extensions</h3>
        <h2 className="home-section__title">Elevate your every day</h2>
        <p className="home-section__body">
          Imagine waking up every morning with effortlessly stunning lashes that
          enhance your natural beauty. Make this dream your reality. Say goodbye
          to clumpy mascara and hello to long, voluminous lashes that last for
          weeks.
        </p>
        <p className="home-section__body">
          Our high-quality extensions are meticulously applied by skilled
          technicians to achieve your desired look, whether it's a subtle boost
          for everyday elegance or a dramatic flair for special occasions. Not
          only do they save you time on your makeup routine, but they also give
          you the confidence to face the day feeling beautiful and empowered.
        </p>
        <p className="home-section__body">
          Experience the convenience of flawless lashes that withstand water,
          sweat, and tears without smudging or flaking. Plus, with our
          customizable options, you can choose the length, curl, and thickness
          that suit your style perfectly.
        </p>
        <button className="home-section__button" onClick={toBooking}>Find Your Style</button>
      </div>
    </section>
  );
}
