import React from "react";
import { Link } from "gatsby"
import Menu from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/" className="menu-item" >
        TOP
      </Link>
      <Link to="/frontend" className="menu-item" >
        Front End
      </Link>
    </Menu>
  );
};