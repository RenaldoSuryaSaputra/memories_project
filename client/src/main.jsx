import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import "./index.css"

const store = configureStore(
   { reducer: rootReducers }, // diambil dari file reducers
   compose(applyMiddleware(thunk))
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
);
