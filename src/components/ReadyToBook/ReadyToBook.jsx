import { useNavigate } from "react-router-dom";
import "./ReadyToBook.scss";

export default function ReadyToBook() {
  const navigate = useNavigate();

  const toBooking = () => {
    navigate("./book");
    window.scrollTo(0, 0);
  }

  const toContact = () => {
    navigate("./contact")
    window.scrollTo(0, 0);
  }

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) {
        newWindow.opener = null
    }
  }

  return (
    <section className="ready-to-book">
      <div className="ready-to-book__div">
        <h3 className="ready-to-book__subtitle">let's chat</h3>
        <h2 className="ready-to-book__title">
          ready to book your last appointment?
        </h2>
      </div>
      <div className="ready-to-book__div">
        <p className="ready-to-book__body">
          Searching for a reliable and skilled lash artist in Vancouver can be
          challenging, and we totally get it.{" "}
          <a className="ready-to-book__link" onClick={() => openNewTab("https://www.instagram.com/cilesia.beautybar/")}>Check out our Instagram</a> or {" "}
          <a className="ready-to-book__link" onClick={toContact}>reach out</a> to Cilesia Beauty Bar for any inquiries. Ready to
          elevate your lash look? Schedule your appointment today!
        </p>
        <button className="ready-to-book__button" onClick={toBooking}>
          book today
        </button>
      </div>
    </section>
  );
}
