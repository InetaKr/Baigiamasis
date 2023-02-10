import QuestionsContext from "../../context/QuestionsContext";
import { useContext } from "react";
import Question from "./Question";

const Questions = ({ questionsToShow }) => {

  const { questions } = useContext(QuestionsContext);
 

  return (
    <>
    
    <div className="QuestionCardsWrapper">
        {questionsToShow ?
          questionsToShow.map((question, index) => 
            <Question 
              key={question.id || index}
              data={question}
            />  
          )
          :
          <p>Loading...</p>
        }
      </div>
    </>
  );
}
 
export default Questions;