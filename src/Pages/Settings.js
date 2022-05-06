import React from "react";
import { FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { users } from "../Components/user";

const Settings = () => {
  const { userName } = useParams();
  const user = users.find((u) => u.name === userName);
  const navigateTo = useNavigate();

  return (
    <div className="h-full grid place-items-center">
      <div
        className="flex flex-col justify-start gap-6 mt-16 items-center text-white-1"
        style={{ width: "90vw", height: "80vh " }}
      >
        <header className="w-full flex justify-between items-center ">
          <div className="flex justify-between items-center gap-4 text-3xl leading-none">
            <FiChevronLeft
              onClick={() => {
                navigateTo(`/dash/${userName}`);
              }}
            />
            <FaUserAlt />
            <p>{user.name}</p>
            <p className="text-sm self-end">{user.id}</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <AiOutlineEdit />
            <p>Edit Profile Picture</p>
          </div>
        </header>
        <div className="w-full flex flex-col ">
          <h2 className="self-start text-lg mb-2">General Settings</h2>
          <ul>
            <li className="w-full flex justify-between bg-black-2 items-center p-3 ">
              <p>Settings 1</p>
              <FiChevronDown className="text-3xl" />
            </li>
            <li className="w-full flex justify-between bg-black-2 items-center p-3 ">
              <p>Settings 2</p>
              <BsToggleOff className="text-3xl" />
            </li>
            <li className="w-full flex justify-between bg-black-2 items-center p-3 ">
              <p>Settings 3</p>
              <BsToggleOn className="text-3xl" />
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col ">
          <h2 className="self-start text-lg mb-2">Advance Settings</h2>
          <ul>
            <li className="w-full flex justify-between bg-black-2 items-center p-3 ">
              <p>Settings 1</p>
              <FiChevronDown className="text-3xl" />
            </li>
            <li className="w-full flex justify-between bg-black-2 items-center p-3 ">
              <p>Settings 2</p>
              <BsToggleOff className="text-3xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
