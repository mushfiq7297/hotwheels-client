import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
    const navLinks = (
        <div className="flex flex-col lg:flex-row">
          <li >
            <NavLink to="/">HOME</NavLink>
          </li>
        </div>
      );
    
      return (
        <div className="navbar fixed px-4 z-10 shadow-lg top-0 bg-indigo-950 text-white animate__animated animate__slideInDown font-stack">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content mt-2 z-[1] p-4 shadow    text-white text-sm bg-indigo-500 rounded-b-lg"
              >
                {navLinks}
              </ul>
            </div>
            <a className="font-bold text-2xl">
              <div className="flex gap-2">
                <h2 className="text-2xl my-2  lg:text-3xl">HotWheels</h2>
              </div>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-2">
            {user ? (
              <div>
                <div
                  className="tooltip tooltip-left  flex gap-3"
                  data-tip={user?.displayName || user.email}
                >
                  <div>
                  <img
                    src={user?.photoURL || "/src/assets/userDefaultPic.png"}
                    alt=""
                    className="w-8 h-8 mt-2 rounded-full "
                  />
                  </div>
                  <div>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-active btn-primary h-8 mr-2"
                  >
    
                    SIGN OUT
                  </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary mr-2">LOGIN</button>
              </Link>
            )}
          </div>
    
          
        </div>
      );
};

export default Navbar;
