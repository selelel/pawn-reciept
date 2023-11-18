var username = "selelei";

const Fetch = async (ign: string) => {
  username = ign;
  try {
    const response = await fetch(
      `https://api.chess.com/pub/player/${username}`
    );

    if (!response.ok) {
      username = "selelei";
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    username = "selelei";
    throw error;
  }
};

const FetchDetail = async (ign: string) => {
  username = ign;
  try {
    const response = await fetch(
      `https://api.chess.com/pub/player/${username}/stats`
    );

    if (!response.ok) {
      username = "selelei";
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    username = "selelei";
    console.error("Fetch error:", error);
    throw error;
  }
};

export { Fetch, FetchDetail };
