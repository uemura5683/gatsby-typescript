import React from "react";
import { Link } from "gatsby"

const Props = () => {
  const [close, setOpen] = React.useState(true)
  const toggle = () => setOpen(!close)
  return (
    <div className={close ? 'header--menu__content isClose' : 'header--menu__content isOpen'}>
      <Link to="/" className="menu-item" >
        TOP
      </Link>
      <Link to="/frontend" className="menu-item" >
        Front End
      </Link>
    </div>
  );
};
export default Props;