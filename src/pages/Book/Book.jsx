import { Navigate, useNavigate } from "react-router-dom";
import "./Book.scss";
import { useEffect } from "react";

export default function Book() {
  const navigate = useNavigate();
  useEffect(() => {
    var loadScript = function (src) {
      var script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.classList.add = "script-container";
      var body = document.getElementsByClassName("script")[0];
      body.appendChild(script);
    };

    loadScript(
      "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js"
    );
  }, []);

  function toPage(page) {
    navigate("/" + page);
    window.scrollTo(0, 0);
  }
  return (
    <main className="book">
      <div className="book__hero">
        <div className="book__image">
          <h1 className="book__title">Book</h1>
          <p className="book__body">
            Please ensure that you read through the booking{" "}
            <span className="book__link" onClick={() => toPage("policy")}>
              policies
            </span>{" "}
            and <span className="book__link" onClick={() => toPage("care")}>care </span>
            instructions prior to booking! If you have any questions, please
            feel free to <span className="book__link" onClick={() => toPage("contact")}>contact</span> me.
          </p>
        </div>
      </div>
      <div className="script"></div>
    </main>
  );
}
