import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Idea = ({ idea }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/idea/${idea.id}`}>
        <h1>{idea.title}</h1>
      </Link>
      <h2>{idea.body}</h2>
    </div>
  );
};

export default Idea;