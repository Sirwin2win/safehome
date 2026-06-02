import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/category/categorySlice";
import estateReducer from "../features/estate/estateSlice";
import searchSlice from "../features/search/searchSlice";
import productReducer from "../features/products/productSlice";
import mailReducer from "../features/mail/mailSlice";

const store = configureStore({
  reducer: {
    //  pay:payReducer,
    auth: authReducer,
    products: productReducer,
    // cart : cartSlice,
    // product: detailSlice,
    filter: searchSlice,
    categories: categoryReducer,
    estates: estateReducer,
    mails: mailReducer,
    //  carts:cartReducer
    // orders:orderReducer,
  },
});

export default store;
