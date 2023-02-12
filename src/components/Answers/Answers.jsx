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
          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
        }
      </div>
    </>
  );
}
 
export default Answers;