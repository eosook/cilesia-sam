import "./Book.scss";
import ToBooking from "../../components/ToBooking/ToBooking";
import { useState, useEffect } from "react";
import Policy from "../../components/Policy/Policy";
import PreCare from "../../components/PreCare/PreCare";
import AfterCare from "../../components/AfterCare/AfterCare";

export default function Book() {
  const [book, setBook] = useState(false);

  //   useEffect(() => {
  //     const script = document.createElement('script');

  //     script.src = "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js";
  //     script.async = true;

  //     document.body.appendChild(script);
  // }, []);

  useEffect(() => {
    setBook(false);
  }, []);
  return (
    <main className="book">
      {book ? (
        <ToBooking
          url={
            "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js"
          }
        />
      ) : null}
      <div className="book__hero">
        <h1 className="book__title">Book</h1>
        <p className="book__body">
          Please ensure that you read through the booking policies prior to
          booking! If you are a new client, please complete the new client
          intake form <a href="">here</a>
        </p>
        <button className="book__button" onClick={() => setBook(true)}>
          Book Now
        </button>
      </div>

      <Policy />
      <div className="care-sections">
        <PreCare />
        <AfterCare />
      </div>
    </main>
  );
}
