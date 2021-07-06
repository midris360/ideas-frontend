// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin:"auto",
  };


  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://idea-backend.herokuapp.com/ideas";

  // State to Hold The List of Ideas
  const [posts, setPosts] = useState([]);

  //////////////
  // Functions
  //////////////

  // Function to get list of Ideas from API
const getIdeas = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};

// Function to add Idea from form data
const addIdeas = async (newIdea) => {
  const response = await fetch(url + "ideas", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newIdea),
  });

  // get updated list of Ideas
  getIdeas();
};

 // an object that represents a null idea
 const nullIdea = {
  title: "",
  body: "",
};

// const state to hold idea to edit

const [targetIdea, setTargetIdea] = useState(nullIdea);

// Function to select idea to edit
const getTargetIdea = (idea) => {
  setTargetIdea(idea);
  props.history.push("/edit");
};

// Function to edit idea on form submission
const updateIdea = async (idea) => {
  const response = await fetch(url + idea.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(idea),
  });


  // const updateIdea = async (idea) => {
  //   const response = await fetch(url + idea.id + "/idea/", {
  //     method: "put",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(idea),
  //   });

// get updated list of ideas
getIdeas();
};

// Function to edit idea on form submission
const deleteIdea = async(idea) => {
  const response = await fetch(url + idea.id + "/", {
    method: "delete"
  });

  // get updated list of ideas
  getIdeas();
  props.history.push("/");
};

//////////////
// useEffects
//////////////

// useEffect to get list of Ideas when page loads
useEffect(() => {
  getIdeas();
}, []);

  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div>
      <h1 style={h1}>Ideas</h1>
      <Link to="/new"><button style={button}>Create New Idea</button></Link>
      <Link to="/edit"><button style={button}>Edit Idea</button></Link>
      <Link to="/"><button style={button}>Delete</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllPosts posts = {posts} {...rp}/>}
        />
        <Route
          path="/post/:id"
          render={(rp) => (
            <SinglePost posts={posts} edit={getTargetIdea} deleteIdea={deleteIdea} {...rp}/>
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (<Form 
          initialIdea={nullIdea}
          handleSubmit={addIdeas}
          buttonLabel="create idea"
          {...routerProps}
          />
         )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (<Form 
          initialIdea={targetIdea}
          handleSubmit={updateIdea}
          buttonLabel="update idea"
          {...routerProps}
          />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;