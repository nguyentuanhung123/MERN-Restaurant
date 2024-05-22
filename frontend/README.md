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