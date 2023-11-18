import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { Fetch, FetchDetail } from "../context/utils/fetching_data";

type Outputprops = {
  data?: string | null;
  data_rate?: string | null;
  onchangeHandler?: (e: any) => void;
  onsubmitHandler?: (e: any) => void;
  setData?: React.Dispatch<React.SetStateAction<null>>;
  setData_rate?: React.Dispatch<React.SetStateAction<null>>;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  insertName?: string;
};

const FetchedData = createContext<Outputprops | null>(null);

type params = {
  children: ReactNode;
};

function Context({ children }: params) {
  const [data, setData] = useState(null);
  const [data_rate, setData_rate] = useState(null);
  const [insertName, setName] = useState("selelei");
  let value = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Fetch(insertName.toLowerCase());
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDetail_ratings = async () => {
      try {
        const response = await FetchDetail(insertName.toLowerCase());
        setData_rate(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetail_ratings();
    fetchData();
  }, [insertName]);

  const onchangeHandler = (e: any) => {
    value = e.target.value;
  };

  const onsubmitHandler = (e: any) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <FetchedData.Provider
      value={{
        data,
        data_rate,
        onchangeHandler,
        onsubmitHandler,
        setName,
        insertName,
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
