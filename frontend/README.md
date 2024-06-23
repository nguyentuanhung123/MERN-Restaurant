# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Router 

- B1: npm i react-router-dom
- B2: Sửa trong main.jsx
```jsx
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
```

### Lưu ý: Nếu ta để thẻ main có background và thẻ header có postion là fixed thì thẻ header vẫn sẽ có màu trùng với background của thẻ main (chỉ bị đè lên khi ta set thẻ header có màu khác)

```jsx
<div className="">
  <Header />
  <main className="pt-16 bg-slate-100">
    <Outlet />
  </main>
</div>
```

### Lưu ý: Không phải cứ để flex-col là các thẻ con bên trong sẽ có w-full:

- Ví dụ: thẻ form là thẻ con nhưng nó ko có w-full nên ta phải thêm class: w-full

### Khi nhấp chọn chỉ hiện ảnh không hiện video, ....

```jsx
<input type='file' id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage}/>
```

### Lưu ý khi muốn đọc file .env trong VITE: 
- File .env phải nằm trong root (cùng cấp package.json)
- Khi đặt tên các biến trong .env phải có tên bắt đầu là VITE thì mới chạy được
- Thay vì là: process.env... như react-app thì ở Vite là: import.meta.env....

### Sử dụng React-hot-toast
- B1: npm i react-hot-toast
- B2: Vào Ap.jsx và sửa

### Add redux
- B1: npm i redux react-redux @reduxjs/toolkit
- B2: Tạo file index.jsx trong folder redux
```jsx
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```
- B3: Vào main.jsx và sửa
```jsx
// redux
import { store } from './redux/index.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
```

- B4: Tạo slice bằng cách tạo file useSlice.jsx trong folder redux 
```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action);
        }
    }
})

export const { loginRedux } = userSlice.actions

export default userSlice.reducer
```

- B5: Sửa lại file index.jsx trong trong folder redux 

```jsx
import { configureStore } from '@reduxjs/toolkit'

import userSliceReducer from './userSlice';

export const store = configureStore({
    // reducer: {},
    reducer: {
        user: userSliceReducer
    }
})
```
- B6: Sửa lại userSlice.jsx

```jsx
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
            console.log(action.payload.data)
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
```

- B7: Ở file login

```jsx
// redux
import { loginRedux } from '../redux/userSlice';

const userData = useSelector(state => state)
  // console.log("userData on reducer 1: ", userData); // user: {email: "", ....}
  // console.log("userData on reducer 2: ", userData.user); // {email: "", ....}

const dispatch = useDispatch();

if(dataRes.success) {
    dispatch(loginRedux(dataRes))
    setTimeout(() => {
      navigate("/")
    }1000)
} 
console.log(userData);
```

### Lưu ý : 

- Thẻ form khi được đặt trong một thẻ div sẽ luôn có width: 100% dù chứa những thẻ input hay thẻ select nhỏ bên trong
- Thẻ span khi chứa thẻ svg bên trong thì sẽ có width là 100% và height tùy chỉnh nhưng svg bên trong sẽ có mặc định riêng như 48x48
- Ở thẻ textarea khi hiện lên màn hình thì có cơ chế tùy chỉnh dòng (ở bê trái góc dưới) -> để xóa tính năng này ta thêm class: resize-none