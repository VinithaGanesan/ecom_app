import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducer/ProductSlice";
import CartSlice from "./reducer/CartSlice";
import userSlice from "./reducer/userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        cart: CartSlice,
        product: ProductSlice, 
    }
})

export default store;
