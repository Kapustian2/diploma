const initialProductState = {
  id: null,
  title: null,
  price: null,
  imageUrl: null,
  category: null,
  sale: null,
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
