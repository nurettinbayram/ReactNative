import { configureStore } from "@reduxjs/toolkit";

// Burada favoritesReducer dosyanın içinde bulunan bir isim olmak zorunda değil.
// Çünkü default export import ederken ismi sen belirleyebilirsin.
// export default favoritesSlice.reducer; "Ben bir tane default değer gönderiyorum."
// "Ben bu değere burada favoritesReducer diyeceğim."

import favoritesReducer from "./favorite";

export const store = configureStore({
  reducer: {
    favoreteMeals: favoritesReducer,
  },
});
