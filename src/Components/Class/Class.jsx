import React from "react";
import Modal from "./Modal";
import study from "../../assets/illustrations/study.svg";
import ExamineeModel from "./ExamineeModel";
import { useSelector } from "react-redux";

import Buttons from "../Utils/Buttons";
import DashCards from "../Cards/DashCards";

const Class = () => {
  const _user = useSelector((state) => state.userReducer.value);
  const _modalToggler = useSelector((state) => state.modalReducer.value);
  const _classes = useSelector((state) => state.classReducer.value);

  return (
    <>
      {_classes.length ? (
        <div className="w-10/12 flex flex-col gap-3">
          {_classes.map((course) => (
            <DashCards key={course.cId} course={course} />
          ))}
        </div>
      ) : _user.status === "faculty" ? (
        <div className="h-80 text-white-1 flex flex-col justify-center items-center">
          <p className="text-white-2 text-2xl tracking-wide ">
            You are yet to add classes and exams
          </p>
          <Buttons
            type="button"
            text="Add Class"
            name="addClass"
            border
            prefix="add"
          />
        </div>
      ) : (
        <div className="h-80 text-white-1 flex flex-col justify-center items-center">
          <img src={study} className="w-1/2" alt="" />
          <p className="text-white-2 text-2xl mt-4">
            You're are yet to be added to a class,
            <br />
            till then you can relax
          </p>
        </div>
      )}

      {(_modalToggler.classModal || _modalToggler.examModal) && <Modal />}
      {_modalToggler.examineeModal && <ExamineeModel />}
    </>
  );
};

export default Class;
