import "./SingleChat.css";
import ChatTopBar from "../ChatTopBar/ChatTopBar";

const SingleChat = ({ chat, id }) => {
  console.log(id);
  console.log(chat);

  return (
    <>
      <div className="ModalSingleChat">
        <div className="SingleChat">
          <ChatTopBar chat={chat} id={id} />
          {chat.messages.map((message) => {
            const imgSender = chat.participants.find(
              (participant) => participant.username !== "John"
            );

            return (
              <>
                <div
                  key={message.id}
                  className={`message ${
                    message.sender === "John" ? "right-align" : "left-align"
                  }`}>
                  {message.sender !== "John" && (
                    <div className={"img"}>
                      <img
                        className="imgSender"
                        src={imgSender.avatar_url}
                        alt="photo"
                      />
                    </div>
                  )}
                  <p className="message_content">{message.content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleChat;
