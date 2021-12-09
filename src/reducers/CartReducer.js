export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const checkIfProductAlreadyExists = state.filter(product => (
        product.id === action.payload.id
      ));
      if (!checkIfProductAlreadyExists.length) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
}
