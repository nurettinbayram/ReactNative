export function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [action.payload, ...state];
    }
    case "DELETE": {
      return state.filter((exp) => exp.id !== action.payload.id);
    }
    case "UPDATE": {
      const exp = action.payload.expObject; //handy daha kulanisli
      const updateObject = state.map((expense) => {
        if (expense.id === action.payload.id) {
          //-if the ids match it return updated object if not it will return previus object
          return {
            ...expense, //-overriden amount and desc.
            edit: true,
            amount: exp.amount,
            desciption: exp.desciption,
          };
        }
        //-id does not match condition
        return expense;
      });

      console.log(updateObject);
      console.log(action);

      return updateObject;
    }
    default: {
      return state;
    }
  }
}
