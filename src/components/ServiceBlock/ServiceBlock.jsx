import "./ServiceBlock.scss";
import { useState, useEffect } from "react";

export default function ServiceBlock({ side, title, body, image }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile){
    return (
      <section className="service-block service-block-left">
        <div className="service-block__image--container">
          <img
            className="service-block__image"
            src={image}
            alt="service image"
          ></img>
        </div>
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <p className="service-block__body">{body}</p>
        </div>
      </section>
    );
  }

  if (side == "left") {
    return (
      <section className="service-block service-block-left">
        <div className="service-block__image--container">
          <img
            className="service-block__image"
            src={image}
            alt="service image"
          ></img>
        </div>
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <p className="service-block__body">{body}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="service-block service-block-right">
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <p className="service-block__body">{body}</p>
        </div>
        <div className="service-block__image--container">
          <img
            className="service-block__image"
            src={image}
            alt="service image"
          ></img>
        </div>
      </section>
    );
  }
}
