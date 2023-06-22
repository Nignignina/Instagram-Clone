// import { useState } from "react";

import TopBar from "./components/topBar";
import Stories from "./components/Stories/Stories";
import Posts from "./components/Posts/Posts";
import Camera from "./components/Camera/Camera";
import Share from "./components/Share/Share";
import { GET } from "./utils/http";

import "./App.css";
import { useState, useEffect } from "react";
// mock
import { usersStory } from "./components/mock/Story";

function App() {
  const [section, setSection] = useState("homepage");
  const [stories, setStories] = useState(usersStory);
  const [posts, setPosts] = useState([]);
  const BASE_POST = "https://api.npoint.io/ad51a274ce542626ec65";
  const BASE_STORY = "https://api.npoint.io/00cd43517267d3fa8838";

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    GET("https://api.npoint.io/45615d0ddef177eef95b").then((res) =>
      setMessages(res.messageList)
    );
  }, []);

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
        return (
          <>
            <div className="share_top"></div>

            <h1>sono share</h1>
            <Share messages={messages} />
          </>
        );
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
