import axios from "axios";

const BACKEND_URL = "https://expenseapp-ad7a9-default-rtdb.firebaseio.com";

/**
 * Send data to database
 * @param {object} expenseData
 */
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/Expenses.json",
    expenseData,
  );
  const id = response.data.name; //-> axios provide id once we post data with name property.
  return id; //-> we have to use the id in local.
}

export async function fetchData() {
  const response = await axios.get(BACKEND_URL + "/Expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expense) {
  return axios.put(BACKEND_URL + `/Expenses/${id}.json`, expense);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/Expenses/${id}.json`);
}
