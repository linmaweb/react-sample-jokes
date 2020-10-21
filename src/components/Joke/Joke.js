import React from "react";
import { getStyles } from "../../config";
import "./Joke.css";

const Joke = ({ votes, upvote, downvote, text }) => {
  return (
    <div className="joke">
      <div className="joke-buttons">
        <i className="fas fa-arrow-up" onClick={upvote} />
        <span
          className="joke-votes"
          style={{ borderColor: getStyles(votes).color }}
        >
          {votes}
        </span>
        <i className="fas fa-arrow-down" onClick={downvote} />
      </div>
      <div className="joke-text">{text}</div>
      <div className="joke-smiley">
        <i className={`em ${getStyles(votes).emoji}`} />
      </div>
    </div>
  );
};
export default Joke;
