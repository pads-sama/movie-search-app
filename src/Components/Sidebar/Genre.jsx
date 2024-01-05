import React from "react";
import GenreLists from "./GenreLists";

const Genre = () => {
  return (
    <>
      <div className=" text-light-text/50 py-2">
        <span className="text-lg uppercase tracking-wide px-5 py-2">Genre</span>
        <GenreLists />
      </div>
    </>
  );
};

export default Genre;
