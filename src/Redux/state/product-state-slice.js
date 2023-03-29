import {createSlice} from "@reduxjs/toolkit";

export const productStateSlice = createSlice({
    name: "product",
    initialState:{
        List:[],
        FromValue:{
            Img:"",
            ProductCode:"",
            ProductName:"",
            Qty:"",
            TotalPrice:"",
            UnitPrice:""
        }
    },
    reducers:{
        setProductList:(state,action)=>{
            state.List = action.payload
        },
        OnChangeProductInput:(state,action)=>{
            state.FromValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ResetProductFromValue:(state,action)=>{
            Object.keys(state.FromValue).forEach((i)=>state.FromValue[i]="");
        }
    }
})

export const {setProductList,OnChangeProductInput}= productStateSlice.actions
export default productStateSlice.reducer