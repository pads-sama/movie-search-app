import React, { useState } from "react";
import Logo from "../Sidebar/Logo";
import SearchIcon from "../Utils/SearchIcon";
import BurgerClose from "../Utils/BurgerClose";
import BurgerOpen from "../Utils/BurgerOpen";

const NavBar = () => {
  const [toggleGenre, setToggleGenre] = useState(false);

  const handleToggle = () => {
    setToggleGenre((prev) => !prev);
  };
  return (
    <nav className="h-[100px] bg-primary">
      <div className="w-full h-full flex px-5 justify-between items-center">
        <Logo width="140" height="40" />
        <div className="flex transition gap-5">
          <button className="w-10 h-10 transition rounded-full grid place-content-center bg-transparent  hover:bg-darker-bg">
            <SearchIcon />
          </button>
          {toggleGenre ? (
            <BurgerClose onClick={handleToggle} />
          ) : (
            <BurgerOpen onClick={handleToggle} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
