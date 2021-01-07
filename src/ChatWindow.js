import React from "react";
import Header from "./Header";
import store from "./store";
import Chat from "./Chat";
import _ from "lodash";
import MessageInput from "./MessageInput";
const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
