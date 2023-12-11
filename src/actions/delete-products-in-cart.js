import { ACTION_TYPE } from "./action-type";

export const deleteProductsInCart = (product) => ({
  type: ACTION_TYPE.DELETE_PRODUCTS_FROM_CART,
  payload: { product },
});
