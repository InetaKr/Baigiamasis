import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Answers from "../Answers/Answers";
import AddAnswer from "../Answers/AddAnswer"
import Question from "../Questions/Question";


const AnswerPage = () => {

    const { id } = useParams();
    const { questions } = useContext(QuestionsContext);    
    const { answers } = useContext(AnswersContext);

    const selectedQuestion = questions.find(question => question.id.toString() === id);
    
    const selectedQuestionAnswers = answers.filter(answer => answer.questionId === id);

    return (
      <>
      <Question data={selectedQuestion}/>
      <Answers answers={selectedQuestionAnswers} />
      <AddAnswer />
      
      </>
    );
  }
   
  export default AnswerPage;