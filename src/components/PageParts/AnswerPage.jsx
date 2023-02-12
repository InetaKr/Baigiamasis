import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useParams,Link } from "react-router-dom";
import Answer from "../Answers/Answer";
import AddAnswer from "../Answers/AddAnswer"
import Question from "../Questions/Question";


const AnswerPage = () => {

    const { id } = useParams();
    const { questions } = useContext(QuestionsContext);    
    const { answers } = useContext(AnswersContext);
    const { loggedInUser } = useContext(UserContext);

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
        {loggedInUser ? (
        <AddAnswer />
      ) : (
        <>
        <h1>Please sign in to add an answer.</h1>
        <p>You need to be signed in to ask a question. Please sign in or sign up if you don't have an account yet.</p>
        <Link to="/signIn">
        <button>Sign In</button>
        </Link>
        <Link to="/signUp">
        <button>Sign Up</button>
        </Link>
        </>

      )}
    </>
    );
  }
   
  export default AnswerPage;