import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/category/categorySlice";
import estateReducer from "../features/estate/estateSlice";
import roleReducer from "../features/role/roleSlice";
import userRoleReducer from "../features/userRoles/userRoleSlice";
import permissionReducer from "../features/permission/permissionSlice";
import rolePermissionReducer from "../features/rolePermission/rolePermissionSlice";
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
    roles: roleReducer,
    userRoles: userRoleReducer,
    permissions: permissionReducer,
    rolePermissions: rolePermissionReducer,
    mails: mailReducer,

    //  carts:cartReducer
    // orders:orderReducer,
  },
});

export default store;
