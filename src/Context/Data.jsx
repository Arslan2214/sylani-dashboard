import React, { createContext, useState } from "react";

const Data = createContext();

function Database({ childer }) {
  const [data, setData] = useState("Hello");
  return <Data.Provider value={[data, setData]}>{childer}</Data.Provider>;
}

export default Database;
export { Data };