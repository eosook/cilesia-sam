import "./Book.scss";
import ToBooking from "../../components/ToBooking/ToBooking";
import { useState, useEffect } from "react";

export default function Book() {
  const [book, setBook] = useState(false);

  useEffect(() => {
    setBook(false);
  }, []);
  return (
    <main>
      {book ? (
        <ToBooking
          url={
            "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js"
          }
        />
      ) : null}
      <h1>Book</h1>
      <p>
        Please ensure that you read through the booking policies prior to
        booking! If you are a new client, please complete the new client intake
        form here ← hyperlink to consent form
      </p>
      <button onClick={() => setBook(true)}>Book Now</button>
    </main>
  );
}
