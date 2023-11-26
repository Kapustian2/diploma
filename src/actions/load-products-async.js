import { request } from "../utils/request";
import { setProducts } from "./set-products";

export const loadProductsAsync = (userId) => (dispatch) =>
  request(`/cart/${userId}`).then((productsData) => {
    if (productsData.data) {
      dispatch(setProducts(productsData.data));
    }

    return productsData;
  });
