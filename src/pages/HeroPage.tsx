import React from "react";
import { context } from "../context/context";
import Reciept from "./Reciept";

function Hero() {
  const cont = context();

  return (
    <>
      <div className="flex items-center h-full gap-10 justify-center">
        <div className="text-white min-w-fit">
          <h1 className="font-extrabold text-7xl ">
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
            className="justify-center w-11/12 mx-auto m-1"
          >
            <input
              onChange={cont?.onchangeHandler}
              className="border-2 rounded indent-3 border-white bg-transparent h-10 outline-none w-full"
              type="text"
            />
            {/*Make a reuasble input components*/}
          </form>
        </div>
        <div className="text-white overflow-hidden">
          <div className="justify-end flex">
            <Reciept />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
