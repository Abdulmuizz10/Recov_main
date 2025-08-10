export const PostReducers = (state, action) => {
  switch (action.type) {
    // ✅ Get posts
    case "GET_POSTS":
      return {
        posts: action.payload,
      };
    // ✅ Create a new post
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    // ✅ Update an existing post by id
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, ...action.payload.updates }
            : post
        ),
      };

    // ✅ Delete a post by id
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    // ✅ Toggle isLostItem status (true = lost, false = found)
    case "TOGGLE_LOST_STATUS":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, isLostItem: !post.isLostItem }
            : post
        ),
      };

    // ✅ Toggle isResolved status (true = lost, false = found)
    case "TOGGLE_RESOLVE_STATUS":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, isResolved: !post.isResolved }
            : post
        ),
      };

    // ✅ Add comment to post
    case "ADD_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  {
                    id:
                      post.comments.length > 0
                        ? Math.max(...post.comments.map((c) => c.id)) + 1
                        : 1,
                    name: action.payload.name,
                    text: action.payload.text,
                    date: new Date().toISOString().split("T")[0],
                  },
                ],
              }
            : post
        ),
      };

    default:
      return state;
  }
};
