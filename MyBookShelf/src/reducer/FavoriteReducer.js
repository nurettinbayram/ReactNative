export function favoriteReducer(state, action) {
  if (action.type === "ADD_FAFORITE") {
    console.log("ADDED");
  } else {
    console.log("REMOVED");
  }
}
