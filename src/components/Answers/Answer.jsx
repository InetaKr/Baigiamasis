import UserContext from "../../context/UserContext";
import AnswersContext from "../../context/AnswersContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Answer = ({ data }) => {


  const { users, loggedInUser } = useContext(UserContext);
  const { deleteAnswer, handleLike, handleDisLike } = useContext(AnswersContext);

  const AnswerOwner = users.find(user => user.id === data.userId);
  const AnswerVote = data.likedBy.length - data.disLikedBy.length;


  return (
    <div className="AnswerCards">
      <div className="ownerInfo">
      {AnswerOwner && 
        <>
        <div className="answer-info">
          <img
            src={AnswerOwner.avatar}
            alt="user avatar" 
          />
          <span>{AnswerOwner.userName}</span>
          </div>
        </>
      }
      
      {
        loggedInUser && loggedInUser.id === AnswerOwner.id &&
        <>
        <div className="ownerButtons">
          <button onClick={() => deleteAnswer(data.id)}><i className="fa fa-trash" /></button>
          <button><Link to={`/editAnswer/${data.id}`}><i className="fa fa-edit" /></Link></button>
        </div>  
        </>
      }
      </div>
      <br/>
      <div className="AnswerCardDataInfo">
        <>
        <div><p>{AnswerVote} vote</p></div>
      <div>
      {data.isEdited && <p>Edited</p>}
      <p>{data.timestamp}</p>
      <p>{data.description}</p>
      </div>
      </>
      </div>
      <div className="likeDislikeWrapper">
        {loggedInUser &&
        <>
       
      <button onClick={() => handleLike(data.id)} className="likeButton">
  {data.likedBy.includes(loggedInUser.id) ? <i className="fa fa-thumbs-up"></i> : <i className="fa fa-thumbs-o-up"></i>}
</button>
      <button onClick={() => handleDisLike(data.id)} className="DisLikeButton">
  {data.disLikedBy.includes(loggedInUser.id) ? <i className="fa fa-thumbs-down"></i> : <i className="fa fa-thumbs-o-down"></i>}
</button>


</>
}
</div>

    </div>
    
  );

}
 
export default Answer;