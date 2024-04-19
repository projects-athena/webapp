'use client'

import { FC, useState } from 'react';

interface headerButtonProps {
  onToggle: (isOpen: boolean) => void;
}

const HeaderButton: FC<headerButtonProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="relative group"
      >
        <div className="flex flex-col w-6 h-6 justify-around items-center lg:hidden">
          <div className={`flex flex-col pt-1 justify-between w-[20px] h-[20px] transform transition-all duration-100 origin-center overflow-hidden ${isOpen ? 'rotate-90' : ''}`}>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 
            ${isOpen ? 'w-0 opacity-0 delay-75' : ''}`}></div>
            <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 
            ${isOpen ? 'w-0 opacity-0 delay-75' : ''}`}></div>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 
            ${isOpen ? 'w-0 opacity-0 delay-75' : ''}`}></div>
            <div className={`w-0 h-0 overflow-hidden transform transition-all duration-300 
            ${isOpen ? 'w-12 h-12 -mt-2 delay-150' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};


export default HeaderButton;
