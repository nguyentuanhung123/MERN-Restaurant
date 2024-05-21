import { Outlet } from "react-router-dom"
import Header from "./components/Header"


const App = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  )
}

export default App
