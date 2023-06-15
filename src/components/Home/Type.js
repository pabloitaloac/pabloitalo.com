import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full Stack Developer",
          "React + React Native",
          "Node",
          "MongoDB",
          "Express",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
        delay:50,
      }}
    />
  );
}

export default Type;
