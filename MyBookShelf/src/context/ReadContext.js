import { createContext, useState } from "react";

export const ReadContext = createContext();

export default function ReadContextProvider({ children }) {
  const [ids, setIds] = useState([]);

  function handelRead(id) {
    const isRead = ids.includes(id);
    if (isRead) {
      setIds((currentIds) => currentIds.filter((ID) => ID !== id));
    } else {
      setIds((currentId) => [...currentId, id]);
    }
    console.log(ids);
  }

  const value = {
    handelRead: handelRead,
  };
  return <ReadContext.Provider value={value}>{children}</ReadContext.Provider>;
}
