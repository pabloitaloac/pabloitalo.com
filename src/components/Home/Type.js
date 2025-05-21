import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
    
      options={{
        strings: [
          props.datatoShow.home3,
          "Next.js + Nest.js + React + React Native",
          "Node.js + Express + TypeScript + JavaScript",
          "Python + Django",
          "PHP + WordPress",
          "PostgreSQL + MongoDB + Redis",
          "HTML5 + CSS3 + Tailwind CSS + Sass + Bootstrap",
          "AWS + Google Cloud Platform + Heroku + Firebase",
          "iOS + Android + Xcode + Android Studio",
          "GitHub + Docker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
        delay:20,
        
      }}
    />
  );
}

export default Type;
