import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartopen: false,
    CartItems: []

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        toggleCart(state, action) {
            state.isCartopen = action.payload;

        },

        addItem(state, action) {

            const newItemId = action.payload.id;
            const existingItem = state.CartItems.find(item => item.id === newItemId);

            
            if (existingItem) {
                existingItem.quantity++;

            } else
                state.CartItems.push(action.payload);

        },

        removeitem(state, action) {
            state.CartItems = state.CartItems.filter(item => item.id !== action.payload);
        },

        incrementitem(state, action) {

            state.CartItems = state.CartItems.map(item => {

                if (item.quantity <10) {
                    
                
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            }
              return item;

            });

        },
        decrementitem(state, action) {

            state.CartItems = state.CartItems.map(item => {

                if (item.quantity >1) {
                    
                
                if (item.id === action.payload) {
                    item.quantity--;
                    
                }
                return item;
            }
               return item;

            });
        },

    }
});

export const { addItem, toggleCart, removeitem, incrementitem, decrementitem } = cartSlice.actions;
export default cartSlice.reducer;

