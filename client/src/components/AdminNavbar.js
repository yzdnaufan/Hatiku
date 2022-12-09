import React, {useEffect} from "react";

import {GiHamburgerMenu} from 'react-icons/gi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={()=>customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-slate-200"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

export default function Navbar() {

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <>
      <div className="p-4 flex justify-between ">
        <NavButton title='Menu' customFunc={handleActiveMenu}  color='bg-black' icon={<GiHamburgerMenu/>} />
      </div>
    </>
  );
}
