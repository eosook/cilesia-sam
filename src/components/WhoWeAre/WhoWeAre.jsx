import "./WhoWeAre.scss";
import photo from "../../assets/images/Samanth_Owner.png";
import visibleOnScreen from "../../Observer";
import React, { useRef } from "react";

export default function WhoWeAre() {
  const refs = [useRef(), useRef(), useRef()];
  const isVisible = visibleOnScreen(refs);

  return (
    <section className="home-section">
      <div className="home-section__div">
        <h3 key={0}
        ref={refs[0]}
        className={
          isVisible
            ? "home-section__subtitle animation__image"
            : "home-section__subtitle"
        }>Richmond + Vancouver Lash Artist</h3>
        <h2 className="home-section__title owner__title">SAMANTHA, OWNER</h2>
        <p className="home-section__body">
          Welcome to Cilesia Beauty Bar, where we believe in empowering women
          through stunning lashes and a touch of creativity! I'm Samantha, the
          proud owner and founder of Cilesia Beauty Bar.
        </p>
        <p className="home-section__body">
          After years of chasing corporate dreams that left me feeling
          unfulfilled, I decided to take a leap of faith and turn my passion for
          beauty and creativity into a thriving business. Cilesia Beauty Bar was
          born out of a desire to break free from the endless corporate chase
          and create something meaningful for myself and others.
        </p>
        <p className="home-section__body">
          What inspires me most is seeing the transformation in women's
          confidence when they leave our salon with beautifully done lashes.
          It's more than just enhancing outer beauty; it's about helping women
          feel empowered, confident, and ready to conquer the world.
        </p>
      </div>
      <img className="home-section__photo" src={photo} alt="Cilesia Owner Photo"></img>
    </section>
  );
}
