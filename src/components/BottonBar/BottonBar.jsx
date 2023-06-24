import "./BottonBar.css";
import { Home, Search, Like, Plus } from "../Icons";

const BottonBar = ({ setSection, stories }) => {
  const onHandleclick = (sectionName) => setSection(sectionName);
  return (
    <div className="BottonBar">
      <div
        className="Homeicon"
        onClick={() => {
          onHandleclick("homepage");
          console.log(stories);
        }}>
        <Home />
      </div>

      <div className="Searchicon">
        <Search />
      </div>

      <div className="Plus">
        <Plus />
      </div>
      <div className="likeicon">
        <Like />
      </div>
      <div className="iconprofile">
        <img src={stories[0].userImage} alt="" />
      </div>
    </div>
  );
};
export default BottonBar;
