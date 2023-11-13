import axios from "axios";

const Fetch = async (ign: string) => {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${ign}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const FetchDetail = async (ign: string) => {
  try {
    const response = await fetch(
      `https://api.chess.com/pub/player/${ign}/stats`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export { Fetch, FetchDetail };
