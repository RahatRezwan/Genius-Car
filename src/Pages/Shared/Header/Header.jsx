import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { AuthContext } from "../../../context/AuthProvider";

const menuItems = [
   { id: "01", item: "Home", link: "/" },
   { id: "02", item: "About", link: "/about" },
   { id: "03", item: "Service", link: "/service" },
   { id: "04", item: "Blog", link: "/blog" },
   { id: "05", item: "Contact", link: "/contact" },
];

const Header = () => {
   const { user, logoutAUser } = useContext(AuthContext);

   const handleLogOut = () => {
      logoutAUser()
         .then(() => {})
         .catch((e) => console.log(e));
   };

   return (
      <div>
         <div className="navbar bg-base-100 max-w-[1200px] mx-auto my-[50px] p-0">
            <div className="navbar-start">
               {/* Mobile Menu */}
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     {menuItems.map((menu) => (
                        <li key={menu.id}>
                           <Link to={menu.link} className="font-semibold">
                              {menu.item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Logo */}
               <Link to="/">
                  <img src={logo} alt="" />
               </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal p-0">
                  {menuItems.map((menu) => (
                     <li key={menu.id}>
                        <Link to={menu.link} className="font-semibold">
                           {menu.item}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Others */}
            <div className="navbar-end flex gap-3">
               {user?.uid ? (
                  <>
                     <Link className="avatar">
                        <div className="w-12 h-12 rounded-full">
                           <img
                              src={
                                 user?.photoURL
                                    ? user.photoURL
                                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                              }
                              alt=""
                           />
                        </div>
                     </Link>
                     <Link onClick={handleLogOut} className="btn">
                        Logout
                     </Link>
                  </>
               ) : (
                  <>
                     <Link to="/login" className="btn">
                        Login
                     </Link>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
