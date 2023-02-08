import QuestionsContext from "../../context/QuestionsContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddQuestion = () => {

  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
  });

  const { addNewQuestion } = useContext(QuestionsContext);
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  

  const handleSubmit = e => {
    e.preventDefault();
    const newQuestion = {
      name: formInputs.name,
      description: formInputs.description,
      id: Date.now(),
      userId: loggedInUser.id,
      likedBy: [],
      disLikedBy: []
    };

    addNewQuestion(newQuestion);
    navigation('/forum');
  }



  return (
    <>
      <form onSubmit={handleSubmit} className="Add-form">
        <h2>Ask Question</h2>
        <label>
          Title:
          <input type="text" name="title"
            value={formInputs.title}
            onChange={(e) => setFormInputs({...formInputs, title:e.target.value})}
          />
        </label>
        <label>
          Description:
          <br />
          <textarea type="text" name="description"
            value={formInputs.description}
            onChange={(e) => setFormInputs({...formInputs, description:e.target.value})}
          />
        </label>

        <input type="submit" value="Ask" />
      </form>
    </>
  );
}
 
export default AddQuestion;