import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Answer from "../Answers/Answer";
import AddAnswer from "../Answers/AddAnswer"
import Question from "../Questions/Question";


const AnswerPage = () => {

    const { id } = useParams();
    const { questions } = useContext(QuestionsContext);    
    const { answers } = useContext(AnswersContext);

    const selectedQuestion = questions.find(question => question.id.toString() === id);
    
    const selectedQuestionAnswers = answers.filter(answer => answer.questionId.toString() === id);

    return (
      <>
      <Question data={selectedQuestion}/>
      <div>
            {
                selectedQuestionAnswers.map((answer, index) =>
                <Answer
                   key={answer.id || index}
                   data={answer}
                   />
                )
            }
        </div>
     
      <AddAnswer />
      
      </>
    );
  }
   
  export default AnswerPage;