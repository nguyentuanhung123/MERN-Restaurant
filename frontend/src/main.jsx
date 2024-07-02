
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import NewProduct from './pages/NewProduct.jsx'
import SignUp from './pages/SignUp.jsx'

// redux
import { store } from './redux/index.jsx'
import { Provider } from 'react-redux'
import Cart from './pages/Cart.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />}/>
      {/* <Route path='menu' element={<Menu />}/> */}
      <Route path='menu/:filterby' element={<Menu />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='newproduct' element={<NewProduct />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<SignUp />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='success' element={<Success />}/>
      <Route path='cancel' element={<Cancel />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
