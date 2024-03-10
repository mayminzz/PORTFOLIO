const initialState = {
  productList: [],
};

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
};
export default ProductReducer;
