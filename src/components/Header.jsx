import React from "react";

const Header = ({ searchCity, setSearchCity }) => {
  return (
    <nav className="w-full h-[12vh] flex justify-center items-center ">
      <input
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className="w-2/5 h-10 px-6 rounded-xl outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        placeholder="Search your preferred city"
      />
    </nav>
  );
};

export default Header;
