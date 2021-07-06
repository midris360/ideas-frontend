import React from "react";
import Post from "../components/post";

const AllPosts = (props) => {
  // For each idea in the array render a Idea component
  return props.posts.map((post) => <Post post={post} key={post.id} />);
};

export default AllPosts;