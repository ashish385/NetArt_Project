import React from "react";
import Logo from "../asserts/logo.png";

const Header = () => {
  return (
    <>
      <nav className="flex justify-center items-center my-2 ">
        <img src={Logo} alt="" className="h-25 w-[25rem] px-2 " />
      </nav>
    </>
  );
};

export default Header;
