import UserContext from "../../context/UserContext";
import QuestionsContext from "../../context/QuestionsContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Question = ({ data }) => {
  const { users, loggedInUser } = useContext(UserContext);
  const { deleteQuestion, handleLike, handleDisLike } =
    useContext(QuestionsContext);

  const location = useLocation();

  const QuestionOwner = users.find((user) => user.id === data.userId);
  const QuestionVote = data.likedBy.length - data.disLikedBy.length;

  return (
    <div className="QuestionCards">
      <div className="ownerInfo">
        {QuestionOwner && (
          <>
            <div className="question-info">
              <img src={QuestionOwner.avatar} alt="user avatar" />
              <span>{QuestionOwner.userName}</span>
            </div>
          </>
        )}

        {loggedInUser && loggedInUser.id === QuestionOwner.id && (
          <>
            <div className="ownerButtons">
              <button onClick={() => deleteQuestion(data.id)}>
                <i className="fa fa-trash" />
              </button>
              <button>
                <Link to={`/editQuestion/${data.id}`}>
                  <i className="fa fa-edit" />
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
      <br />
      <div className="QuestionCardDataInfo">
        <>
          <div>
            <p>{QuestionVote} vote</p>
          </div>
          <div>
            {location.pathname === `/question/${data.id}` ? (
              <h2>{data.title}</h2>
            ) : (
              <Link to={`/question/${data.id}`}>
                <h2>{data.title}</h2>
              </Link>
            )}
            {data.isEdited && <p>Edited</p>}
            <p>{data.timestamp}</p>
            <p>{data.description}</p>
          </div>
        </>
      </div>
      <div className="likeDislikeWrapper">
        {loggedInUser && (
          <>
            <button onClick={() => handleLike(data.id)} className="likeButton">
              {data.likedBy.includes(loggedInUser.id) ? (
                <i className="fa fa-thumbs-up"></i>
              ) : (
                <i className="fa fa-thumbs-o-up"></i>
              )}
            </button>
            <button
              onClick={() => handleDisLike(data.id)}
              className="DisLikeButton"
            >
              {data.disLikedBy.includes(loggedInUser.id) ? (
                <i className="fa fa-thumbs-down"></i>
              ) : (
                <i className="fa fa-thumbs-o-down"></i>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
