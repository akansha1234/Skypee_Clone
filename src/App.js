import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import store from "./store";
import _ from "lodash";
export default function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}
