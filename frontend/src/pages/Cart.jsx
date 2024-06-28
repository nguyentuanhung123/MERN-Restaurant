import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct";


const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem)
  console.log("productCartItem: ", productCartItem);
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Cart Items</h2>

      <div className="my-4">
        {/* display cart items */}
        <div className="w-full max-w-3xl">
          {
            productCartItem.map((el) => {
              return(
                <CartProduct 
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  price={el.price}
                  qty={el.qty}
                  total={el.total}
                />
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