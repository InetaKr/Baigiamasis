import QuestionsContext from "../../context/QuestionsContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddQuestion = () => {
  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { addNewQuestion } = useContext(QuestionsContext);
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInputs.title || !formInputs.description) {
      setErrorMessage("Title and description cannot be empty!");
      return;
    }

    const newQuestion = {
      title: formInputs.title,
      description: formInputs.description,
      timestamp: new Date().toLocaleString(),
      id: Date.now(),
      userId: loggedInUser.id,
      isEdited: false,
      likedBy: [],
      disLikedBy: [],
    };

    addNewQuestion(newQuestion);
    navigation("/forum");
  };

  return (
    <>
      {!loggedInUser ? (
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
      ) : (
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <h2>Ask Question</h2>
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
              <br />
              <textarea
                type="text"
                name="description"
                value={formInputs.description}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, description: e.target.value })
                }
              />
            </label>

            <input type="submit" value="Ask" />
          </form>
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};

export default AddQuestion;
