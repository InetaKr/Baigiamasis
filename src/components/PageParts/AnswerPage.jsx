import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Answer from "../Answers/Answer";
import AddAnswer from "../Answers/AddAnswer";
import Question from "../Questions/Question";

const AnswerPage = () => {
  const { id } = useParams();
  const { questions } = useContext(QuestionsContext);
  const { answers } = useContext(AnswersContext);
  const { loggedInUser } = useContext(UserContext);

  const selectedQuestion = questions.find(
    (question) => question.id.toString() === id
  );

  const selectedQuestionAnswers = answers.filter(
    (answer) => answer.questionId.toString() === id
  );

  return (
    <>
      <div className="wrapPage">
        <div className="questionWrapper">
          <Question data={selectedQuestion} />
        </div>
        <div className="AnswerCardsWrapper">
          {selectedQuestionAnswers.length === 0 ? (
            <p>No answers found.</p>
          ) : (
            selectedQuestionAnswers.map((answer, index) => (
              <Answer key={answer.id || index} data={answer} />
            ))
          )}
        </div>
        {loggedInUser ? (
          <AddAnswer />
        ) : (
          <>
            <div className="not-login-message">
              <div className="not-login-message-text">
                <h2>Please sign in to ask a question</h2>
                <p>
                  You need to be signed in to ask a question. Please sign in or
                  sign up if you don't have an account yet.
                </p>
              </div>
              <div className="not-login-message-buttons">
                <Link to="/signIn">
                  <button>Sign In</button>
                </Link>
                <Link to="/signUp">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AnswerPage;
