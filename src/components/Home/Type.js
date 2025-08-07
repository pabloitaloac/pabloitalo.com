import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
    
      options={{
        strings: [
          props.datatoShow.home3,
          "Next.js + NestJS + React + React Native",
          "Node.js + Express + TypeScript + JavaScript",
          "Python + Django + FastAPI",
          "LangChain + OpenAI API + Vercel AI SDK",
          "AWS + Google Cloud + Azure + Docker",
          "PostgreSQL + MongoDB + Redis + Vector DBs",
          "Microservices + Serverless + CI/CD",
          "LLM Agents + RAG + Embeddings",
          "HTML5 + CSS3 + Tailwind CSS + Bootstrap",
          "GitHub + Terraform + Kubernetes",
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
