import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";

const NavBar = () => {
  const _user = useSelector((state) => state.userReducer.value);

  const navigateTo = useNavigate();

  return (
    <div className="absolute bg-black-2 p-4 px-12 w-full flex justify-between items-center">
      <button
        className="logo flex gap-3  items-center"
        onClick={() => {
          navigateTo("/home");
        }}
      >
        <img src={Logo} alt="" className="w-7" />
        <p className="leading-none text-white-1">Proctor Vision</p>
      </button>
      <ul className="nav-links text-white-1 flex gap-8">
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={_user ? `/dash/${_user.name}` : "/login"}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
