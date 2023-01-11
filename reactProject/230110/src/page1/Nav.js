import { Link } from "react-router-dom";

const lis = [
  { id: 1, url: "", name: "HOME" },
  { id: 2, url: "sub1", name: "About" },
  { id: 3, url: "sub2", name: "Product" },
  { id: 4, url: "sub3", name: "Gallery" },
  { id: 5, url: "sub4", name: "Coming Soon" },
];

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/sub1">About</Link>
          </li>
          <li>
            <Link to="/sub2">Product</Link>
          </li>
          <li>
            <Link to="/sub3">Gallery</Link>
          </li>
          <li>
            <Link to="/sub4">Coming Soon</Link>
          </li> */}

          {lis.map((item) => (
            <li key={item.id}>
              <Link to={"/" + item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
