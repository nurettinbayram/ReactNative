import { createContext, useState } from "react";

//Here we create FavotiresContext object and we define fome proporty which we don't need and we did for 'auto-coplition'.
//Bu kisim sadece bir structure icndeki ifade bize yol gostersin ve auto-coplition icin tanimladik
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  }

  //    soldaki tanimlamalar componentib kullanilacagi yerde ulasilmasi gererken isimler sag taraf bu bolumde tanimlanan
  //    state ve fonksiyonlara denk gelir.
  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
