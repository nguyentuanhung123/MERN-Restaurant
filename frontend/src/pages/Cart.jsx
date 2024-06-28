import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct";


const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem)
  console.log("productCartItem: ", productCartItem);
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Cart Items</h2>

      <div className="">
        {/* display cart items */}
        <div className="">
          {
            productCartItem.map((el) => {
              return(
                <CartProduct key={el._id}/>
              )
            })
          }
        </div>

        {/* total cart item */}
        <div className=""></div>
      </div>
    </div>
  )
}

export default Cart