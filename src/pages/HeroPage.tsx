import React, { useContext, useRef } from "react";
import { saveAs } from "file-saver";
import { context } from "../context/context";
import Reciept from "./Reciept";
import { toPng } from "html-to-image";

function Hero() {
  const cont = context();
  const receiptRef = useRef(null);

  const handleDownload = async () => {
    try {
      if (receiptRef.current) {
        const dataUrl = await toPng(receiptRef.current); // Use the imported function
        saveAs(dataUrl, `${cont?.insertName}.png`);
      }
    } catch (error) {
      console.error("Error converting to image:", error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 items-center min-w-fit  mx-auto p-1 mt-16 md:-mt-12  ">
      {/* Left side */}
      <div className="text-white mx-auto">
        <h1 className="font-extrabold text-5xl md:text-6xl w-fit mx-auto min-w-max">
          Pawn<span className="text-green_ "> Reciept</span>
        </h1>
        <p className="text-lg w-fit mx-auto tracking-[.3rem] font-roboto">
          statistics
        </p>
        <h1 className="w-fit mx-auto text-sm mt-3">
          🔽 Generate your Chess Reciept 🔽
        </h1>
        <form
          onSubmit={cont?.onsubmitHandler}
          className="justify-center mx-auto mt-3 flex gap-2"
        >
          <input
            onChange={cont?.onchangeHandler}
            className="border-2 flex justify-center rounded indent-2 border-white bg-transparent md:h-10 outline-none w-full custom-placeholder  hover:scale-[1.02] duration-300 ease-out"
            type="text"
            placeholder="Input your chess.com username here"
          />
          <button
            className=" bg-green_ p-1 rounded"
            type="submit"
            onSubmit={cont?.onsubmitHandler}
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center justify-center -mt-14 md:mt-1 scale-[.7] md:scale-[.75]">
        <div className="w-fit h-fit shadow-xl " ref={receiptRef}>
          <Reciept />
        </div>

        <button
          onClick={handleDownload}
          className="mt-1 bg-green_ w-fit mx-auto p-1 text-white rounded active:scale-95"
        >
          Get your Reciept
        </button>
      </div>
    </div>
  );
}

export default Hero;
