import "./Reviews.scss";
import reviewsImage from "../../assets/images/What others are saying - BLANK.png";
import star from "../../assets/images/star.png";
import { useState } from "react";

export default function Reviews() {
  const isMobile = window.innerWidth <= 768;
  const [reviewCount, setReviewCount] = useState(1);
  return (
    <div className="reviews">
      <div className="reviews__background"></div>
      <div className="reviews__section">
        <h2 className="reviews__header">What Others are Saying</h2>
        <div id="review-1" className="review">
          <div className="review__comment">
            A Lovely experience! Sam is very talented and made me feel super
            comfortable during my appointment. Sam is meticulous and attentive,
            she took the time to understand my preferences and delivered exactly
            what I wanted. I highly recommend Sam to anyone looking for
            top-notch lash services. I'd give her ten stars if I could!!! ^-^
          </div>
          <div className="review__stars">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <div className="review__name">Georgia</div>
          <div className="review__style">Wispy Volume Lash Extensions</div>
        </div>
        <div id="review-2" className="review">
          <div className="review__comment">
            Love my lashes. The service I received at Cilesia Beauty Bar
            exceeded all my expectations. I loved everything about my service
            from the friendly and warm greeting at the door to the preparation
            of washing my lashes before application. Everything was relaxing and
            I am so happy with the resuly. I love my Hybrid Wispy Lashes. I
            can't wait to try a Volume set.
          </div>
          <div className="review__stars">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <div className="review__name">Rose</div>
          <div className="review__style">Wispy Hybrid Lash Extensions</div>
        </div>
        <div id="review-3" className="review">
          <div className="review__comment">
            Where do I even start. I've been getting lashes for years but I've
            never felt like someone truly understood Asian eyes like Sam does.
            She customizes my lashes to fit my eyes better than anyone I've been
            to. It takes me an hour to drive to her but it is soo worth it. I
            always feel taken care of, plus the leg wedge and blanket make it
            really comfortable to fall asleep.
          </div>
          <div className="review__stars">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <div className="review__name">Cynthia</div>
          <div className="review__style">Anime Lash Extensions</div>
        </div>
      </div>
    </div>
  );
}
