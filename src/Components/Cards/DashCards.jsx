import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../Utils/Buttons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { DetailsCard } from "./DetailsCard";
import { toggleExpand } from "../../features";

const DashCards = ({ course: { courseName, courseCode } }) => {
  const _dashToggle = useSelector((state) => state.dashTogglesReducer.value);
  const _user = useSelector((state) => state.userReducer.value);
  const dispatch = useDispatch();

  return (
    <div className="text-white-1 text-lg bg-black-2 w-full px-5 py-2 ">
      <div className="flex justify-between items-center py-3  ">
        {_dashToggle.editMode && <input type="checkbox" />}
        <div className="text-left">
          <h1>{courseName}</h1>
          <p className="text-white-2">{courseCode}</p>
        </div>
        {_user.status === "faculty" && <Buttons text="View Examinee" />}
        {_dashToggle.editMode && (
          <>
            <Buttons text="Add Examinee" />
            <Buttons text="Remove Examinee" />
          </>
        )}
        <button
          onClick={() => {
            dispatch(toggleExpand());
          }}
        >
          {_dashToggle.expand ? (
            <FiChevronUp className="text-3xl" />
          ) : (
            <FiChevronDown className="text-3xl" />
          )}
        </button>
      </div>
      {_dashToggle.expand && (
        <div className="flex flex-col justify-center items-center">
          <div
            className="overflow-y-scroll felx w-full mb-4"
            style={{ height: "25vh" }}
          >
            <DetailsCard />
          </div>
          {_user.status === "faculty" && <Buttons text="Add Exam" border />}
        </div>
      )}
    </div>
  );
};

export default DashCards;
