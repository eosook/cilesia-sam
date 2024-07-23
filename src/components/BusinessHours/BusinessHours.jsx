import "./BusinessHours.scss";

export default function BusinessHours() {
  return (
    <div className="business-hours">
      <h2 className="business-hours__header">Business Hours:</h2>
      <div className="hours">
        <p className="hours__day">MON-SAT</p>
        <p className="hours__time">11AM - 8PM</p>
      </div>
      <p>All messages and inquiries will be replied to within a timely manner within business hours.</p>
      <div>
        <img alt="car"></img>
        <p>Please avoid parking in the driveway. There is free street parking available.</p>
      </div>
      <div>
        <img alt="payment"></img>
        <p>Cash or e-transfer accepted.</p>
      </div>
    </div>
  );
}
