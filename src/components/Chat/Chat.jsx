import "./Chat.css";
import { useState } from "react";
import SingleChat from "../SingleChat";

const Chat = ({ data, id }) => {
  //   console.log(lastMessage.content);
  //   const [sentmessages, setMessages] = useState(data.messages);
  const [showChat, setShowChat] = useState(false);

  const onHandleClick = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };
  const lastMessage = data.messages[data.messages.length - 1];

  const lastparticipant = data.participants[data.participants.length - 1];

  // console.log(data);
  //
  return (
    <>
      <div className="Message" onClick={onHandleClick}>
        {showChat && <SingleChat chat={data} id={id} />}
        <div className="leftside_message">
          <div className="Photo">
            <img
              src={lastparticipant.avatar_url}
              alt={lastparticipant.username}
            />
          </div>
          <div className="content_Message">
            <p className="participant">{lastparticipant.username} </p>
            <p className="last_message"> {lastMessage.content}</p>
          </div>
        </div>
        <div className="rightside_message">
          <p className="info_message">{data.last_message_timestamp} </p>
        </div>
      </div>
    </>
  );
};
export default Chat;
