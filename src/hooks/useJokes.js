import { useState, useEffect } from "react";
import { jokesDefault, jokesAPI } from "../config";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const useJokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const seenJokes = new Set(jokes.map((j) => j.text));

  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = async () => {
    try {
      setLoading(true);
      let jokesList = [];
      while (jokesList.length < jokesDefault) {
        let res = await axios.get(jokesAPI, {
          headers: { Accept: "application/json" },
        });
        let newJoke = res.data.joke;
        if (!seenJokes.has(newJoke)) {
          jokesList.push({
            id: uuidv4(),
            text: newJoke,
            votes: 0,
          });
        }
      }
      setJokes(jokesList);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return [jokes, loading, setJokes, getJokes];
};

export default useJokes;
