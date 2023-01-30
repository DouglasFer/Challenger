import { createSlice } from "@reduxjs/toolkit";
import { iProduct } from "../bodyCards";

const store = createSlice({
  name: "store",
  initialState: {
    count: 0,
    countShopp: 1,
    addlistProducts: [] as iProduct[],
  },
  reducers: {
    countCart(state) {
      state.count += 1;
    },
    ascProductShopp(state, content) {
      const productIndex = state.addlistProducts.findIndex(
        (product) => product.id === content.payload.id
      );
      const product = state.addlistProducts[productIndex];
      const newProduct = {
        ...product,
        countProduct: product.countProduct + 1,
      };
      state.count += 1;

      state.addlistProducts[productIndex] = newProduct;
    },
    descProductShopp(state, content) {
      const productIndex = state.addlistProducts.findIndex(
        (product) => product.id === content.payload.id
      );
      const product = state.addlistProducts[productIndex];
      const newProduct = {
        ...product,
        countProduct: product.countProduct - 1,
      };
      state.count -= 1;

      state.addlistProducts[productIndex] = newProduct;
    },
    productShopp(state, content) {
      const productIndex = state.addlistProducts.findIndex(
        (product) => product.id === content.payload.id
      );

      if (productIndex === -1) {
        state.addlistProducts.push({ ...content.payload, countProduct: 1 });
      } else {
        const product = state.addlistProducts[productIndex];
        const newProduct = {
          ...product,
          countProduct: product.countProduct + 1,
        };

        state.addlistProducts[productIndex] = newProduct;
      }
    },
    removeShopp(state, content) {
      const removeProductIndex = state.addlistProducts.findIndex(
        (product) => product.id === content.payload.id
      );

      state.addlistProducts.splice(removeProductIndex, 1);
      state.count -= 1;
    },
  },
});

export const {
  countCart,
  productShopp,
  ascProductShopp,
  descProductShopp,
  removeShopp,
} = store.actions;
export default store.reducer;
