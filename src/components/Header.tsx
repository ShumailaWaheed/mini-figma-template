"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Services", "Contact us"];

  return (
    <div className="flex items-center justify-between h-[66px] px-4 shadow-2xl bg-gray-500">
      <div className="text-white font-bold">LOGO</div>

      <div className="hidden sm:flex gap-4">
        {menuItems.map((item) => (
          <div key={item} className="cursor-pointer text-white">
            {item}
          </div>
        ))}
      </div>

      <div
        className="sm:hidden cursor-pointer text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MdMenu size={30} />
      </div>

      {isMenuOpen && (
        <div className="absolute top-[66px] left-0 w-full bg-gray-500 sm:hidden">
          <div className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <div key={item} className="cursor-pointer text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;