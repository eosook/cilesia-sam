import "./Contact.scss";

export default function Contact() {
  return (
    <main className="contact">
      <div className="contact__container">
        <p className="contact__body">
          Do you have questions about eyelash extensions? Had bad past
          experiences and not sure of this is for you? Have questions that
          aren’t answered though the FAQ page? Fill out the form or send me a
          text and I’d be more than happy to chat with you.
        </p>
        <div className="contact__info">
          <div>Located in Richmond near Steveston</div>
          <div>cilesiabeautybar@gmail.com</div>
          <div>778-316-5982</div>
        </div>
      </div>
      <form className="contact__form">
        <input className="contact__input" type="text" placeholder="Name"></input>
        <input className="contact__input" type="text" placeholder="Phone"></input>
        <input className="contact__input" type="text" placeholder="Email"></input>
        <input className="contact__input" type="text" placeholder="Address"></input>
        <input className="contact__input" type="text" placeholder="Message"></input>
        <button className="contact__button" type="submit"></button>
      </form>
    </main>
  );
}
