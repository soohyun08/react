import { Link } from "react-router-dom";
import dataList from "./navData";
import { useState } from "react";
import "./nav.scss";

function Nav() {
  const [data, setData] = useState(dataList);
  const [isNav, setIsNav] = useState(false);

  const openMenu = () => {
    setIsNav(!isNav);
  };

  return (
    <div className="globalNav">
      <div className="menu" onClick={openMenu}>
        📁menu
      </div>
      <nav className={isNav ? "on" : ""}>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="closeBtn" onClick={() => setIsNav(false)}>
          x
        </div>
      </nav>
    </div>
  );
}

export default Nav;
