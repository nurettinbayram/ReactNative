import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchData } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    //=> Axios.get() makes an asynchronous HTTP request to the backend.
    //=> Since fetching data takes time, we need to use async/await to wait for the response
    //=> before proceeding with the next operations.
    async function getExpenses() {
      setIsFetching(true);
      // 2 saniye bekle
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const expenses = await fetchData();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setErrorMsg("Could NOT fetch expenses!!!");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  if (isFetching) {
    return <LoadingOverlay />;
  }

  function errorHandler() {
    setErrorMsg(null);
  }

  if (errorMsg && !isFetching) {
    return <ErrorOverlay message={errorMsg} onConfirm={errorHandler} />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
