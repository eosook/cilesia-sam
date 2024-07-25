import "./WhoWeAre.scss";
import photo from "../../assets/images/studio.png";

export default function WhoWeAre() {
  return (
    <section className="home-section">
      <div className="home-section__div">
        <h3 className="home-section__subtitle">WHO WE ARE</h3>
        <h2 className="home-section__title">SAMANTHA, OWNER</h2>
        <p className="home-section__body">
          Welcome! I’m Sam — the proud owner of Celisia Beauty Bar. Believe it
          or not, my journey into this industry was rooted from having a
          not-so-great experience with my very first set of brows. From there, I
          dove deep into the fascinating world of permanent makeup. At that
          time, it was almost impossible to find an artist or resource that was
          able to explain the procedure step-by-step. That’s when I knew I
          wanted to step in and fill that void. I yearned to be a fountain of
          knowledge and share my skills to enhance the confidence of my clients.
          In addition to offering industry-leading brow and lip services, I
          specialize in private, two-day training for both brows and lips.
        </p>
        <button className="home-section__button">VIEW OUR TRAINING</button>
      </div>
      <img className="home-section__photo" src={photo} alt="Some Picture"></img>
    </section>
  );
}
