import "./Share.css";
import Chat from "../Chat/Chat";

import { useEffect, useState } from "react";

const Share = ({ messages }) => {
  return (
    <>
      <div className="Share">
        <ul className="list_messages">
          inserire l'input share
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

// const Stories = ({ data }) => {
//   return (
//     <>
//       <div className="Stories">
//         <ul className="Stories_List">
//           {data.map((story) => (
//             <li className="Stories_item" key={story.id.value}>
//               <Story user={story} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };
