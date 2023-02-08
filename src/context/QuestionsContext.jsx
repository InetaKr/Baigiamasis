import { createContext, useState,useEffect } from "react";
import UserContext from "./UserContext"
import { useContext } from "react";

const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {

  const [questions, setQuestions] = useState([]);
  const { loggedInUser } = useContext(UserContext);

  useEffect (() => {
    const data = async () => {
       const res = await fetch('http://localhost:5000/questions');
       const data = await res.json();
       setQuestions(data);
    };
    data();
}, []);

  const addNewQuestion = async (newQuestion) => {
    await fetch("http://localhost:5000/questions",{
        method: "POST", 
        body: JSON.stringify(newQuestion),
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .then(data => setQuestions([...questions, data]));
  };

  const deleteQuestion = async (id) => {
    await fetch(`http://localhost:5000/questions/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if(res.ok){
    setQuestions(questions.filter(question => question.id !== id));
  }
  })
};

  const updateQuestion =  async (id, updatedQuestion) => {
    await fetch(`http://localhost:5000/questions/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updatedQuestion),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    if(res.ok){
        setQuestions(questions.map(question => question.id.toString() === id ? {...question, ...updatedQuestion} : question));
  }
})
};

const handleLike = async (id) => {
  const updatedQuestion= questions.find(question => question.id === id);
  if(!updatedQuestion.likedBy.includes(loggedInUser.id)) {
      updatedQuestion.likedBy.push(loggedInUser.id);
      updatedQuestion.disLikedBy = updatedQuestion.disLikedBy.filter(userId => userId !== loggedInUser.id);
  } else {
      updatedQuestion.likedBy = updatedQuestion.likedBy.filter(userId => userId !== loggedInUser.id);
  }
  await updateQuestion(id, updatedQuestion);
}


const handleDisLike = async (id) => {
  const updatedQuestion= questions.find(question => question.id === id);
  if(!updatedQuestion.disLikedBy.includes(loggedInUser.id)) {
      updatedQuestion.disLikedBy.push(loggedInUser.id);
      updatedQuestion.likedBy = updatedQuestion.likedBy.filter(userId => userId !== loggedInUser.id);
  } else {
      updatedQuestion.disLikedBy = updatedQuestion.disLikedBy.filter(userId => userId !== loggedInUser.id);
  }
  await updateQuestion(id, updatedQuestion);
}


  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        addNewQuestion,
        deleteQuestion,
        updateQuestion,
        handleLike,
        handleDisLike
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsProvider };
export default QuestionsContext;