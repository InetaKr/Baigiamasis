import { useState, useContext, useEffect } from "react";
import QuestionsContext from "../../context/QuestionsContext";
import AnswersContext from "../../context/AnswersContext";
import Questions from "./Questions";

const FilterSortQuestion = () => {
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const { questions } = useContext(QuestionsContext);
  const { answers } = useContext(AnswersContext);

  useEffect(() => {
    setFilteredQuestions(questions);
  }, [questions, answers]);

  const answeredQuestions = () => {
    const answered = questions.filter((question) => {
      return answers.some((answer) => answer.questionId === question.id);
    });

    setFilteredQuestions(answered);
  };

  const unansweredQuestions = () => {
    const unanswered = questions.filter((question) => {
      return !answers.some((answer) => answer.questionId === question.id);
    });

    setFilteredQuestions(unanswered);
  };

  const showAllQuestions = () => {
    setFilteredQuestions(questions);
  };

  const sortNewestToOldest = () => {
    const sortedQuestions = [...filteredQuestions].sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB - dateA;
    });
    setFilteredQuestions(sortedQuestions);
  };

  const sortOldestToNewest = () => {
    const sortedQuestions = [...filteredQuestions].sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateA - dateB;
    });
    setFilteredQuestions(sortedQuestions);
  };

  const sortByAnswerCount = (sortAsc) => {
    const sortedQuestions = filteredQuestions.slice().sort((a, b) => {
      const answerCountA = answers.filter(
        (answer) => answer.questionId === a.id
      ).length;
      const answerCountB = answers.filter(
        (answer) => answer.questionId === b.id
      ).length;

      return sortAsc
        ? answerCountA - answerCountB
        : answerCountB - answerCountA;
    });

    setFilteredQuestions(sortedQuestions);
  };

  const sortAscending = () => {
    sortByAnswerCount(true);
  };

  const sortDescending = () => {
    sortByAnswerCount(false);
  };

  return (
    <>
      <button onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
        Filter and Sort
      </button>
      {isOptionsVisible && (
        <>
          <div className="filterSortOption-wrapper">
            <div className="filterSortOption">
              <p>Filter by :</p>
              <div className="filterSortOptionButtons">
                <button onClick={showAllQuestions}>Show All</button>
                <button onClick={answeredQuestions}>Answered</button>
                <button onClick={unansweredQuestions}>No Answer</button>
              </div>
            </div>
            <div className="filterSortOption">
              <p>Sort By:</p>
              <div className="filterSortOptionButtons">
                <div>
                  <button onClick={sortNewestToOldest}>Newest</button>
                  <button onClick={sortOldestToNewest}>Oldest</button>
                </div>
                <div>
                  <button onClick={sortAscending}>Lowest Count</button>
                  <button onClick={sortDescending}>Highest Count</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Questions filteredQuestions={filteredQuestions} />
    </>
  );
};

export default FilterSortQuestion;
