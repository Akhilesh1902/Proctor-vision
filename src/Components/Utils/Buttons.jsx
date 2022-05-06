import React, { useRef } from "react";
import { FiChevronRight, FiChevronUp } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import { BiUserPlus, BiUserMinus } from "react-icons/bi";

import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  toggleClassModal,
  toggleEditMode,
  toggleExamineeModal,
  toggleExamModal,
  toggleExaminee,
  toggleClass,
  toggleRecordings,
  toggleStudentRecording,
  toggleJoinExam,
  toggleExamPage,
} from "../../features";
import { useDispatch, useSelector } from "react-redux";

const Buttons = (props) => {
  const { text, type, dest, solid, border, transparent } = props;
  const _user = useSelector((state) => state.userReducer.value);

  // console.log(name);
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const btn = useRef();

  const ar = ["Completed", "Not Started yet", "Previous"];

  if (ar.includes(btn.current?.innerText)) {
    btn.current.style.background = "rgba(256,256,256,50%)";
  }

  const btnClick = (e) => {
    // console.log(e.target.innerText);

    if (type === "link") navigateTo(dest);
    else {
      if (e.target.innerText === "Add Class") dispatch(toggleClassModal());
      else if (e.target.innerText === "Edit") dispatch(toggleEditMode());
      else if (e.target.innerText === "Collapse") dispatch(toggleEditMode());
      else if (e.target.innerText === "Add Exam") dispatch(toggleExamModal());
      else if (
        e.target.innerText === "Add Examinee" ||
        e.target.innerText === "Remove Examinee"
      )
        dispatch(toggleExamineeModal());
      else if (e.target.innerText === "View Examinee") {
        dispatch(toggleClass());
        dispatch(toggleExaminee());
      } else if (e.target.innerText === "View Recordings") {
        dispatch(toggleClass());
        dispatch(toggleRecordings());
      } else if (e.target.innerText === "View Recording") {
        dispatch(toggleRecordings());
        dispatch(toggleStudentRecording());
      } else if (
        e.target.innerText === "Join Exam" &&
        _user.status === "student"
      ) {
        dispatch(toggleClass());
        dispatch(toggleJoinExam());
      } else if (e.target.innerText === "Start Exam") {
        dispatch(toggleJoinExam());
        dispatch(toggleExamPage());
      } else if (
        e.target.innerText === "Exit" ||
        e.target.innerText === "Submit"
      ) {
        dispatch(toggleClass());
        dispatch(toggleExamPage());
      }
    }
  };

  return (
    <button
      ref={btn}
      className={
        solid
          ? `bg-white-1 text-black-1 font-medium text-xl w-fit p-3 gap-2 px-10 flex items-center`
          : border
          ? `
    border-2 border-white-1 text-white-1 font-medium text-xl w-fit gap-2 p-3  px-10 flex items-center
      `
          : `
       text-white-1 font-medium text-xl w-fit p-3 gap-2 px-10 flex items-center
      `
      }
      name={text}
      onClick={btnClick}
      style={transparent ? { color: "#484C50" } : null}
    >
      {text === "Remove Examinee" && <BiUserMinus />}
      {text === "Add Examinee" && <BiUserPlus />}
      {text === "View Examinee" && <AiOutlineUser />}
      {text && text === "Delete" && <AiOutlineDelete />}
      {text && text === "Add Class" && <IoMdAdd />}
      {text && text === "Edit" && <AiOutlineEdit />}
      {text && text === "Collapse" && <FiChevronUp />}
      <p className={transparent ? "text-white-2" : null}>{text}</p>
      {text && text === "Continue" && <FiChevronRight />}
    </button>
  );
};

export default Buttons;
