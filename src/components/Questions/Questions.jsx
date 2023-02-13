import { useEffect, useState } from "react";

import Question from "./Question";

const Questions = ({ filteredQuestions }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [filteredQuestions]);

  return (
    <>
      <div className="QuestionCardsWrapper">
        {loading ? (
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt="loading"
          />
        ) : filteredQuestions.length === 0 ? (
          <p>No Questions Created</p>
        ) : (
          filteredQuestions.map((question, index) => (
            <Question key={question.id || index} data={question} />
          ))
        )}
      </div>
    </>
  );
};

export default Questions;
