import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleRecordings, toggleStudentRecording } from "../../features";
import { Images } from "../Utils/Images";

const StudentRecordings = () => {
  const dispatch = useDispatch();

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
                dispatch(toggleStudentRecording());
                dispatch(toggleRecordings());
              }}
            />
            <FaUserAlt />
            <p>Samuel Doe</p>
            <p className="text-sm self-end">123456</p>
          </div>
        </header>

        <div className="flex gap-10 justify-between self-start mt-4">
          <img src={Images.userImg} alt="" className="w-7/12" />
          <div className="flex flex-col gap-4 w-full ">
            <div className="text-red  flex items-center leading-none gap-2 w-full bg-black-2 p-4">
              <RiErrorWarningLine className="text-5xl" />
              <div className="flex flex-col w-fit text-left ">
                <p>Warning 1</p>
                <p className="text-xs text-white-2">Warning 1</p>
              </div>
            </div>
            <div className="text-yellow  flex items-center leading-none gap-2 w-full bg-black-2 p-4">
              <RiErrorWarningLine className="text-5xl" />
              <div className="flex flex-col w-fit text-left ">
                <p>Warning 1</p>
                <p className="text-xs text-white-2">Warning 1</p>
              </div>
            </div>
            <p className="text-left text-xl">Messages :</p>
            <div className="flex flex-col p-2 bg-black-2 relative">
              <p className="text-left text-lg">This is a message</p>
              <span className="self-end text-sm absolute  bottom-1  ">
                10:20
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRecordings;
