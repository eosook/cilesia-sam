import "./ServiceBlock.scss";

export default function ServiceBlock({ side, title, body, image }) {
  if (side == "left") {
    return (
      <section className="service-block-left">
        <img className="service-block__image" src={image} alt="service image"></img>
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <p className="service-block__body">{body}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="service-block-right">
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <p className="service-block__body">{body}</p>
        </div>
        <img className="service-block__image" src={image} alt="service image"></img>
      </section>
    );
  }
}
