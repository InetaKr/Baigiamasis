import AnswersContext from "../../context/AnswersContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";




const AddAnswer = ( ) => {

  const { id } = useParams();

    const [formInputs, setFormInputs] = useState({
       answer: "", 
    });

    const { addNewAnswers } = useContext(AnswersContext);
    const { loggedInUser } = useContext(UserContext);
    const navigation = useNavigate()
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        if (!formInputs.answer) {
          setErrorMessage("Answer cannot be empty!");
          return;
       }
        const newAnswers ={
            answer: formInputs.answer,
            id: Date.now(),
            userId: loggedInUser.id,
            questionId: Number(id),
            timestamp: new Date().toLocaleString(),
            isEdited: false,
            likedBy: [],
            disLikedBy: []
        };

        addNewAnswers(newAnswers);
        setFormInputs({ answer: "" });
        navigation()
    }
    return(
      <>
        <form onSubmit={handleSubmit} className="AddAnswer-form">
        <label>
          Answer:
          <textarea type="text" name="answer"
            value={formInputs.answer}
            onChange={(e) => setFormInputs({...formInputs, answer:e.target.value})}
          />
        </label>
        <input type="submit" value="Send" />
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>

    )
}

export default AddAnswer