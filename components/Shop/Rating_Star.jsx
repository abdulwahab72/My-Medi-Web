import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating_Star = ({ rating, onClick }) => {
  const rate = Math.round(rating);
  return (
    <div className=" flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)}>
          {rate > i ? (
            <AiFillStar style={{ color: "#ffd700" }} />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating_Star;
