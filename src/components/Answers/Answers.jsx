import AnswersContext from "../../context/AnswersContext";
import { useContext } from "react";
import Answer from "./Answer";

const Answers = () => {

  const { answers } = useContext(AnswersContext);
 

  return (
    <>
    
    <div className="AnswersCardsWrapper">
        {answers ?
          answers.map((answer, index) => 
            <Answer 
              key={answer.id || index}
              data={answer}
            />  
          )
          :
          <p>Loading...</p>
        }
      </div>
    </>
  );
}
 
export default Answers;