import { useEffect, useState } from "react";

import Question from "./Question";

const Questions = ({ questionsToShow }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [questionsToShow]);

  return (
    <>
      <div className="QuestionCardsWrapper">
        {loading ? (
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt="loading"
          />
        ) : questionsToShow.length === 0 ? (
          <p>No Questions Created</p>
        ) : (
          questionsToShow.map((question, index) => (
            <Question key={question.id || index} data={question} />
          ))
        )}
      </div>
    </>
  );
};

export default Questions;
