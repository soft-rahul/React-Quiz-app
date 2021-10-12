import React from "react";
import "./Welcome.css";

export default function Welcome() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = (e) => {
    let username = e.target.value;
    localStorage.setItem("username", username);
  };

  return (
    <section className="intro">
      <div className="desktop">
        <div className="unknown__pic">
          <img src="/assets/ui-elements/name.gif" alt="" />
        </div>
        <div className="unknown__data">
          <div className="data__show">
            <h2>Your Name is Important for Us!</h2>
            <p>Please enter Your Name</p>
          </div>
          <div className="data__take">
            <form>
              <input onChange={inputHandler} type="text" name="username" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
