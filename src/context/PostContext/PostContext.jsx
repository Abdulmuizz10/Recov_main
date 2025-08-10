import React, { createContext, useEffect, useReducer } from "react";
import { PostReducers } from "./PostReducers";

const INITIAL_STATE = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducers, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(state.posts));
  }, [state.posts]);

  return (
    <PostContext.Provider value={{ posts: state.posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
