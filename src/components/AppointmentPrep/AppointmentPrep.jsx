import "./AppointmentPrep.scss";

export default function AppointmentPrep() {
  return (
    <div className="prep">
      <section className="prep__card">
        <p>
          Please come with clean lashes and makeup free eye area. Time taken to
          remove makeup is time taken away from the appointment, which will
          shorten application time.
        </p>
      </section>
      <section className="prep__card">
        <p>
          Avoid caffeine or energy drinks at minimum 4 hours prior to the
          appointment as it can cause restlessness and fluttery eyes.
        </p>
      </section>
      <section className="prep__card">
        <p>
          Avoid chewing gum and phone use during the appointment as it causes
          your eyes to flutter and may affect lash attachment and retention.
        </p>
      </section>
      <section className="prep__card">
        <p>
          Please arrive on time. 15+ minutes late will result in cancellation of your appointment and 50% of the service charged.
        </p>
        <p>No additional guests allowed.</p>
      </section>
    </div>
  );
}
