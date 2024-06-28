import { Outlet } from "react-router-dom"
import Header from "./components/Header"

// toast
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

// redux product
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product)

  // console.log(productData);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/products`)
      const resData = await res.json()
      // console.log(resData);
      dispatch(setDataProduct(resData))
    })()
  }, [])

  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
