import React from "react";
import Jokes from "./Jokes";

function AppJoke() {
  return (
    <div className="joke">
      <Jokes joke={{ question: "What color is the sky", punchline: "Blue" }} />
      <Jokes joke={{ question: "Fish lives in ", punchline: "water" }} />
      <Jokes joke={{ punchline: "Wonderful" }} />
      <Jokes joke={{ punchline: "Nice" }} />
      <Jokes joke={{ question: "How old are you ?" }} />
    </div>
  );
}
export default AppJoke;
