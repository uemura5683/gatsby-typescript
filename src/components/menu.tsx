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
        Front End
      </Link>
      <Link to="/backend" className="menu-item" >
        Back End
      </Link>
      <Link to="/other" className="menu-item" >
        Other
      </Link>
    </Menu>
  );
};
export default Props