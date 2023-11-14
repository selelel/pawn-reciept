import React, { useEffect, useState } from "react";
import { context } from "../context/context";

function Reciept() {
  const [data, setData] = useState("");
  const cont = context();
  useEffect(() => {
    setData(JSON.stringify(cont?.data));
  }, [cont?.onsubmitHandler]);

  return (
    <div className="bg-reciept text-black/75 overflow-hidden p-3 max-w-[.5rem] min-w-[15.5rem]">
      {data}
    </div>
  );
}

export default Reciept;
