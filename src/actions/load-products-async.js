import { request } from "../utils/request";
import { setProductData } from "./set-product-data";

export const loadProductsAsync = (productId) => (dispatch) =>
  request(`/products/${productId}`).then((postData) => {
    if (postData.data) {
      dispatch(setProductData(postData.data));
    }

    return postData;
  });
