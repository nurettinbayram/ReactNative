import { createContext, useState } from "react";

export const DataContext = createContext({
  data: [],
  addData: (userData) => {},
  remaoveData: (email) => {},
});

function DataContextProvider({ children }) {
  const [dataSet, setDataSet] = useState([]);

  function addData(userData) {
    setDataSet((currentEmails) => [...currentEmails, userData]);
    console.log(dataSet);
  }
  function removeData(email) {
    setDataSet((currentData) =>
      currentData.filter((user) => user.email !== email),
    );
  }

  const value = {
    data: dataSet,
    addData: addData,
    removeData: removeData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
