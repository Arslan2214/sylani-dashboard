import React, { createContext, useState } from "react";

const courseData = createContext();

const DataFunc = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <courseData.Provider value={{data, setData}}>
      {children}
    </courseData.Provider>
  );
}

export default DataFunc;
export { courseData };
