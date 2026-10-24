import { createContext, useState } from "react";
import { BOOKS } from "../constants/data";

export const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const [books, setBooks] = useState([...BOOKS]);

  function categoryHandler(text) {
    if (text === "All") {
      setBooks(BOOKS);
    } else {
      setBooks(BOOKS.filter((book) => book.category === text));
    }
  }

  const value = {
    books: books,
    categoryHandler: categoryHandler,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
