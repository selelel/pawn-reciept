import React from "react";
import { context } from "../context/context";
import Reciept from "./Reciept";

function Hero() {
  const cont = context();

  return (
    <>
      <div className="flex-rows md:flex items-center h-full justify-center min-w-max mt-[10rem]">
        <div className="text-white min-w-max">
          <h1 className="font-extrabold text-5xl md:text-7xl w-fit mx-auto">
            Pawn<span className="text-green_ "> Peek</span>
          </h1>
          <p className="text-lg w-fit mx-auto tracking-[.3rem] font-roboto">
            statistics
          </p>
          <h1 className="w-fit mx-auto text-sm mt-4">
            🔽 Generate your Chess receipt 🔽
          </h1>
          <form
            onSubmit={cont?.onsubmitHandler}
            className="justify-center w-1/2 mx-auto m-1"
          >
            <input
              onChange={cont?.onchangeHandler}
              className="border-2 flex justify-center rounded indent-3 border-white bg-transparent h-10 outline-none w-full"
              type="text"
              placeholder="chess.com username "
            />
          </form>
        </div>

        <div className="justify-center flex flex-col scale-[.79] md:scale-[.705]">
          <Reciept />
          <button className="mt-1 bg-green_ w-fit mx-auto p-1 text-white rounded active:scale-95">
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
