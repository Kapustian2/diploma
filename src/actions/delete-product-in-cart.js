import { request } from "../utils";

export const deleteProductInCart = (userId, productId) => () =>
  request(`/cart/${userId}`, "DELETE", {
    productId: productId,
  });
