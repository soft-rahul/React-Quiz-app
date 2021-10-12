import React from "react";
import { questions } from "./questions/Questions";

function MultipleChoice() {
    let num = Math.floor(Math.random()*3);
  return (
    <section className="question-container">
      <div className="question">
        <h2>{questions[num].question}</h2>
      </div>
      <div className="options">
        <ul>
          <li className="option">{questions[num].optionOne}</li>
          <li className="option">{questions[num].optionTwo}</li>
          <li className="option">{questions[num].optionThree}</li>
          <li className="option">{questions[num].optionFour}</li>
        </ul>
      </div>
    </section>
  );
}

export default MultipleChoice;
