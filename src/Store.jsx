import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./services/productSlice";
import authReducer from "./services/authSlice"; 
import cartReducer from "./services/cartSlice";
import orderReducer from "./services/Orderslice"; 
import adminOrderReducer from "./services/adminOrderSlice"; 
import adminProductReducer from "./services/adminProductSlice"; 

const store = configureStore({
  reducer: {
    posts: postReducer, 
    auth: authReducer,   
    cart: cartReducer,
    orders: orderReducer, 
    adminOrders: adminOrderReducer, 
    adminProducts: adminProductReducer, 
  },
});

export default store;
