import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleExamineeModal } from "../../features";

const ExamineeModel = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="text-white-1 bg-black-2 p-5 absolute top-1/2 -translate-y-1/2 z-10 "
      style={{ width: "70vw" }}
    >
      <header className="flex justify-between text-xl">
        <p>Examinees</p>
        <IoMdAdd
          className="rotate-45 text-3xl"
          onClick={() => {
            dispatch(toggleExamineeModal());
          }}
        />
      </header>
      <div className="flex mt-4 flex-wrap gap-4">
        <div className="flex items-center gap-2 border-b-2 py-1">
          <FaSearch />
          <input type="text" className="bg-black-2 pl-2" placeholder="Search" />
        </div>
        <div className="bg-black-3 flex gap-4 p-3 ">
          <p className="leading-none">Samuel Doe</p>
          <p className="leading-none">123456</p>
        </div>
        <div className="bg-black-3 flex gap-4 p-3 ">
          <p className="leading-none">Samuel Doe</p>
          <p className="leading-none">123456</p>
        </div>
        <div className="bg-black-3 flex gap-4 p-3 ">
          <p className="leading-none">Samuel Doe</p>
          <p className="leading-none">123456</p>
        </div>
        <div className="bg-black-3 flex gap-4 p-3 ">
          <p className="leading-none">Samuel Doe</p>
          <p className="leading-none">123456</p>
        </div>
        <div className="bg-black-3 flex gap-4 p-3 ">
          <p className="leading-none">Samuel Doe</p>
          <p className="leading-none">123456</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-6">
        <UserPanel userName="Samuel Doe" userId="123456" />
        <UserPanel userName="Samuel Doe" userId="123456" />
        <UserPanel userName="Samuel Doe" userId="123456" />
      </div>
      <button
        className="self-center mt-6 p-3 px-6 leading-none bg-white-1 text-black-1"
        onClick={() => dispatch(toggleExamineeModal())}
      >
        Add To Class
      </button>
    </div>
  );
};

const UserPanel = ({ userName, userId }) => {
  return (
    <div className="bg-black-3 p-4 text-xl w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaUserAlt />
        <p>{userName}</p>
      </div>
      <p>{userId}</p>
      <input type="checkbox" />
    </div>
  );
};

export default ExamineeModel;
