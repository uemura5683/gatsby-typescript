import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";

const Props = () => {
  return (
    <>
    <Menu>
      <Link to="/" className="menu-item" >
        TOP
      </Link>
      <Link to="/frontend" className="menu-item" >
        Front End
      </Link>
    </Menu>
    </>
  );
};
export default Props;