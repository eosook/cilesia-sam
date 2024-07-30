import "./ServiceBlock.scss";

export default function ServiceBlock({ side, title, body, image, price, time }) {
    console.log(image);
  if (side == "left") {
    return (
      <section className="service-block">
        <img className="service-block__image" src={image} alt="service image"></img>
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <h3 className="service-block__price">Price: {price}</h3>
          <h3 className="service-block__time">Time: {time}</h3>
          <p>{body}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="service-block">
        <div className="service-block__text">
          <h2 className="service-block__title">{title}</h2>
          <h3 className="service-block__price">Price: {price}</h3>
          <h3 className="service-block__time">Time: {time}</h3>
          <p>{body}</p>
        </div>
        <img className="service-block__image" src={image} alt="service image"></img>
      </section>
    );
  }
}
