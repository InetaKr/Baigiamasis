import { useState, useContext, useEffect } from 'react';
import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import Questions from './Questions';

const FilterQuestion = () => {
  const [questionsToShow, setQuestionsToShow] = useState([]);
  const { questions } = useContext(QuestionsContext);    
  const { answers } = useContext(AnswersContext);

  useEffect(() => {
    setQuestionsToShow(questions);
  }, [questions, answers]);

  const answeredQuestions = () => {
    const answered = questions.filter(question => {
      return answers.some(answer => answer.questionId === question.id);
    });

    setQuestionsToShow(answered);
  };

  const unansweredQuestions = () => {
    const unanswered = questions.filter(question => {
      return !answers.some(answer => answer.questionId === question.id);
    });

    setQuestionsToShow(unanswered);
  };

  return (
    <>
      <button onClick={answeredQuestions}>Answered</button>
      <button onClick={unansweredQuestions}>Unanswered</button>
      <Questions questionsToShow={questionsToShow} />
    </>
  );
};

export default FilterQuestion;
