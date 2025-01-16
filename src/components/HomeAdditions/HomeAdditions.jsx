import "./HomeAdditions.scss";
import complimentaryImage from "../../assets/images/Complimentary Consultation.png";
import cozyImage from "../../assets/images/Cozy Warming Pad.png";
import memoryFoamImage from "../../assets/images/Memory Foam +  Bolster.png";
export default function HomeAdditions() {
  return (
    <div className="additions">
      <div className="additions__section">
        <img src={complimentaryImage} className="additions__image" />
        <h2 className="additions__title">Complimentary Consultation</h2>
        <p className="additions__body">
          Your lash journey begins with a personalized consultation to
          understand your style, preferences, and desired look. Whether you're
          after a natural enhancement or dramatic flair, we’ll work together to
          create a customized plan tailored just for you.
        </p>
      </div>
      <div className="additions__section">
        <img src={cozyImage} className="additions__image" />
        <h2 className="additions__title">Cozy Warming Pad</h2>
        <p className="additions__body">
          Relax and unwind as you enjoy the soothing warmth of our cozy heated
          bed. This gentle heat creates a spa-like experience, keeping you
          comfortable and relaxed throughout your session, no matter how long it
          lasts.
        </p>
      </div>
      <div className="additions__section">
        <img src={memoryFoamImage} className="additions__image" />
        <h2 className="additions__title">Memory Foam Bed + Bolster</h2>
        <p className="additions__body">
          Experience unmatched comfort with our memory foam bed and ergonomic
          bolster. Designed to provide optimal support for your back, neck, and
          legs, these features keep you completely at ease, making your lash
          session as enjoyable as it is effective.
        </p>
      </div>
    </div>
  );
}
