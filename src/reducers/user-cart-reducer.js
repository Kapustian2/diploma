import { ACTION_TYPE } from "../actions/action-type";

const initialUserCartState = [];

export const userCartReducer = (state = initialUserCartState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_CART: {
      return [...state, action.payload.product];
    }
    case ACTION_TYPE.DELETE_PRODUCTS_FROM_CART: {
      return state.filter(({ id }) => id !== action.id);
    }
    case ACTION_TYPE.DELETE_PRODUCT_FROM_CART: {
      return state.filter(
        ({ product }) => product.id !== action.payload.productId
      );
    }
    default:
      return state;
  }
};
