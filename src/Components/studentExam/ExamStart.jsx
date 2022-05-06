import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FaCheck, FaPlus } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { toggleJoinExam, toggleClass } from "../../features";
import { useDispatch } from "react-redux";
import { Images } from "../Utils/Images";
import Buttons from "../Utils/Buttons";

const ExamStart = () => {
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
                dispatch(toggleJoinExam());
                dispatch(toggleClass());
              }}
            />
            <p>Graduate Record Examinee</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">17th Dec 2020</p>
            <span className="text-xs self-end">9:00 - 12:00</span>
          </div>
        </header>
        <div className="flex justify-between ">
          <img src={Images.userImg} alt="" className="w-1/2" />
          <div className="flex flex-col gap-4 justify-between items-center w-full">
            <div className="flex flex-col gap-3 ">
              <div className="flex  gap-4">
                <FaCheck className="text-green text-3xl" />
                <p>Webcam Check</p>
              </div>{" "}
              <div className="flex  gap-4">
                <FaCheck className="text-green text-3xl" />
                <p>Webcam Check</p>
              </div>
              <div className="flex  gap-4">
                <FaPlus className="text-red text-3xl rotate-45" />
                <p>Webcam Check</p>
              </div>
              <div className="flex  gap-4">
                <FaPlus className="text-red text-3xl rotate-45" />
                <p>Webcam Check</p>
              </div>
              <div className="flex  gap-4">
                <FaCheck className="text-green text-3xl" />
                <p>Webcam Check</p>
              </div>
              <div className="flex  gap-4">
                <FaCheck className="text-green text-3xl" />
                <p>Webcam Check</p>
              </div>
              <div className="flex  gap-4">
                <BiLoaderAlt className="text-white-2 text-3xl" />
                <p>Webcam Check</p>
              </div>
              <div className="flex  gap-4">
                <BiLoaderAlt className="text-white-2 text-3xl" />
                <p>Webcam Check</p>
              </div>
            </div>
            <Buttons text="Start Exam" solid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamStart;
