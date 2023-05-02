import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    iswishlistopen: false,
    wichlistitems: []
}
const wishSlice = createSlice({

    name: "wishli",
    initialState,
    reducers: {

           

        addwishlistitem(state, action) {

            const newitemid = action.payload.id;
            const additems = state.wichlistitems.find(item => item.id === newitemid)

            if (additems) {
                alert(" Already Added To WishList")


            }
            else {
                state.wichlistitems.push(action.payload);
                alert(" Add To WishList")


            }

        },

        Toglewishlist(state,action){

            state.iswishlistopen = action.payload;
        },

         Removewichlistitem (state,action){
         
              state.wichlistitems=state.wichlistitems.filter(item=> item.id !== action.payload)

         }

    }
})

export const { addwishlistitem,Toglewishlist,Removewichlistitem } = wishSlice.actions;
export default wishSlice.reducer;