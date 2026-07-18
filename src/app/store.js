import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/category/categorySlice";
import estateReducer from "../features/estate/estateSlice";
import estateMemberReducer from "../features/estateMember/estateMemberSlice";
import maintenanceReducer from "../features/maintenance/maintenanceSlice";
import leaseReducer from "../features/lease/leaseSlice";
import roleReducer from "../features/role/roleSlice";
import userRoleReducer from "../features/userRoles/userRoleSlice";
import permissionReducer from "../features/permission/permissionSlice";
import rolePermissionReducer from "../features/rolePermission/rolePermissionSlice";
import searchSlice from "../features/search/searchSlice";
import productReducer from "../features/products/productSlice";
import paymentAccountReducer from "../features/paymentAccount/paymentAccountSlice";
import propertyReducer from "../features/properties/propertySlice";
import mailReducer from "../features/mail/mailSlice";
import transactionReducer from "../features/transaction/transactionSlice";
import notificationReducer from "../features/notifications/notificationSlice";
import profileReducer from "../features/profile/profileSlice";
import issueReducer from "../features/issue/issueSlice";
import serviceChargeReducer from "../features/serviceCharge/serviceChargeSlice";

const store = configureStore({
  reducer: {
    //  pay:payReducer,
    auth: authReducer,
    products: productReducer,
    properties: propertyReducer,
    // cart : cartSlice,
    // product: detailSlice,
    filter: searchSlice,
    categories: categoryReducer,
    estates: estateReducer,
    estateMembers: estateMemberReducer,
    maintenance: maintenanceReducer,
    leases: leaseReducer,
    roles: roleReducer,
    userRoles: userRoleReducer,
    permissions: permissionReducer,
    paymentAccounts: paymentAccountReducer,
    rolePermissions: rolePermissionReducer,
    mails: mailReducer,
    transactions: transactionReducer,
    notifications: notificationReducer,
    profile: profileReducer,
    issues: issueReducer,
    serviceCharges: serviceChargeReducer,

    //  carts:cartReducer
    // orders:orderReducer,
    /*
The_Time_To_Favour_Godwin_Has_Come_Yes
https://api.safehomeproperties.com/api/webhook


    */
  },
});

export default store;
