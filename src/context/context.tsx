import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { Fetch, FetchDetail } from "../context/fetching_data";

const FetchedData = createContext<unknown>(undefined);

type params = {
  children: ReactNode;
};

function Context({ children }: params) {
  const [data, setData] = useState(null);
  const [data_rate, setData_rate] = useState(null);
  const [insertName, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Fetch(insertName);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDetail_ratings = async () => {
      try {
        const response = await FetchDetail(insertName);
        setData_rate(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetail_ratings();
    fetchData();
  }, [insertName]);

  const onchangeHandler = (e: any) => {
    setName(e.target.value);
  };

  const onsubmitHandler = (e: any) => {
    e.preventDefault();
    setName(insertName);
  };
  return (
    <FetchedData.Provider
      value={{
        data,
        data_rate,
        onchangeHandler,
        onsubmitHandler,
        setData,
        setData_rate,
        setName,
      }}
    >
      {children}
    </FetchedData.Provider>
  );
}

const context = () => {
  return useContext(FetchedData);
};
export { Context, context };
export default FetchedData;

// type output = {
//   data?: string;
//   data_rate?: string;
//   onchangeHandler?: (e: any) => void;
//   onsubmitHandler?: (e: any) => void;
//   setData?: React.Dispatch<React.SetStateAction<null>>;
//   setData_rate?: React.Dispatch<React.SetStateAction<null>>;
//   setName?: React.Dispatch<React.SetStateAction<string>>;
// };
