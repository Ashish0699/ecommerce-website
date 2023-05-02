import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slice/Cartslice";
import Wishlist from "./Slice/Wishlist";

const Store = configureStore({

  reducer: {
    cart: Cartslice,
    wishli: Wishlist,

  }
})


export default Store