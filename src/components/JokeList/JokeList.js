import React from "react";
import useJokes from "../../hooks/useJokes";
import Sidebar from "../Sidebar/Sidebar";
import Joke from "../Joke/Joke";
import Loading from "../Loading/Loading";
import "./JokeList.css";

const JokeList = () => {
  const [jokes, loading, setJokes, getJokes] = useJokes();
  let jokesSorted = jokes.sort((a, b) => b.votes - a.votes);

  const handleVote = (id, count) => {
    setJokes(
      jokes.map((joke) =>
        joke.id === id ? { ...joke, votes: joke.votes + count } : joke
      )
    );
  };

  if (loading) {
    return <Loading title="Loading..." />;
  }

  return (
    <div className="jokelist">
      <Sidebar getJokes={getJokes} />
      <div className="jokelist-jokes">
        {jokesSorted.map((joke) => (
          <Joke
            key={joke.id}
            votes={joke.votes}
            text={joke.text}
            upvote={() => handleVote(joke.id, 1)}
            downvote={() => handleVote(joke.id, -1)}
          />
        ))}
      </div>
    </div>
  );
};
export default JokeList;
