import React, { useEffect, useState, useRef } from "react";
import { context } from "../context/context";
import sel from "../context/img/sel.png";
import chess from "../context/img/chess.png";
import Barcode from "react-jsbarcode";

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

  const ratingDetail =
    ratings && typeof ratings === "object" && !Array.isArray(ratings)
      ? Object.values(ratings).map((el, i) => {
          const keys = ratings && Object.keys(ratings);
          const items = keys[i].replace("chess_", "").toUpperCase();
          const ratingValue = el.last?.rating || el.highest?.rating || el;

          return i >= 5 ? null : (
            <tr key={i}>
              <td className="text-center">{i + 1}</td>
              <td className="indent-5">{items}</td>
              <td className="text-right">{ratingValue}</td>
            </tr>
          );
        })
      : null;

  const date = new Date();
  return (
    <>
      <div className="bg-reciept mx-auto w-full text-black/80 overflow-hidden p-8 font-reciept">
        <div className="mx-auto w-fit mt-2 text-black/70 flex flex-col">
          <h1 className="font-extrabold text-3xl ">Pawn Reciept</h1>
          <p className="text-xs w-fit mx-auto -mt-2 tracking-[.3rem]">
            statistics
          </p>
        </div>

        <div className="mt-5">
          <p className="h-4">
            ORDER #00001 FOR {data?.username?.toUpperCase()}
          </p>
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
            <p className="">ITEMS COUNT</p>
            <p className="">{ratings && Object.keys(ratings).length - 1}</p>
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

          <div className="mt-5 justify-center">
            <p className="w-fit mx-auto text-[1.120]">
              THANK YOU FOR VISITING!
            </p>
            <div className="mx-auto overflow-hidden">
              <div className=" w-fit mx-auto mix-blend-multiply opacity-70">
                <Barcode
                  value="selelel"
                  options={{
                    format: "code128",
                    height: 60,
                    margin: 0,
                    fontSize: 0,
                    lineColor: "#000000",
                  }}
                />
              </div>
            </div>

            <p className="w-fit mx-auto text-xs">selelel.github/pawn-peek</p>
            <img className="w-8 mt-10 mx-auto" src={chess} alt="pawn" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reciept;
function saveAs(dataUrl: string, arg1: string) {
  throw new Error("Function not implemented.");
}
