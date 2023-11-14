import React, { useEffect, useState } from "react";
import { context } from "../context/context";
import sel from "../context/img/sel.png";
import chess from "../context/img/chess.png";

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
    const fetchData = async () => {
      setRatings(JSON.parse(JSON.stringify(cont?.data_rate)));
      setData(JSON.parse(JSON.stringify(cont?.data)));
    };

    fetchData();
  }, [cont?.onsubmitHandler]);

  const keys = ratings && Object.keys(ratings);
  const ratingDetail =
    ratings &&
    Object.values(ratings).map((el, i) => {
      const items = keys[i].replace("chess_", "").toUpperCase();
      return i >= 5 ? null : (
        <tr key={i}>
          <td className="text-center">{i + 1}</td>
          <td className="indent-5">{items}</td>
          <td className="text-right">
            {el.last?.rating || el.highest?.rating || el}
          </td>
        </tr>
      );
    });

  const date = new Date();

  return (
    <div className="bg-reciept mx-auto text-black/60 overflow-hidden p-8 font-reciept min-w-[25.5rem] max-w-[25.6rem]">
      <div className="min-w-fit mx-auto w-fit my-5">
        <h1 className="font-extrabold text-5xl text-black/50">Pawn Peek</h1>
        <p className="text-xs w-fit mx-auto -mt-2 tracking-[.3rem]">
          statistics
        </p>
      </div>

      <div className="mt-5">
        <p className="h-4">ORDER #00001 FOR {data?.username?.toUpperCase()}</p>
        <p className="h-4">
          {date.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <p className="text-2xl w-fit mx-auto mt-2">{data?.league}</p>

        <table className="table-auto w-full border-b border-black/60 p-1">
          <thead>
            <tr className="border-t border-b border-black">
              <td className="w-1">QTY</td>
              <td className="indent-5 w-10/12">ITEMS</td>
              <td>RATINGS</td>
            </tr>
          </thead>

          <tbody>{ratingDetail}</tbody>
        </table>
        <div className="flex justify-between h-4">
          <p>ITEMS COUNT</p>
          <p>{ratings && Object.keys(ratings).length - 1}</p>
        </div>
        <div className="flex justify-between border-b border-black">
          <p>PARTISAN</p>
          <p>{data?.followers}</p>
        </div>
        <div>
          <p className="h-4">CARDS #: *** **** *** {date.getFullYear()}</p>
          <p className="h-4">AUTH CODE: 111423</p>
          <p className="h-4">CARDSHOLDER: {data?.username?.toUpperCase()}</p>
        </div>

        <div className="mt-5 flex flex-col justify-center">
          <p className="w-fit mx-auto text-lg">THANK YOU FOR VISITING!</p>
          <img
            className="h-10 w-full overflow-hidden mix-blend-multiply -mt-1"
            src={sel}
            alt="sel"
          />
          <p className="w-fit mx-auto text-xs">selelel.github/pawn-peek</p>
          <img className="w-8 mt-10 mx-auto" src={chess} alt="pawn" />
        </div>
      </div>
    </div>
  );
}

export default Reciept;
