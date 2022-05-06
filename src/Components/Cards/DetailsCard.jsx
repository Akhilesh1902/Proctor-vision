import React from "react";
import Buttons from "../Utils/Buttons";
import { FiBell, FiBellOff } from "react-icons/fi";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeExam } from "../../features";

export const DetailsCard = () => {
  const _user = useSelector((state) => state.userReducer.value);
  const _exams = useSelector((state) => state.examReducer.value);
  const dispatch = useDispatch();
  console.log(_exams);
  console.log(_exams.length);

  if (_exams.length >= 0)
    return _exams.map((exam, index) => (
      <div
        key={index}
        className=" exam-container p-5 flex bg-black-3 items-center text-white-1 text-2xl justify-between"
      >
        <h2 className="exam-name">{exam.examName}</h2>
        <div className="flex items-center gap-3 text-base">
          <p>{exam.examDate}</p>
          <span className="text-xl "> &#183;</span>
          <p>{exam.examTime}</p>
          {exam.status === "View Recordings" ? <FiBellOff /> : <FiBell />}
        </div>
        <div className="flex items-center gap-3">
          <Buttons
            solid
            text={
              _user.status === "faculty"
                ? exam.status
                : exam.status === "View Recordings"
                ? "Completed"
                : exam.status
            }
          />
          {_user.status === "faculty" && (
            <>
              <AiOutlineEdit />
              <AiFillDelete
                onClick={(e) => {
                  const en = e.target
                    .closest(".exam-container")
                    .querySelector(".exam-name").innerText;
                  dispatch(removeExam(en));
                }}
              />
            </>
          )}
        </div>
      </div>
    ));
};
