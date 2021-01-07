import React from "react";
import User from "./User";
export default function Sidebar({ contacts }) {
  return (
    <aside className="Sidebar">
      {contacts.map((contact) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
}
