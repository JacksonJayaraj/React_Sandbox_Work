import React from "react";

function Jokes(props) {
  return (
    <div className="joke-card">
      <p
        style={{
          display: !props.joke.question && "none",
          color: !props.joke.punchline && "blue"
        }}
      >
        {props.joke.question}
      </p>
      <p style={{ color: !props.joke.question && "red" }}>
        {" "}
        {props.joke.punchline}{" "}
      </p>
      <hr />
    </div>
  );
}
export default Jokes;

/*
 <div className="joke-card">
      <h1> Joke number {props.joke.no} </h1>
      <p style={{ color: "blue", fontSize: 30 }}>{props.joke.question}</p>
      <p style={{ color: "red", fontSize: 30 }}> {props.joke.punchline} </p>
    </div>


*/
