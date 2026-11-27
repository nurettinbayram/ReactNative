import { createSlice } from "@reduxjs/toolkit";
import { useNavigation } from "@react-navigation/native";

const expencesSlice = createSlice({
  name: "expences",
  initialState: {
    expencesList: [],
  },
  reducers: {
    addExpences: (state, action) => {
      state.expencesList.push(action.payload.newExpence);
      console.log(state.expencesList);
    },
    deleteExpence: (state, action) => {
      state.expencesList = state.expencesList.filter(
        (exp) => exp.id !== action.payload.id,
      );
    },
  },
});

export const addExpences = expencesSlice.actions.addExpences;
export const deleteExpence = expencesSlice.actions.deleteExpence;
export default expencesSlice.reducer;
