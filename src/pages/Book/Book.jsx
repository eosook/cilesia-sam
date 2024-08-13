import "./Book.scss";
import { useEffect } from "react";

export default function Book() {
  useEffect(() => {
    var loadScript = function(src){
      var script = document.createElement('script');
      script.async = true;
      script.src = src;
      script.classList.add = "script-container"
      var body = document.getElementsByClassName('script')[0];
      body.appendChild(script);
    }

    loadScript('https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js');
  }, []);

  return (
    <main className="book">
      <div className="book__hero">
        <h1 className="book__title">Book</h1>
        <p className="book__body">
          Please ensure that you read through the booking policies prior to
          booking! If you are a new client, please complete the new client
          intake form <a className="book__link" href="">here</a>
        </p>
      </div>
      <div className="script"></div>
    </main>
  );
}
