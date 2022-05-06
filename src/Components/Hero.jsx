import React from "react";
import logoText from "../assets/svg/logoText.svg";
import Buttons from "./Utils/Buttons";

const Hero = () => {
  return (
    <div className="hero-container bg-black-2 p-10 flex flex-col ">
      <img src={logoText} className="w-28" />
      <h1 className="text-white-1 text-5xl text-left my-10">
        Welcome aboard
        <br /> to the future in the making
        <br /> you've just become a part of it
      </h1>
      <Buttons type="link" text="Continue" dest="/login" solid />
    </div>
  );
};

export default Hero;
