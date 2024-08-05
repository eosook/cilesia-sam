import "./Question.scss";
import { useState } from "react";
import rightArrow from "../../assets/images/right-arrow.png";
import downArrow from "../../assets/images/down-arrow.png";

export default function Question({ question, answer }) {
  const [visible, setVisible] = useState(false);

  function showAnswer() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <section className="question-box">
      <div className="question" onClick={showAnswer}>
        <img
          className={visible ? "question__down-arrow" : "question__right-arrow"}
          src={visible ? downArrow : rightArrow}
        ></img>
        <h2 className="question__text">{question}</h2>
      </div>
      <div className={visible ? "answer__visible" : "answer"}>
        <p className="answer__text">{answer}</p>
      </div>
    </section>
  );
}
