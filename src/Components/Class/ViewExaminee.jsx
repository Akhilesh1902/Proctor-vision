import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineFileUpload, MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleClass, toggleExaminee } from "../../features";

const ViewExaminee = () => {
  const _user = useSelector((state) => state.userReducer.value);
  const _class = useSelector((state) => state.classReducer.value);
  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  return (
    <div className="h-full grid place-items-center text-white-1">
      <div
        className="w-full flex self-end flex-col justify-between items-center"
        style={{ height: "90vh" }}
      >
        <header className=" w-full flex justify-between items-center px-16 py-6">
          <div className="flex justify-between items-center gap-4 text-3xl leading-none">
            <FiChevronLeft
              onClick={() => {
                dispatch(toggleClass());
                dispatch(toggleExaminee());
              }}
            />
            <p>{_class.courseName}</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-0.5">
              <MdOutlineFileUpload />
              <p>Upload .csv File</p>
            </div>
            <div className="flex items-center gap-0.5">
              <MdAdd />
              <p>Add Examinee</p>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-4" style={{ width: "80vw" }}>
          <UserPanel userName="Samuel Doe" userId="123456" />
          <UserPanel userName="Samuel Doe" userId="123456" />
          <UserPanel userName="Samuel Doe" userId="123456" />
        </div>
        <footer className="relative text-white-1 w-full flex p-10  justify-between">
          <p></p>
          <button
            className="faculty flex"
            onClick={() => {
              navigateTo("settings");
            }}
          >
            <div className="details mx-4">
              <h3>{_user.name}</h3>
              <p className="text-white-2">{_user.id}</p>
            </div>
            <FaUserAlt className="text-4xl" />
          </button>
        </footer>
      </div>
    </div>
  );
};

const UserPanel = ({ userName, userId }) => {
  return (
    <div className="bg-black-2 p-4 text-xl w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaUserAlt />
        <p>{userName}</p>
      </div>
      <p>{userId}</p>
      <AiOutlineDelete />
    </div>
  );
};

export default ViewExaminee;
