import './Question.scss'
import { useState } from 'react'

export default function Question({question, answer}){
    const [visible, setVisible] = useState(false);

    function showAnswer(){
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return (
        <section className="question-box">
            <div className="question" onClick={showAnswer}><h2 className="question__text">{question}</h2></div>
            <div className={(visible) ? "answer__visible" : "answer"}><p className="answer__text">{answer}</p></div>
        </section>
    )
}