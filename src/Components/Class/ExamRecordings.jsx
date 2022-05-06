import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleClass, toggleRecordings } from "../../features";
import Buttons from "../Utils/Buttons";

const ExamRecordings = () => {
  const navigateTo = useNavigate();

  const _user = useSelector((state) => state.userReducer.value);
  const _class = useSelector((state) => state.classReducer.value);

  const dispatch = useDispatch();

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
                dispatch(toggleRecordings());
                dispatch(toggleClass());
              }}
            />
            <p>{_class[0].courseName}</p>
            <p className="text-white-2 text-base self-end">
              {_class[0].courseCode}
            </p>
          </div>
          <p></p>
        </header>

        <div
          className="flex flex-col gap-4 overflow-y-scroll"
          style={{ width: "80vw" }}
        >
          <UserPanel userName="Samuel Doe" userId="123456" attended />
          <UserPanel userName="Samuel Doe" userId="123456" attended />
          <UserPanel userName="Samuel Doe" userId="123456" />
          <UserPanel userName="Samuel Doe" userId="123456" attended />
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

const UserPanel = ({ userName, userId, attended }) => {
  return (
    <div className="bg-black-2 p-4 text-xl w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaUserAlt />
        <p>{userName}</p>
      </div>
      <p>{userId}</p>
      {attended ? (
        <p className="text-sm" style={{ color: "lightGreen" }}>
          Attended
        </p>
      ) : (
        <p className="text-sm" style={{ color: "red" }}>
          Not Attended
        </p>
      )}
      <Buttons text="View Recording" />
    </div>
  );
};

export default ExamRecordings;
