import { useState, useContext, useEffect } from 'react';
import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import Questions from './Questions';

const FilterSortQuestion = () => {
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

  const showAllQuestions = () => {
    setQuestionsToShow(questions);
  };

  const sortNewestToOldest = () => {
    const sortedQuestions = [...questionsToShow].sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB - dateA;
    });
    setQuestionsToShow(sortedQuestions);
  };

  const sortOldestToNewest = () => {
    const sortedQuestions = [...questionsToShow].sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateA - dateB;
    });
    setQuestionsToShow(sortedQuestions);
  };
  
  const sortByAnswerCount = (sortAsc) => {
    const sortedQuestions = questionsToShow.slice().sort((a, b) => {
      const answerCountA = answers.filter(answer => answer.questionId === a.id).length;
      const answerCountB = answers.filter(answer => answer.questionId === b.id).length;
  
      return sortAsc ? answerCountA - answerCountB : answerCountB - answerCountA;
    });
  
    setQuestionsToShow(sortedQuestions);
  };

  const sortAscending = () => {
    sortByAnswerCount(true);
  };
  
  const sortDescending = () => {
    sortByAnswerCount(false);
  };

  return (
    <>
    <button onClick={showAllQuestions}>All Questions</button>
      <button onClick={answeredQuestions}>Answered</button>
      <button onClick={unansweredQuestions}>Unanswered</button>
      <button onClick={sortNewestToOldest}>Sort Newest to Oldest</button>
    <button onClick={sortOldestToNewest}>Sort Oldest to Newest</button>
    <button onClick={sortAscending}>Sort by Answer Count (Ascending)</button>
    <button onClick={sortDescending}>Sort by Answer Count (Descending)</button>
      <Questions questionsToShow={questionsToShow} />
    </>
  );
};

export default FilterSortQuestion;
