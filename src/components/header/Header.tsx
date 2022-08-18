import React from "react";
import "./Header.scss"

import Actions from "./actions/Actions";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {

   return <div className="header">
      <Navigation />
      <Logo />
      <Actions />
   </div>
}

export default Header;