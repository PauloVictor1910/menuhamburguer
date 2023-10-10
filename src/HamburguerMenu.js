import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HamburguerMenu.css";

const MenuItem = ({ children }) => (
  <li className="menu-item">
    <a href="#">{children}</a>
  </li>
);

MenuItem.propTypes = {
  children: PropTypes.node.isRequired
};

const MenuList = ({ isOpen }) => (
  <ul className={`menu-list ${isOpen ? "open" : "closed"}`}>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
    <MenuItem>Item 3</MenuItem>
  </ul>
);

MenuList.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburguer-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      <MenuList isOpen={isOpen} />
    </div>
  );
};

export default HamburguerMenu;
