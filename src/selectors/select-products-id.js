export const selectUserCartProductIds = ({ userCart }) =>
  userCart.map((product) =>
    product.product.id !== undefined ? product.product.id : null
  );
