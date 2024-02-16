import React from "react";

const Header = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-center items-center">
      <input className="w-2/5 h-10 px-6 rounded-3xl outline-none" placeholder="Search your preferred city"/>
    </nav>
  );
};

export default Header;
