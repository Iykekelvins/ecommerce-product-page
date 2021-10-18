const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    return { ...state, amount: state.amount + 1, total: state.total + 1 };
  }
  if (action.type === "DECREASE") {
    return { ...state, amount: state.amount - 1, total: state.total - 1 };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "GET_TOTALS") {
    return { ...state, total: (state.total += state.amount) };
  }
  if (action.type === "CLEAR_AMOUNT") {
    return { ...state, amount: state.amount === 0 };
  }
  return { ...state };
};

export default reducer;
