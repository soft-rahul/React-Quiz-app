import React from "react";
import { questions } from "./questions/Questions";
import "./MultipleChoice.css";

function MultipleChoice() {
    let numOfQuestions = questions.length;
  let num = Math.floor(Math.random() * numOfQuestions);
  console.log(numOfQuestions);

  const selectionHandler = (e) => {
   
    let userSelection = e.target.textContent;

    let finalAnswer = questions[num].answer;

    if (userSelection === finalAnswer) {
      alert("True");
    } else {
      alert("False");
    }
  };
  return (
    <section className="question-container">
      <div className="desktop">
        <div className="container">
          <div className="question">
            <h2>{questions[num].question}</h2>
          </div>
          <div className="options">
            <ul>
              <li onClick={selectionHandler} className="option">
                {questions[num].optionOne}
              </li>
              <li onClick={selectionHandler} className="option">
                {questions[num].optionTwo}
              </li>
              <li onClick={selectionHandler} className="option">
                {questions[num].optionThree}
              </li>
              <li onClick={selectionHandler} className="option">
                {questions[num].optionFour}
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </section>
  );
}

export default MultipleChoice;
