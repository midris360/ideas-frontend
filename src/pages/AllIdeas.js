import React from "react";
import Idea from "../components/idea";

const AllIdeas = (props) => {
  // For each idea in the array render a Idea component
  return props.ideas.map((idea) => <Idea idea={idea} key={idea.id} />);
};

export default AllIdeas;