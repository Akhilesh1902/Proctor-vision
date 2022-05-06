import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import Cards from "../Components/Cards";
import { users } from "../Components/user";
// import Buttons from "../Components/Utils/Buttons";
import { useSelector, useDispatch } from "react-redux";
// import { login } from "../features/user";
import { login } from "../features";

const Login = ({ setLocaluser }) => {
  // console.log(users);
  // const [localUser, setLocaluser] = useState();
  // debugger;

  const _user = useSelector((state) => state.userReducer.value);
  // console.log(_user);
  const dispatch = useDispatch();

  const [showCard, setShowCard] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log(userNam`e);
  // console.log(password);`

  const btnClick = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.name === userName);
    // debugger;
    // console.log(password);
    if (user && user.password === password) {
      // console.log(user);
      // debugger;
      // localStorage.setItem("_user", JSON.stringify(user))
      dispatch(
        login({
          name: user.name,
          status: user.status,
          id: user.id,
        })
      );
      setShowCard(true);
    } else {
      alert("username / password incorrect");
    }
    console.log(user);
  };
  // debugger;
  if (showCard) return <Cards />;

  return (
    <div className="h-full grid place-items-center">
      <div className="login-container h-fit flex flex-col items-center bg-black-2 p-12 pt-8">
        <img src={logo} alt="" className="w-18 mb-6" />
        <form className="flex flex-col gap-6 items-center" onSubmit={btnClick}>
          <div className="block">
            {/* <label htmlFor="username">UserName</label> */}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="UserName"
              className="p-2 bg-transparent border-b-2 border-white-1"
              required
              value={userName}
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
          </div>
          <div className="block">
            {/* <label htmlFor="username">UserName</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-2 bg-transparent border-b-2 border-white-1"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link to="/login">
            Reset Password From Default/
            <br />
            Forgot Password
          </Link>
          <button className="bg-white-1 text-black-1 font-medium text-xl w-fit p-3  px-10 flex items-center">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
