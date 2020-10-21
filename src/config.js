const jokesDefault = 10;

const jokesIcon =
  "https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg";

const jokesAPI = "https://icanhazdadjoke.com/";

const jokesStyle = [
  {
    color: "#f44336",
    emoji: "em-angry",
  },

  {
    color: "#FF9800",
    emoji: "em-confused",
  },

  {
    color: "#FFC107",
    emoji: "em-neutral_face",
  },

  {
    color: "#FFEB3B",
    emoji: "em-slightly_smiling_face",
  },

  {
    color: "#CDDC39",
    emoji: "em-smiley",
  },

  {
    color: "#8BC34A",
    emoji: "em-laughing",
  },

  {
    color: "#4CAF50",
    emoji: "em-rolling_on_the_floor_laughing",
  },
];

const getStyles = (votes) => {
  switch (true) {
    case votes >= 15:
      return jokesStyle[6];
    case votes >= 12:
      return jokesStyle[5];
    case votes >= 9:
      return jokesStyle[4];
    case votes >= 6:
      return jokesStyle[3];
    case votes >= 3:
      return jokesStyle[2];
    case votes >= 0:
      return jokesStyle[1];
    default:
      return jokesStyle[0];
  }
};

export { jokesDefault, jokesIcon, jokesAPI, getStyles };
