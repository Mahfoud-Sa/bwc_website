import React, { useState, useRef } from "react";
import StickyBox from "react-sticky-box";
import Sidebar from "react-sticky-box";
import ReactPlayer from "react-player/youtube";
interface publishesDataCard {
  url: string;
}

const card: publishesDataCard = {
  url: "https://www.youtube.com/watch?v=AuLg79Th3xE",
};
function Try() {

  return (
    <>
      <ReactPlayer url={card.url} controls={true} height="50" width="50"/>
    </>
  );
}
export default Try;
