import React, { useState } from "react";

import { FaUserAlt } from "react-icons/fa";
import Class from "../Components/Class/Class";
import { useNavigate } from "react-router-dom";
import ViewExaminee from "../Components/Class/ViewExaminee";
import ExamRecordings from "../Components/Class/ExamRecordings";

import { useSelector } from "react-redux";
import Buttons from "../Components/Utils/Buttons";
import StudentRecordings from "../Components/Class/StudentRecordings";
import ExamStart from "../Components/studentExam/ExamStart";
import StudExam from "../Components/studentExam/StudExam";

const Dash = () => {
  const _user = useSelector((state) => state.userReducer.value);
  const _dashToggles = useSelector((state) => state.dashTogglesReducer.value);

  const [editMode, setEditMode] = useState(false);
  const navigateTo = useNavigate();

  const toggleSave = () => {
    setEditMode(false);
  };
  const toggleCancel = () => {
    setEditMode(false);
  };

  // const rUser = useSelector((state) => state.user.value);

  // if (user.status === "student") return <h1>hi</h1>;
  if (_dashToggles.viewExaminee) return <ViewExaminee />;
  else if (_dashToggles.viewRecordings) return <ExamRecordings />;
  else if (_dashToggles.viewStudentRecording) return <StudentRecordings />;
  else if (_dashToggles.joinExam) return <ExamStart />;
  else if (_dashToggles.examPage) return <StudExam />;
  else {
    return (
      <div className="grid h-full place-items-center">
        <div className="dash-container flex flex-col h-screen pt-28 justify-between items-center">
          <header className="header w-screen flex items-center justify-between px-10">
            <h1 className="text-white-1 text-3xl">My Classes</h1>
            {_user.status === "faculty" && (
              <ul className="flex gap-8 items-center text-white-1 w-fit text-xl">
                <li>
                  {_dashToggles.editMode ? (
                    <Buttons type="button" text="Collapse" transparent />
                  ) : (
                    <Buttons type="button" text="Edit" prefix="edit" />
                  )}
                </li>
                <li>
                  {_dashToggles.editMode ? (
                    <Buttons type="button" text="Delete" transparent />
                  ) : (
                    <Buttons type="button" text="Add Class" prefix="edit" />
                  )}
                </li>
              </ul>
            )}
          </header>
          <div className="w-full h-3/4 my-4  justify-self-center flex flex-col items-center overflow-y-scroll">
            <Class />
          </div>

          <footer className="relative text-white-1 w-full flex p-10  justify-between">
            {editMode && (
              <div className=" absolute -top-4 right-0 mr-10 flex gap-6 ">
                <button className="border-2 p-2 px-6" onClick={toggleCancel}>
                  Cancel
                </button>
                <button
                  className="p-2 px-6 bg-white-1 text-black-1"
                  onClick={toggleSave}
                >
                  Save Changes
                </button>
              </div>
            )}
            {_user.status === "student" && <p>Take Demo Exam</p>}
            <button
              className="flex"
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
  }
};

export default Dash;
