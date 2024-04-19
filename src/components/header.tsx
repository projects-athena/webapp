'use client'

import { FC, useState } from "react";
import HeaderButton from "./headerButton";
import Menu from "./menu";

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleToggle = (isOpen: boolean) => {
      setIsMenuOpen(isOpen);
    };
  
    return (
      <header className="bg-blue-300 p-4 text-white text-center fixed top-0 w-full z-50 h-16 flex justify-between items-center">
        <HeaderButton onToggle={handleToggle} />
        <Menu isOpen={isMenuOpen} />
        <h1 className="text-xl">Athena</h1>
        <span></span>
      </header>
    );
  };

export default Header;