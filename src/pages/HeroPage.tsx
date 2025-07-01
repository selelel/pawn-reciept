import { useRef } from "react";
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
        const dataUrl = await toPng(receiptRef.current);
        saveAs(dataUrl, `${cont?.insertName}.png`);
      }
    } catch (error) {
      console.error("Error converting to image:", error);
    }
  };

  return (
    <div className="flex justify-center align-middle items-center">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center p-1 mt-16 md:-mt-10  w-11/12 ">
        {/*First */}
        <div className="text-white">
          <h1 className="font-extrabold text-4xl md:text-6xl w-fit mx-auto min-w-max">
            Pawn<span className="text-green_ "> Reciept</span>
          </h1>
          <p className="text-lg w-fit mx-auto tracking-[.3rem] font-roboto">
            statistics
          </p>
          <h1 className="w-fit mx-auto text-sm mt-3">
            🔽 Generate your personal reciept 🔽
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
        {/*second */}
        <div className="flex flex-col items-center -mt-14 md:mt-1 scale-[0.8] gap-3">
          <div
            className=" min-w-[25rem] min-h-[29rem] shadow-xl"
            ref={receiptRef}
          >
            <Reciept />
          </div>

          <button
            onClick={handleDownload}
            className="mt-1 bg-green_ p-1 text-white rounded active:scale-95"
          >
            Get your Reciept
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
