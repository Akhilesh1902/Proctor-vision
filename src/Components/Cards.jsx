import React, { useState } from "react";
import { Images, Vectors } from "./Utils/Images";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Cards = () => {
  const _user = useSelector((state) => state.userReducer.value);

  const [cardCount, setCardCount] = useState(0);
  const navigateTo = useNavigate();
  const cardData = [
    {
      image: Images.teamGoal,
      vector: Vectors.v1,
      content: "We ensure that honesty pays",
    },
    {
      image: Images.devFocus,
      vector: Vectors.v2,
      content: "Customise your assessment and proctoring needs",
    },
    {
      image: Images.analysis,
      vector: Vectors.v3,
      content: "Say no to false reports",
    },
    {
      image: Images.security,
      vector: Vectors.v4,
      content: "Protecting rights,respecting privacy",
    },
  ];

  return (
    <div className="h-full grid place-items-center">
      <div className="card-container w-64 flex flex-col items-center bg-black-2 p-10">
        <div className="img-container grid place-items-center relative">
          <img
            src={cardData[cardCount].image}
            alt=""
            className="absolute w-28"
          />
          <img src={cardData[cardCount].vector} alt="" className="w-28" />
        </div>
        <p className="text-white-1 text-xs my-10">
          {cardData[cardCount].content}
        </p>
        {cardCount < cardData.length - 1 ? (
          <button
            className="flex gap-3 items-center text-white-1"
            onClick={() => {
              setCardCount(cardCount + 1);
            }}
          >
            Continue <FiChevronRight />
          </button>
        ) : (
          <button
            className="flex gap-3 items-center text-white-1"
            onClick={() => {
              navigateTo(`/dash/${_user.name}`);
            }}
          >
            Go To Dashboard <FiChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
