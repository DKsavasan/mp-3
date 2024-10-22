import React from "react";
import styled from "styled-components";
import Calculator from "./calculator";

const ProjectsContainer = styled.div`
  p {
    color: black;
  }
  li {
    color: black;
  }
  h2 {
    text-align: center;
    color: #9c0b0b;
    margin-bottom: 1rem;
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .job {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .job h3 {
    color: #9c0b0b;
    margin-bottom: 0.5rem;
  }

  .job .position,
  .job .date {
    font-style: italic;
    margin-bottom: 0.25rem;
  }

  .job ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }

  .calculator {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 20px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: calc(16px + 0.5vw);
    background-color: #d2691e;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #fc9619;
  }

  input {
    width: 100px;
    padding: 10px;
    margin: 10px;
    font-size: calc(16px + 0.5vw);
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <div className="experience">
        <div className="job">
          <h3>Connections Mobile App</h3>
          <p className="position">
            React Native, TypeScript, Expo, Async Storage, Supabase
          </p>
          <p className="date">Jun 2024 - Present</p>
          <ul>
            <li>
              Developing and deploying cross-platform mobile app using React
              Native and Expo to manage and strengthen personal and professional
              connections via custom reminder, logging, and dashboard systems
              with Async Storage and Supabase backend
            </li>
          </ul>
        </div>
        <div className="job">
          <h3>Live Docs App</h3>
          <p className="position">
            Next.js, React, TailwindCSS, ShadCN, Clerk, LiveBlocks, Sentry,
            Vercel
          </p>
          <p className="date">May 2024 - Jul 2024</p>
          <ul>
            <li>
              Devised a secure real-time document editor with auth, permissions,
              and notifications using Next.js and deployed on Vercel
            </li>
          </ul>
        </div>

        <div className="calculator">
          <Calculator />
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
