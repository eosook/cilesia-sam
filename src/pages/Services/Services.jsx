import "./Services";
import ToBooking from "../../components/ToBooking/ToBooking";
import { useState } from "react";

export default function Services() {
  const [book, setBook] = useState(false);
  return (
    <main>
      {book ? (
        <ToBooking
          url={
            "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js"
          }
        />
      ) : null}
      <div>
        <h1>Services</h1>
        <h3>Subtitle</h3>
        <button onClick={() => setBook(true)}>BOOK NOW</button>
      </div>
      <div className="style-list">
        <h2>Meet the lash styles</h2>
      </div>
    </main>
  );
}
