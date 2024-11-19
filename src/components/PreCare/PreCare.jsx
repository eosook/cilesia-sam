import "./PreCare.scss";

export default function PreCare() {
  return (
    <div className="care precare">
      <div className="care__header">
        <h1 className="care__title">Pre-care</h1>
        <h3 className="care__subtitle">Prepare for your lash appointment</h3>
      </div>
      

      <h2 className="care-section__title">Clean Natural Lashes</h2>
      <p className="care-section__body">
        Please arrive on time with clean eyelashes to ensure long lasting and
        healthy lash extensions. Make sure to have absolutely NO eye makeup on
        the day of your appointment, including mascara, eyeshadow, eyeliner, and
        false strip lashes. Time taken to remove makeup will result in shortened
        application time.
      </p>
      <h2 className="care-section__title">No Caffeine</h2>
      <p className="care-section__body">
        Avoid caffeine or energy drinks at minimum 4 hours prior to the
        appointment as it may cause eye twitching, which makes it difficult to
        apply eyelash extensions. This may result in less than optimal fullness
        due to difficulty of application.
      </p>
      <h2 className="care-section__title">No Contact Lenses</h2>
      <p className="care-section__body">
        Contact lenses should be removed prior to eyelash application due to
        potential risk of abrasion or contact with adhesive.{" "}
      </p>
    </div>
  );
}
