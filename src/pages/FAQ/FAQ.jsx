import './FAQ.scss'
import Question from '../../components/Question/Question'

export default function FAQ(){
    return (
        <main>
            <div className="questions">
                <h1 className="questions__header">FAQ</h1>
                <Question question={"WHATS MY NAME"} answer={"EO SOO"}/>
                <Question question={"WHATS MY NAME"} answer={"ANDREW"}/>
                <Question question={"WHATS MY NAME"} answer={"EO SOO"}/>
                <Question question={"WHATS MY NAME"} answer={"EO SOO"}/>
            </div>
        </main>
    )
}