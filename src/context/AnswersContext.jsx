import { createContext, useState, useEffect } from "react";

const AnswersContext = createContext();

const AnswersProvider = ({children}) => {

    const [answers, setAnswers] = useState([]);
    
    useEffect(() => {
        const data = async () => {
            const res = await fetch("http://localhost:5000/answers");
            const data = await res.json();
            setAnswers(data);
        };
        data();
    }, []);
    
    const addNewAnswers = async (newAnswers) =>{
        await fetch("http://localhost:5000/answers",{
            method: "POST",
            body: JSON.stringify(newAnswers),
            headers: { "Content-Type": "application/json"},
        }).then (res => res.json())
        .then(data => setAnswers([...answers,data]));
    }

    const deleteAnswer = async (id) =>{
        await fetch(`http://localhost:5000/answers/${id}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setAnswers(answers.filter(answer => answer.id !==id))
            }
        })
    };

    const updateAnswer =  async (id, updatedAnswer) => {
        await fetch(`http://localhost:5000/answers/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedAnswer),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        if(res.ok){
            setAnswers(answers.map(answer => answer.id === id ? {...answer, answer: updatedAnswer.answer, ...updatedAnswer} : answer));

      }
    })
    };
    



    return(
        <AnswersContext.Provider
          value={{
            addNewAnswers,
            deleteAnswer,
            updateAnswer,
            answers

          }}
        
        >
        {children}
        </AnswersContext.Provider>
    );
}

export { AnswersProvider };
export default AnswersContext;