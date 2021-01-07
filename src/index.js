import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";

const render = () => {
  return ReactDOM.render(<App />, document.getElementById("root"));
};
render();
store.subscribe(render);
console.log(store.getState());
