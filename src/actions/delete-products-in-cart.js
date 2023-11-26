import { request } from "../utils";

export const deleteProductsInCart = (userId, selectedProducts) => () =>
  request(`/cart/${userId}`, "DELETE", {
    data: { products: selectedProducts },
  });
