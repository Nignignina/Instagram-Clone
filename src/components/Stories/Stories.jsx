import "./Stories.css";
import { useEffect, useState } from "react";
import StoryModal from "../StoryModal";
import Story from "../story/Story";

const Stories = ({ data }) => {
  const [storyStart, setStoryStart] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalStories = (index) => {
    setStoryStart(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setStoryStart(storyStart !== false ? storyStart : false);
  }, [storyStart]);

  const closeModalStories = () => {
    setIsModalOpen(false);
    setStoryStart(false);
  };

  console.log(storyStart);
  return (
    <>
      <div className="Stories">
        <ul className="Stories_List">
          {data.map((story, index) => (
            <li
              className="Stories_item"
              key={story.id}
              onClick={() => openModalStories(index)}>
              <Story user={story} />
            </li>
          ))}
        </ul>
      </div>
      {storyStart !== false && (
        <StoryModal
          stories={data}
          isOpen={isModalOpen}
          closeModal={closeModalStories}
          index={storyStart}
        />
      )}
    </>
  );
};

export default Stories;
