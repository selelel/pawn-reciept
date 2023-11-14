import React, { useEffect, useState } from "react";
import { context } from "../context/context";
const sel = require("../context/img/sel.png");
const chess = require("../context/img/chess.png");

interface RatingData {
  last?: {
    rating?: number;
  };
  highest?: {
    rating?: number;
  };
}

function Reciept() {
  const cont = context();
  const [ratings, setRatings] = useState<RatingData>(
    JSON.parse(JSON.stringify(cont?.data))
  );
  const [data, setData] = useState(JSON.parse(JSON.stringify(cont?.data)));

  useEffect(() => {
    setRatings(JSON.parse(JSON.stringify(cont?.data_rate)));
    setData(JSON.parse(JSON.stringify(cont?.data)));
  }, [cont?.onsubmitHandler]);
  console.log(data);
  const ratingDetail =
    ratings &&
    Object.values(ratings).map((el, i) => {
      const items = ["DAILY", "RAPID", "BULLET", "BLITZ", "TACTICS"];
      console.log(el && el.last?.rating);
      return (
        <tr key={Math.random()}>
          <td className="text-center">{i === 5 || i + 1}</td>
          <td className="indent-5">{items[i]}</td>
          <td className="text-right">
            {el.last?.rating || el.highest?.rating}
          </td>
        </tr>
      );
    });

  const date = new Date();

  return (
    <div className="bg-reciept text-black/75 overflow-hidden p-8 max-w-[22.6rem] min-w-[22.5rem] font-reciept">
      <div className="text-black/60 min-w-fit mx-auto w-fit my-5">
        <h1 className="font-extrabold text-5xl ">
          Pawn<span className="text-black/60 "> Peek</span>
        </h1>
        <p className="text-xs w-fit mx-auto -mt-2 tracking-[.3rem]">
          statistics
        </p>
      </div>

      <div className="mt-5">
        <p>ORDER #00001 FOR {data?.username.toUpperCase()}</p>
        <p>
          {day(date.getDay())}, {Month(date.getMonth())} {date.getDate()},{" "}
          {date.getFullYear()}
        </p>

        <p className="text-2xl w-fit mx-auto mt-2">{data?.league}</p>

        <table className="table-auto w-full border-b border-black">
          <thead>
            <tr className="border-t border-b border-black">
              <td className="w-1 mx">QTY</td>
              <td className="indent-5 w-10/12">ITEMS</td>
              <td>RATINGS</td>
            </tr>
          </thead>

          <tbody>{ratingDetail}</tbody>
        </table>
        <div className="flex justify-between h-4">
          <p>ITEMS COUNT</p> <p>{ratings && Object.keys(ratings).length - 1}</p>
        </div>
        <div className="flex justify-between border-b border-black">
          <p>PARTISAN</p> <p>{data?.followers}</p>
        </div>
        <div>
          <p className="h-4">CARDS #: *** **** *** {date.getFullYear()}</p>
          <p className="h-4">AUTH CODE: 111423</p>
          <p className="h-4">CARDSHOLDER: {data?.username.toUpperCase()}</p>
        </div>

        <div className="mt-5 flex flex-col justify-center">
          <p className="w-fit mx-auto text-lg">THANK YOU FOR VISITING!</p>
          <img
            className="h-10 w-full overflow-hidden mix-blend-multiply -mt-1"
            src={sel}
            alt="sel"
          />
          <p className="w-fit mx-auto text-xs">selelel.github/pawn-peek</p>
          <img className="w-8 mx-auto" src={chess} alt="pawn" />
        </div>
      </div>
    </div>
  );
}

const day = (e: number) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wenesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days.filter((cur, i) => {
    return i === e;
  });
};

const Month = (e: number) => {
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return Months.filter((cur, i) => {
    return i === e;
  });
};

export default Reciept;
