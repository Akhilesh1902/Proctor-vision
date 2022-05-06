import React from "react";
import { FiBell, FiBellOff } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { users } from "../user";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

const Exam = ({
  exam: { examDate, examName, examTime, status },
  setViewExamRecordings,
  setViewExaminee,
}) => {
  const { userName } = useParams();
  const _lUser = users.find((u) => u.name === userName);
  return (
    <div className="p-5 flex bg-black-3 items-center justify-between">
      <h2>{examName}</h2>
      <div className="flex items-center gap-3">
        <p>{examDate}</p>
        <span className="text-xl"> &#183;</span>
        <p>{examTime}</p>
        {status === "View Recordings" ? <FiBellOff /> : <FiBell />}
      </div>
      <div className="flex items-center gap-3">
        <button
          className={
            status === "Not Started yet"
              ? "p-3 px-6 leading-none bg-white-1 bg-opacity-50 text-black-1 text-sm"
              : "p-3 px-6 leading-none bg-white-1 text-black-1 text-sm"
          }
          onClick={() => {
            console.log("btn");
            if (status === "View Recordings") {
              console.log("inside");
              setViewExamRecordings(true);
              setViewExaminee(false);
            }
          }}
        >
          {status}
        </button>
        {_lUser.status === "faculty" && (
          <>
            <AiOutlineEdit />
            <AiFillDelete />
          </>
        )}
      </div>
    </div>
  );
};

export default Exam;
