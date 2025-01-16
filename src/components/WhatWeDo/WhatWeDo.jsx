import "./WhatWeDo.scss";
import photo from "../../assets/images/Elevate Your Everyday.png";
import visibleOnScreen from "../../Observer";
import React, { useRef } from "react";

export default function WhatWeDo() {
  const refs = [useRef(), useRef(), useRef()];
  const isVisible = visibleOnScreen(refs);

  return (
    <section className="home-section">
      <img
        key={0}
        ref={refs[0]}
        className={
          isVisible
            ? "home-section__photo animation__image"
            : "home-section__photo"
        }
        src={photo}
        alt="Some Picture"
      ></img>
      <div className="home-section__div">
        <h3
          key={1}
          ref={refs[1]}
          className={
            isVisible
              ? "home-section__subtitle animation__slide"
              : "home-section__subtitle"
          }
        >
          Luxurious Lash Extensions
        </h3>
        <h2
          key={2}
          ref={refs[2]}
          className={
            isVisible
              ? "home-section__title animation__slide"
              : "home-section__title"
          }
        >
          Elevate your every day
        </h2>
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
      </div>
    </section>
  );
}
