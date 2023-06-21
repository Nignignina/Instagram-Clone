import "./post.css";
import { Like, More, Share, Comment, Save } from "../Icons";

import { useState } from "react";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="Post">
        <div className="Post_top">
          <div className="Post_top_user">
            <div className="Post_user_image">
              <img
                src={post?.userImage ? post?.userImage : ""}
                alt={post.userName}
              />
            </div>
            <div className="User_content">
              <p className="User_username">{post?.userName}</p>
              <p className="User_location">{post?.location}</p>
            </div>
          </div>
          <div className="PostTop__Actions">
            <More />
          </div>
        </div>
        <div className="PostContent">
          {post?.media?.map((media) => (
            <img key={media?.id} src={media?.src} />
          ))}
        </div>
        <div className="PostActions">
          <div className="Left_postActions">
            <div onClick={() => toggleLike()} className="PostActions__Like">
              <Like fill={Like && Like ? "#FD1D1D" : "#262626"} />
            </div>
            <Comment />
            <Share />
            {/* central dots */}
          </div>
          <div className="Right_postActions">
            <Save />
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
