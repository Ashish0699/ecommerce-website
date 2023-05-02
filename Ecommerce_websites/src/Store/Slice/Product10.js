import { createSlice } from "@reduxjs/toolkit";


const initialState ={

    productopen:false,
    
    Productitem:[]

}
const Exitems = createSlice({

  name:"productstore",
  initialState,
  reducers:{

     newitemsadd(state,action){
        const newid =action.payload.id;
        const exitproducts =state.Productitem.find(item=> item.id === newid);
        if (exitproducts) {
             alert("addedd")
            
        }  else {
               state.Productitem.push(action.payload)
        }


     }



  }



})

export const {}= Exitems.actions;
export default Exitems.reducer;
