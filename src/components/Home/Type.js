import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
    
      options={{
        strings: [
          props.datatoShow.home3,
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
