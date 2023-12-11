import { ACTION_TYPE } from "./action-type";

export const deleteProductInCart = (productId) => ({
  type: ACTION_TYPE.DELETE_PRODUCT_FROM_CART,
  payload: { productId },
});
