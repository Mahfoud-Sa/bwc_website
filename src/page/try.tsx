import React from "react";
import StickyBox from "react-sticky-box";
import Sidebar from "react-sticky-box";
function Try() {
  return (
    <>
      <header className="w-full h-[20vh] bg-black">Header</header>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <StickyBox offsetTop={10} offsetBottom={10}>
          <Sidebar />
        </StickyBox>
        <div className="w-[20vh] h-full bg-black">Content</div>
        <StickyBox
          offsetTop={10}
          offsetBottom={10}
          bottom
          style={{ alignSelf: "flex-end" }}
        >
          <Sidebar />
        </StickyBox>
      </div>
      <footer className="w-  h-full bg-black">Footer</footer>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <StickyBox offsetTop={20} offsetBottom={20}>
          <Sidebar />
        </StickyBox>
        <div className="w-   h-full bg-black">Content</div>
      </div>
    </>
  );
}
export default Try;
