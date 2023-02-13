import QuestionsContext from "../../context/QuestionsContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditQuestion = () => {
  const { id } = useParams();

  const { questions, updateQuestion } = useContext(QuestionsContext);

  const navigation = useNavigate();

  const selectedQuestion = questions.find(
    (question) => question.id.toString() === id
  );

  const [formInputs, setFormInputs] = useState({
    title: selectedQuestion.title,
    description: selectedQuestion.description,
    timestamp: selectedQuestion.timestamp,
    isEdited: selectedQuestion.isEdited,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateQuestion(id, {
      ...formInputs,
      timestamp: new Date().toLocaleString(),
      isEdited: true,
    });

    navigation("/forum");
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <h2>Edit Question</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formInputs.title}
              onChange={(e) =>
                setFormInputs({ ...formInputs, title: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              name="description"
              value={formInputs.description}
              onChange={(e) =>
                setFormInputs({ ...formInputs, description: e.target.value })
              }
            />
          </label>
          <input type="submit" value="Edit" />
        </form>
      </div>
    </>
  );
};

export default EditQuestion;
