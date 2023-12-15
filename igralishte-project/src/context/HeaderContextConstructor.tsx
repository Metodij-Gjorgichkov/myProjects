import React, { useState } from "react";
import { createContext } from "react";

export interface HeaderType {
  isHamburgerMenuOpen: boolean;
  isSearchIconClicked: boolean;
  handleSearchIconClick: () => void;
  handleHamburgerMenuClick: () => void;
  handleOnLogoClick: () => void;
  closeTheHamburgerMenu: () => void;
}

export const HeaderContext = createContext<HeaderType>({
  isHamburgerMenuOpen: false,
  isSearchIconClicked: false,
  handleSearchIconClick: () => {},
  handleHamburgerMenuClick: () => {},
  handleOnLogoClick: () => {},
  closeTheHamburgerMenu: () => {},
});

interface Props {
  children: React.ReactNode;
}

const HeaderContextConstructor = ({ children }: Props) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);

  const handleSearchIconClick = () => {
    setIsHamburgerMenuOpen(false);
    setIsSearchIconClicked(!isSearchIconClicked);
  };
  const handleHamburgerMenuClick = () => {
    setIsSearchIconClicked(false);
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const handleOnLogoClick = () => {
    setIsHamburgerMenuOpen(false);
    setIsSearchIconClicked(false);
  };

  const closeTheHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };
  return (
    <HeaderContext.Provider
      value={{
        isHamburgerMenuOpen,
        isSearchIconClicked,
        handleSearchIconClick,
        handleHamburgerMenuClick,
        handleOnLogoClick,
        closeTheHamburgerMenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextConstructor;
