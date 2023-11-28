import {
   FETCH_ALL,
   CREATE,
   UPDATE,
   DELETE,
   LIKE,
} from "../constants/actionTypes";

// State sama action (CRUD)
export default (posts = [], action) => {
   // store dengan nama posts
   switch (action.type) {
      case FETCH_ALL:
         return action.payload;
      case LIKE:
         return posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
         );
      case CREATE:
         return [...posts, action.payload]; // return data yang ada ditambah dengan payload data baru
      case UPDATE:
         return posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
         );
      case DELETE:
         return posts.filter((post) => post._id !== action.payload);
      default:
         return posts;
   }
};
