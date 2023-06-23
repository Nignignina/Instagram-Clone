import "./Share.css";
import Chat from "../Chat/Chat";

import { useEffect, useState } from "react";

const Share = ({ messages }) => {
  return (
    <>
      <div className="Share">
        <ul className="list_messages">
          <div className="input_share">
            <input type="text" />
          </div>
          {messages.map((chat) => {
            return (
              <li className="chat" key={chat.id}>
                <Chat data={chat} id={chat.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Share;
