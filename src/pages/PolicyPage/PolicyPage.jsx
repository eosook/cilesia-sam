import "./PolicyPage.scss";
import { useNavigate } from "react-router-dom";

export default function PolicyPage() {
  const navigate = useNavigate();

  const toBooking = () => {
    navigate("/book");
    window.scrollTo(0, 0);
  }

  return (
    <main>
      <div className="policy">
        <h1 className="policy__title">Policy</h1>
        <div className="policy-list">
          <section className="policy-section">
            <h2 className="policy-section__title">Studio Information</h2>
            <p className="policy-section__body">
              Our studio is based at home, and we share it with two friendly
              dogs who might say hello from afar! Although they’ll be kept in a
              separate area during your visit, you may hear some barking. Rest
              assured the dogs are not permitted inside the studio space.{" "}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__title">Appointment Bookings</h2>
            <p className="policy-section__body">
              Deposits are no longer required. To book your first appointment,
              please use the <span className="ready-to-book__link" onClick={toBooking}>Book Now</span> page so your information can be properly
              recorded in the system. After booking, the system will
              automatically send you a policy form via email. Please review and
              sign it prior to your appointment.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__title">
              Cancellations and Rescheduling
            </h2>
            <p className="policy-section__body">
              Please provide at minimum 48 hours notice for any cancellations or
              reschedules. Deposits are only valid for transfer once.
            </p>
            <p className="policy-section__body">
              Cancellations within 48 hours will result in forfeiture of the
              deposit, as well as a charge for 50% of the service booked.
              Failure to send payment will prevent future bookings.{" "}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__title">No Refunds</h2>
            <p className="policy-section__body">
              We do not offer refunds on any services rendered. However, we
              value your satisfaction and aim to provide exceptional
              experiences. If you are not completely happy with your service,
              please reach out to us within 48 hours so that we can address any
              concerns and make it right for you
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__title">Tardiness</h2>
            <p className="policy-section__body">
              Please arrive on time. 15+ minutes late will result in
              cancellation of your appointment and 50% of the service charged.{" "}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__title">No Guests</h2>
            <p className="policy-section__body">
              Please no children, no pets, or guests at your appointment due to
              the lengthy procedure time which can be uncomfortable and
              distracting for your guest(s) and for myself as the artist.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__title">Parking</h2>
            <p className="policy-section__body">
              Please avoid parking in my driveway. There is free street parking
              available.{" "}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
