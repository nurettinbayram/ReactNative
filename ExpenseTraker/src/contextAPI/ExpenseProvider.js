import { createContext, useReducer } from "react";
import { expenseReducer } from "./expenseReducer";

const expenceInitialList = [
  {
    amount: "2500",
    date: "Fri Nov 13 2026",
    desciption: "Computer ",
    id: 1794571335949,
  },
  {
    amount: "500",
    date: "Fri Nov 13 2026",
    desciption: "Phone ",
    id: 1794571349651,
  },
];

export const ExpenseContext = createContext({
  listOfExpense: [],
  addExpense: (desciption, amount) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expObject) => {},
});

export default function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, expenceInitialList);

  function addExpense(desciption, amount) {
    dispatch({
      type: "ADD",
      payload: {
        amount: amount,
        desciption: desciption,
        id: Date.now(),
        date: new Date().toDateString(),
      },
    });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: { id: id } });
  }

  function updateExpense(id, expObject) {
    dispatch({ type: "UPDATE", payload: { id: id, expObject: expObject } });
  }

  const value = {
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    listOfExpense: state,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
