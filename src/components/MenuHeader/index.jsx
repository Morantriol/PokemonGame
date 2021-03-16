import { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const HandleClickMenuButton = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar isActive={isMenuOpen} onClickMenuButton={HandleClickMenuButton} />
      <Menu isActive={isMenuOpen} />
    </>
  );
};

export default MenuHeader;
