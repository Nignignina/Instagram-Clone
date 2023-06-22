import "./SingleChat.css";

const SingleChat = ({ chat, id }) => {
  console.log(id);
  console.log(chat.messages);
  return (
    <>
      {" "}
      <div className="ModalSingleChat">
        <div className="SingleChat">
          sono un div{" "}
          {chat.messages.map((message) => (
            <p
              key={message.id}
              className={`message ${
                message.sender === "John" ? "left-align" : "right-align"
              }`}>
              {" "}
              {message.content}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleChat;
