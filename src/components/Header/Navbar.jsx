import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = <>
 <ul className="flex gap-7 items-center font-[work-sans] ">
   <NavLink to={'/'} >
    { ( {isActive}) =>(<span className={isActive?" border-2 border-green-500 px-3 py-1 font-[work-sans]": 'font-[work-sans]'}>Home
   </span>
  )  }
  </NavLink>
  <NavLink to={'/readList'} >
    { ( {isActive}) =>(<span className={isActive?"text-green-500 font-[work-sans]": 'font-[work-sans]'}>  Listed Books
   </span>
  )  }
 
   </NavLink>
   <NavLink>
{/* { ( {isActive}) =>(<span className={isActive?"text-green-500 font-[work-sans]": 'font-[work-sans]'}>
   </span>
  )  } */}
  Pages to Read
   </NavLink>
 </ul>

  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm h-auto w-auto font-[work-sans] mx-[115px]">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content"
          >
          {navLinks}
          </ul> 
        </div>
        <a className="text-xl font-bold font-[work-sans]">Book Vibe</a>
      </div >
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn bg-green-500  text-white">Sign In</a>
        <a className="btn bg-blue-600   text-white">Sign Up</a>

      </div>
    </div>
  );
};

export default Navbar;
