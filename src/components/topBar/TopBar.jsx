import "./TopBar.css";
import { Camera, Igtv, Logo, Share, Comment, Save } from "../Icons";

const TopBar = ({ setSection }) => {
  const onHandleclick = (sectionName) => setSection(sectionName);
  // mi ha impallata
  return (
    <div className="TopBar">
      <div className="LeftIcons" onClick={() => onHandleclick("camera")}>
        <Camera />
      </div>
      <div className="Topbar_Logo" onClick={() => onHandleclick("homepage")}>
        <Logo />
      </div>
      <div className="RightIcons">
        <div className="RightIcons_igtv">
          <Igtv />
        </div>
        <div
          className="RightIcons_share"
          onClick={() => onHandleclick("share")}>
          <Share />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
