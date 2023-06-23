import "./ChatTopBar.css";
import { Back, Camera } from "../Icons";

const ChatTopBar = ({ chat, id }) => {
  const participant = chat.participants.find(
    (participant) => participant.username !== "John"
  );

  return (
    <div className="ChatTopBar">
      <Back />
      <div className="TopBar_profile">
        {participant ? (
          <>
            <div className="wrapper_profile_image">
              <img
                className="profile_image"
                src={participant.avatar_url}
                alt="Profile"
              />
            </div>
          </>
        ) : null}
        <p className="profile_name">{participant.username}</p>
      </div>

      <div className="icon_chatTopBar">
        <Camera />
      </div>
    </div>
  );
};

export default ChatTopBar;
