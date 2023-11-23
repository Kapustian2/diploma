import { request } from "../utils";

export const deleteProduct = (id) => () => request(`/products/${id}`, "DELETE");
