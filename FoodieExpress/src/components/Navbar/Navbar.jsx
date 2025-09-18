import React from "react";
import './Navbar.css'
import { useState } from "react";
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';
import selectorIcon from '../../assets/selector_icon.png';

const Navbar = () => {
  
  const [list, styleLists] = useState("none1");
  const [defaultStyle, setDefaultStyle] = useState("none");


  return (
    <div className="flex items-center justify-around py-8">
      <img src={logo} alt="search" />
      <ul className="flex gap-10 cursor-pointer">
        <li onClick={() => styleLists("Home")} className={`${list === "Home" ? 'styling' : ''} transition`}>Home</li>
        <li onClick={() => styleLists("Menu")} className={`${list === "Menu" ? 'styling' : ''} transition`}>Menu</li>
        <li onClick={() => styleLists("Mobile-App")} className={`${list === "Mobile-App" ? 'styling' : ''} transition`}>Mobile App</li>
        <li onClick={() => styleLists("Contact")} className={`${list === "Contact" ? 'styling' : ''} transition`}>Contact us</li>
      </ul>
      <div className="flex gap-10 cursor-pointer items-center">

      <img className="w-7 flex items-center" src={search_icon} alt="" />
        <div className="flex items-center">
          <img className="relative" src={basket_icon} alt="" />
          <div className="absolute dot"><img src={selectorIcon} alt="" /></div>
          <button className="addMargin rounded-2xl p-2 hover:bg-orange-600 hover:text-white transition hover:border-orange-600">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
