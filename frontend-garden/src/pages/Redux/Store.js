// store.js
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Userslice";
import featuredProductsSlice from "./Featureslice";


export default configureStore({
  reducer: {
    user: userSlice.reducer,
    featuredProducts: featuredProductsSlice.reducer,
  },
});