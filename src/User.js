import React from "react";
import store from "./store";
import { setActiveUserId } from "./actions";
const User = ({ user }) => {
  const { name, profile_pic, status, user_id } = user;
  const handleClick = (user_id) => {
    console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
  };
  return (
    <div className="User" onClick={() => handleClick(user_id)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};
export default User;
