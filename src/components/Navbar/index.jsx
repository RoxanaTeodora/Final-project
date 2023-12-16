// import { Link } from "react-router-dom";
// import "./style.css";
// export const Navbar = () => {
//   return (
//     <div className="navbar" style={{ backgroundColor: "red", padding: "10px" }}>
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//       <div>
//         <Link to="/admin">Admin</Link>
//       </div>
//       <div>
//         <Link to="/cart">Cart</Link>
//       </div>
//     </div>
//   );
// };

import { Link, Outlet } from "react-router-dom";
import "./style.css";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  return (
    <div className="navbar shadow-md w-full">
      <div className="logo">
        <div className="img">
          <img src="./logo6.PNG" alt="logo" />
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/">Products</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="menu">
        <div>
          <Link to="/admin">Admin</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
