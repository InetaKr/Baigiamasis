import UserContext from "../../context/UserContext";
import AnswersContext from "../../context/AnswersContext";
import { useContext, useState } from "react";
import EditAnswer from "./EditAnswer";

const Answer = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { users, loggedInUser } = useContext(UserContext);
  const { deleteAnswer, handleLike, handleDisLike, updateAnswer } =
    useContext(AnswersContext);

  const AnswerOwner = users.find((user) => user.id === data.userId);

  const AnswerVote = data.likedBy.length - data.disLikedBy.length;

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onUpdate = (id, updatedAnswer) => {
    updateAnswer(id, {
      ...updatedAnswer,
      isEdited: true,
      timestamp: new Date().toLocaleString(),
    });
    setIsEditing(false);
  };

  return (
    <>
      <div className="AnswerCards">
        <div className="ownerInfo">
          {AnswerOwner && (
            <>
              <div className="answer-info">
                <img src={AnswerOwner.avatar} alt="user avatar" />
                <span>{AnswerOwner.userName}</span>
              </div>
            </>
          )}

          {loggedInUser && loggedInUser.id === AnswerOwner.id && (
            <>
              <div className="ownerButtons">
                <button onClick={() => deleteAnswer(data.id)}>
                  <i className="fa fa-trash" />
                </button>
                <button onClick={toggleEdit}>
                  <i className="fa fa-edit" />
                </button>
              </div>
            </>
          )}
        </div>
        <br />

        <div className="AnswerCardDataInfo">
          {isEditing ? (
            <EditAnswer
              data={data}
              setIsEditing={setIsEditing}
              onUpdate={onUpdate}
            />
          ) : (
            <>
              <div>
                <p>{AnswerVote} vote</p>
              </div>
              <div className="timestamp">
                {data.isEdited && (
                  <p>
                    <span>Edited</span>
                  </p>
                )}
                <p>{data.timestamp}</p>
              </div>
              <div className="card-p">
                <p>{data.answer}</p>
              </div>
            </>
          )}
        </div>

        <div className="likeDislikeWrapper">
          {loggedInUser && (
            <>
              <button
                onClick={() => handleLike(data.id)}
                className="likeButton"
              >
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
    </>
  );
};

export default Answer;
