import React from "react";
import { ImClock } from "react-icons/im";
import Buttons from "../Utils/Buttons";

const StudExam = () => {
  const a = [];

  for (let i = 0; i < 25; i++) a.push(i);

  return (
    <div className="h-full grid place-items-center">
      <div
        className="flex flex-col justify-start gap-6 mt-16 items-center text-white-1"
        style={{ width: "90vw", height: "80vh " }}
      >
        <header className="w-full flex justify-between">
          <div className="flex items-center gap-4">
            <ImClock className="text-3xl" />
            <p className="leading-none">01:33:33</p>
          </div>
          <div className="flex gap-4">
            <Buttons text="Exit" solid />
            <Buttons text="Submit" solid />
          </div>
        </header>
        <div className="flex">
          <div>
            <h2 className="text-left text-2xl pb-5">Question 1</h2>
            <p className=" bg-black-2 p-5 text-lg text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iure unde neque quod commodi velit voluptates modi error saepe
              non.
            </p>
            <div className="mt-5 flex flex-col gap-3 ">
              <div className="flex w-full items-center gap-4 bg-black-2 p-5 text-lg">
                <input type="checkbox" />
                <p className="leading-none">Lorem, ipsum dolor.</p>
              </div>
              <div className="flex w-full items-center gap-4 bg-black-2 p-5 text-lg">
                <input type="checkbox" />
                <p className="leading-none">Lorem, ipsum dolor.</p>
              </div>
              <div className="flex w-full items-center gap-4 bg-black-2 p-5 text-lg">
                <input type="checkbox" />
                <p className="leading-none">Lorem, ipsum dolor.</p>
              </div>
              <div className="flex w-full items-center gap-4 bg-black-2 p-5 text-lg">
                <input type="checkbox" />
                <p className="leading-none">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-5">
            <div className="grid grid-cols-5  grid-rows-5">
              {a.map((a) => (
                <p className="m-2 p-4 tracking-none leading-none bg-black-2 text-center">
                  {a}
                </p>
              ))}
            </div>
            <p className="text-left pl-10 tracking-widest mt-2">{`< 1 2 3 >`}</p>
            <div className="flex gap-4 mt-10">
              <Buttons text="Previous" solid />
              <Buttons text="Next" solid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudExam;
