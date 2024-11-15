import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.scss";

export default function Contact() {

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) {
        newWindow.opener = null
    }
  }
  
  return (
    <main className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__body">
          Do you have questions about your eyelash extensions? Feel free to send me a message on IG via <a className="ready-to-book__link" onClick={() => openNewTab("https://www.instagram.com/cilesia.beautybar/")}>@cilesiabeautybar</a> or fill out the form here! 
        </p>
        <p className="contact__body">
          You can look at available appointments online and book your appointment via the ‘Book’ tab. 
        </p>
        <div className="contact__info">
          <div>Located in Richmond near Steveston</div>
          <div>cilesiabeautybar@gmail.com</div>
          <div>778-316-5982</div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
