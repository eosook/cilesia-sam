import "./BookingPolicy.scss";

export default function BookingPolicy() {
  return (
    <div className="policy">
      <section className="policy__header">
        <h2 className="home-info__header">Booking Policy:</h2>
        <p>Please read carefully before booking!</p>
      </section>

      {/* Contains the studio information section */}

      <section className="home-info__section">
        <h2 className="home-info__header">Studio Information:</h2>
        <p className="home-info__body">
          Our studio is based at home, and we share it with two friendly dogs
          who might say hello from afar! Although they'll be kepy in a seperate
          area during your visit, you may hear some barking. Please ensure you
          have any necessary allergy medication with you. We maintain a clean
          environment by regularly vacuuming and sanitizing the studio. Rest
          assured, the dogs are not permitted inside the studio space.
        </p>
      </section>
      <section className="home-info__section">
        <h2 className="home-info__header">Appointment Bookings:</h2>
        <p className="home-info__body">
          All clients are required to send a $30 non-refundable deposit (send to{" "}
          <span>cilesiabeautybar@gmail.com</span>) to secure the booking. Please
          send a screenshot of the e-transfer to confirm the appointment. If the
          deposit is not received within 24 hours, the appointment will
          automatically be cancelled.
        </p>
      </section>
      <section className="home-info__section">
        <h2 className="home-info__header">Cancellations and Rescheduling:</h2>
        <p className="home-info__body">
          Please provide at minimum 48 hours notice for any cancellations or
          reschedules. Deposits are only valid for transfer once.
        </p>
        <p className="home-info__body">
          Cancellations within 48 hours will result in forfeiture of the
          deposit, as well as a charge for 50% of the service booked. Failure to
          send payment will prevent future bookings.
        </p>
      </section>
      <section className="home-info__section">
        <h2 className="home-info__header">No Refunds:</h2>
        <p className="home-info__body">
          We do not offer refunds on any services rendered. However, we value
          your satisfaction and aim to provide exceptional experiences. If you
          are not completely happy with your service, please reach out to us
          within 48 hours so that we can address any concerns and strive to make
          it right for you.
        </p>
      </section>
    </div>
  );
}
