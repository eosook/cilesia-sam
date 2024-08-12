import "./Book.scss";
import ToBooking from "../../components/ToBooking/ToBooking";
import { useState, useEffect } from "react";
// import { postscribe } from "postscribe";

export default function Book() {
  const [book, setBook] = useState(false);
  const [script, setScript] = useState(null);
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js";
  //   script.async = false;

  //   var body = document.getElementsByTagName("main");
  //   body.appendChild(script);

  //   return () => {
  //     body.removeChild(script);
  //   };
  // }, []);
  useEffect(() => {
    var loadScript = function(src){
      var script = document.createElement('script');
      script.async = false;
      script.src = src;
      var body = document.getElementsByTagName('main')[0];
      body.appendChild(script);
    }

    loadScript('https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js');
  }, []);

  useEffect(() => {
    setBook(false);
  }, []);
  return (
    <main className="book">
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
    </main>
  );
}
