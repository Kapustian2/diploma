import { request } from "../utils";

export const deleteProductsInCart = (userId, selectedProducts) => () =>
  request(`/carts/${userId}`, "DELETE", {
    products: selectedProducts.map((product) => ({ productId: product })),
  });
