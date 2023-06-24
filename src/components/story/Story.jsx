import "./story.css";

const Story = ({ user }) => {
  return (
    <div className="Story">
      <div className="Story_img">
        <img src={user.userImage} alt="" />
      </div>
      <p className="nickname_story">{user.username}</p>
    </div>
  );
};

export default Story;
