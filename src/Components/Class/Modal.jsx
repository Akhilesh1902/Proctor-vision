import React, { useState } from "react";
import { MdOutlineFileUpload, MdAdd, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import InputBlock from "../Utils/InputBlock";
import {
  addClass,
  addExam,
  toggleClassModal,
  toggleExamModal,
  toggleExaminee,
} from "../../features";

const Modal = () => {
  //   console.log("modal");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState(new Date().toDateString());
  const [examTime, setExamTime] = useState("");

  const _modalToggler = useSelector((state) => state.modalReducer.value);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "classForm") {
      const cId = Math.floor(Math.random() * 20000);
      dispatch(addClass({ courseName, courseCode, cId }));
      dispatch(toggleClassModal());
    } else {
      const _status = ["View Recordings", "Join Exam", "Not Started yet"];
      var rand = Math.floor(Math.random() * _status.length);

      dispatch(
        addExam({ examName, examDate, examTime, status: _status[rand] })
      );
      dispatch(toggleExamModal());
    }
  };

  return (
    <div
      className="text-white-1 bg-black-2 p-5 absolute top-1/2 -translate-y-1/2"
      style={{ width: "50vw" }}
    >
      {_modalToggler.classModal && (
        <>
          <div className="flex text-2xl w-full justify-between items-center">
            <h1>Create Class</h1>
            <MdClose
              onClick={() => {
                dispatch(toggleClassModal());
              }}
            />
          </div>
          <form
            name="classForm"
            className="mt-8 flex flex-col gap-4  items-start "
            onSubmit={handleSubmit}
          >
            <InputBlock
              inputData={courseName}
              inputFunction={setCourseName}
              type="text"
              name="courseName"
              placeholder="CourseName"
            />
            <InputBlock
              inputData={courseCode}
              inputFunction={setCourseCode}
              type="text"
              name="courseCode"
              placeholder="courseCode"
            />
            <div className="flex gap-8">
              <div className="text-white-1 flex items-center gap-2">
                <MdOutlineFileUpload className="text-3xl" />
                <p className="leading-none">Upload .csv File</p>
              </div>
              <button
                type="button"
                className="text-white-1 flex items-center gap-2"
                onClick={() => {
                  dispatch(toggleExaminee());
                }}
              >
                <MdAdd className="text-3xl" />
                <p className="leading-none">Add Examinee</p>
              </button>
            </div>
            <button
              type="submit"
              className="self-center mt-6 p-3 px-6 leading-none bg-white-1 text-black-1"
            >
              Create Class
            </button>
          </form>
        </>
      )}
      {_modalToggler.examModal && (
        <>
          <div className="flex text-2xl w-full justify-between items-center">
            <h1>Create Exam</h1>
            <MdClose
              onClick={() => {
                dispatch(toggleExamModal());
              }}
            />
          </div>
          <form
            name="examForm"
            className=" mt-8 flex flex-col  items-start gap-4 "
            onSubmit={handleSubmit}
          >
            <InputBlock
              inputData={examName}
              inputFunction={setExamName}
              type="text"
              name="examName"
              placeholder="examName"
            />

            <InputBlock
              inputData={examDate}
              inputFunction={setExamDate}
              type="date"
              name="date"
              placeholder="date"
            />

            <InputBlock
              inputData={examTime}
              inputFunction={setExamTime}
              type="text"
              name="time"
              placeholder="(hr:min) - (hr:min)"
            />
            <div className="w-full flex items-center mt-8 ">
              <button
                type="button"
                className="flex w-1/2 gap-2 items-center border-4 p-2 px-8 "
              >
                <MdAdd className="rotate-45 text-xl" />
                <p>Exclude Examinee</p>
              </button>
              <p className="text-xs w-1/2  ml-6 text-left">
                18BIS1241 - Samuel Doe, 18BIS1241 - Samuel Doe, 18BIS1241 -
                Samuel Doe, 18BIS1241 - Samuel Doe, 18BIS12...
              </p>
            </div>

            <div className="self-center">
              <button
                type="submit"
                className="self-center mt-6 p-3 px-6 leading-none bg-white-1 text-black-1"
              >
                Add Exam
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Modal;
