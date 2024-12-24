import "./ServiceAddOns.scss";

export default function ServiceAddOns({side, title, body}){
    if (side == "left") {
        return (
          <section className="service-add-ons service-add-ons-left">
            <div className="service-add-ons__text">
              <h2 className="service-add-ons__title">{title}</h2>
              <p className="service-add-ons__body">{body}</p>
            </div>
          </section>
        );
      } else {
        return (
          <section className="service-add-ons service-add-ons-right">
            <div className="service-add-ons__text">
              <h2 className="service-add-ons__title">{title}</h2>
              <p className="service-add-ons__body">{body}</p>
            </div>
          </section>
        );
      }
}