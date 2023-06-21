import "./Stories.css";
import Story from "../story/Story";

const Stories = ({ data }) => {
  return (
    <>
      <div className="Stories">
        <ul className="Stories_List">
          {data.map((story) => (
            <li className="Stories_item" key={story.id.value}>
              <Story user={story} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Stories;
