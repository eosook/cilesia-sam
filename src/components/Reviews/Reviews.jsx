import "./Reviews.scss";
import reviewsImage from "../../assets/images/Web Reviews - BLANK.png";

export default function Reviews() {
  return (
    <div className="reviews">
      <img src={reviewsImage} className="reviews__image"></img>
      <div className="reviews__section">
        <div className="review">
          <div className="review__comment">
            A Lovely experience! Sam is very talented and made me feel super
            comfortable during my appointment. Sam is meticulous and attentive,
            she took the time to understand my preferences and delivered exactly
            what I wanted. I highly recommend Sam to anyone looking for
            top-notch lash services. I'd give her ten stars if I could!!! ^-^
          </div>
          <div className="review__name">Georgia</div>
          <div className="review__style">Wispy Volume Lash Extensions</div>
        </div>
        <div className="review">
          <div className="review__comment">
            Love my lashes. The service I received at Cilesia Beauty Bar
            exceeded all my expectations. I loved everything about my service
            from the friendly and warm greeting at the door to the preparation
            of washing my lashes before application. Everything was relaxing and
            I am so happy with the resuly. I love my Hybrid Wispy Lashes. I
            can't wait to try a Volume set.
          </div>
          <div className="review__name">Rose</div>
          <div className="review__style">Wispy Hybrid Lash Extensions</div>
        </div>
        <div className="review">
          <div className="review__comment">
            Where do I even start. I've been getting lashes for years but I've
            never felt like someone truly understood Asian eyes like Sam does.
            She customizes my lashes to fit my eyes better than anyone I've been
            to. It takes me an hour to drive to her but it is soo worth it. I
            always feel taken care of, plus the leg wedge and blanket make it
            really comfortable to fall asleep.
          </div>
          <div className="review__name">Cynthia</div>
          <div className="review__style">Anime Lash Extensions</div>
        </div>
      </div>
    </div>
  );
}
