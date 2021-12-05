import * as React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";

const Props = () => {
  return (
    <Menu {...Props}>
      <Link to="/" className="menu-item" >
        TOP
      </Link>
      <Link to="/frontend" className="menu-item" >
        Frontend
      </Link>
      <Link to="/serverside" className="menu-item" >
        Serverside
      </Link>
      <Link to="/cms" className="menu-item" >
        CMS
      </Link>
      <Link to="/design" className="menu-item" >
        Design
      </Link>
      <Link to="/other" className="menu-item" >
        Other
      </Link>
    </Menu>
  );
};
export default Props