// import { useState } from "react";
import TopBar from "./components/topBar";
import Stories from "./components/Stories/Stories";
import Posts from "./components/Posts/Posts";
import Camera from "./components/Camera/Camera";

import "./App.css";
import { useState, useEffect } from "react";
// mock
import { usersStory } from "./components/mock/Story";
import { postsData } from "./components/mock/Post";

function App() {
  const [section, setSection] = useState("homepage");
  const [stories, setStories] = useState(usersStory);
  const [posts, setPosts] = useState(postsData);
  const BASE_POST = "https://api.npoint.io/ad51a274ce542626ec65";
  const BASE_STORY = "https://api.npoint.io/00cd43517267d3fa8838";

  useEffect(() => {
    Promise.all([fetch(BASE_POST), fetch(BASE_STORY)])
      .then(([resBASE_POST, resBASE_STORY]) =>
        Promise.all([resBASE_POST.json(), resBASE_STORY.json()])
      )
      .then(([dataBASE_POST, dataBASE_STORY]) => {
        setPosts(dataBASE_POST);
        setStories(dataBASE_STORY);
      });
  }, []);

  const onSection = () => {
    switch (section) {
      case "homepage":
        return (
          <>
            <Stories data={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "share":
        return <h1>sono share</h1>;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSection()}
    </>
  );
}

export default App;
