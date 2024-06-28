import { createSlice } from "@reduxjs/toolkit";

// toast
import { toast } from 'react-hot-toast';

const initialState = {
    productList: [],
    cartItem: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            // console.log(action);
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {
            // console.log(action);
            /**
             * Kiểm tra product được thêm vào mảng cartItem đã có chưa bằng cách dùng hàm some
             * 29/6/2024
             */
            const check = state.cartItem.some((el) => el._id === action.payload._id) // true or false
            if(check) {
                toast("Already Item In Cart")
            }
            else {
                toast("Item Add Successfully")
                const total = action.payload.price
                state.cartItem = [...state.cartItem, {...action.payload, qty: 1, total: total}]
            }
        },
        deleteCartItem: (state, action) => {
            // console.log(action.payload);
            toast("one item delete")
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            state.cartItem.splice(index, 1)
            console.log(index);
        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            let quantity = state.cartItem[index].qty
            const qtyInc = ++quantity
            state.cartItem[index].qty = qtyInc

            const price = state.cartItem[index].price
            const total = price * qtyInc

            state.cartItem[index].total = total
        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            let quantity = state.cartItem[index].qty
            if(quantity > 1){
                const qtyDec = --quantity
                state.cartItem[index].qty = qtyDec;

                const price = state.cartItem[index].price;
                const total = price * qtyDec;

                state.cartItem[index].total = total;
            }
        }
    }
})

export const { setDataProduct, addCartItem, deleteCartItem, increaseQty, decreaseQty } = productSlice.actions

export default productSlice.reducer;