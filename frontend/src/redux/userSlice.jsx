import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    firstName: "",
    image: "",
    lastName: "",
    _id: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            // console.log(action); // trả về 1 object {type: 'user/loginRedux', payload: {data: {...}, mesage: "...", success: true}}
            console.log(action.payload.data) // trả về user cũ không phải user mới
            state.email = action.payload.data.email,
            state.firstName = action.payload.data.firstName,
            state.image = action.payload.data.image,
            state.lastName = action.payload.data.lastName,
            state._id = action.payload.data._id
        }
    }
})

export const { loginRedux } = userSlice.actions

export default userSlice.reducer