import { createContext, useState } from "react";
import { BOOKS } from "../constants/data";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoriteContextProvider({ children }) {
  const [favoriteBookId, setFavoriteBookId] = useState([]);

  function addFavorite(id) {
    setFavoriteBookId((currentIds) => [...currentIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteBookId((currentIds) =>
      currentIds.filter((currentId) => currentId !== id),
    );
  }

  const value = {
    ids: favoriteBookId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
