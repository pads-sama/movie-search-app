import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Genre from "./Genre";

const Sidebar = () => {
  return (
    <>
      <aside className="w-full h-[100dvh] absolute bg-red-300 top-0 -left-[600px]">
        <Logo width="180" height="70" />
        <Genre />
      </aside>
    </>
  );
};

export default Sidebar;
