import "./FAQ.scss";
import Question from "../../components/Question/Question";

export default function FAQ() {
  return (
    <main>
      <div className="questions">
        <h1 className="questions__hero">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="questions-list">
          <Question
            question={"What is your availability and how do I book?"}
            answer={
              "You can find my availability on the booking page. You may also contact me by email or by phone - my contact information is included in the contact page. "
            }
          />
          <Question
            question={"Where are you located? "}
            answer={
              "I am located in Richmond within a 10 minute walking distance to Steveston Village. My exact address will be provided once I confirm your appointment."
            }
          />
          <Question
            question={"How long does the appointment take?"}
            answer={
              "The length of the appointment will depend on the service you choose. Full sets range between 2.5-3 hour of application time. Fills range between 1.5-2 hours of application time. "
            }
          />
          <Question
            question={"What payment methods do you accept?"}
            answer={"I accept e-transfer or cash."}
          />
          <Question
            question={"Will eyelash extensions damage my natural lashes?"}
            answer={
              "No, eyelash extensions do not damage your natural lashes. I take great care in choosing the proper weight and length of extensions to ensure no damage occurs to the clients natural lashes."
            }
          />
          <Question
            question={"How long will my eyelash extensions last?"}
            answer={
              "A full lash grown cycle happens between 45-60 days. We typically shed a few lashes naturally everyday. For the health of your natural lashes, it is highly recommended that you book your lash fill within 3 weeks of your initial appointment.  "
            }
          />
          <Question
            question={"How do I remove my eyelash extensions?"}
            answer={
              "You should not attempt to remove your own eyelash extensions. They are strongly bonded to your natural lashes and require a special remover to dissolve the glue. If you attempt to remove them yourself, you risk damaging you natural lashes. Please see a professional or contact me to remove your eyelash extensions."
            }
          />
        </div>
      </div>
    </main>
  );
}
