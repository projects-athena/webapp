import { FC } from 'react';

interface MenuProps {
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-16 w-screen text-red-500 bg-gray-100 z-40 overflow-auto">
      <h1>;)</h1>
      <h1>:)</h1>
      <h1>;(</h1>
      <h1>;)</h1>
      <h1>;)</h1>
    </div>
  );
};

export default Menu;
