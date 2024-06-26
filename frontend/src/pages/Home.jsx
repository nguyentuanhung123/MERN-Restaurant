// redux
import { useSelector } from 'react-redux'
// icon
import { GrPrevious, GrNext } from 'react-icons/gr'
// ref
import { useRef } from "react";

import CardFeature from "../components/CardFeature";
import HomeCard from "../components/HomeCard"
import AllProduct from "../components/AllProduct";

const Home = () => {
    const productData = useSelector((state) => state.product.productList);
    // console.log("productData data on home: ", productData);
    const homeProductCartList = productData.slice(1,5);
    const homeProductCartListVegetables = productData.filter((el) => el.category === "vegetable")
    // console.log("homeProductCartListVegetables: ", homeProductCartListVegetables);

    // create loading
    const loadingArray = new Array(4).fill(null);
    // console.log("loadingArray : ", loadingArray ); // [null,null,null,null]
    const loadingArrayFeature = new Array(10).fill(null);

    /**
     * create function to scroll
     * 26/6/2024
     */
    const slideProductRef = useRef();
    
    const nextProduct = () => {
        slideProductRef.current.scrollLeft += 200
    }

    const prevProduct = () => {
        slideProductRef.current.scrollLeft -= 200
    }

    return (
        <div className="p-2 md:p-4">
            <div className="md:flex gap-4 py-2">

                <div className="md:w-1/2">
                    <div className="flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full">
                        <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" className="h-7"/>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold py-3">The Fasted Delivery in <span className="text-red-600">Your Home</span></h2>
                    <p className="py-3 text-base"> Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries
                    </p>
                    <button className="font-bold bg-red-500 text-slate-200 px-3 py-2 rounded-md">Order Now</button>
                </div>

                <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
                    {
                        homeProductCartList[0] ? homeProductCartList.map((el) => {
                            return(
                                <HomeCard 
                                    key={el._id}
                                    id={el._id}
                                    image={el.image}
                                    name={el.name}
                                    price={el.price}
                                    category={el.category}
                                />
                            )
                        })
                        :
                        loadingArray.map((el, index) => {
                            return(
                                <HomeCard key={index+"loading"} loading={"Loading..."}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className="">
                <div className="flex w-full items-center">
                    <h2 className="font-bold text-2xl text-slate-800 mb-4">
                        Fresh Vegetables
                    </h2>
                    <div className="ml-auto flex gap-4">
                        <button onClick={prevProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrPrevious /></button>
                        <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrNext /></button>
                    </div>
                </div>
                <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
                    {
                        homeProductCartListVegetables[0] ? homeProductCartListVegetables.map((el) => {
                            return(
                                <CardFeature 
                                    key={el._id+"vegetable"}
                                    id={el._id}
                                    name={el.name}
                                    price={el.price}
                                    category={el.category}
                                    image={el.image}
                                />
                            )
                        })
                        : (
                            loadingArrayFeature.map((el, index) => {
                                return(
                                    <CardFeature key={index+"cartLoading"} loading="Loading..."/>
                                )
                            })
                        )
                    }
                </div>
            </div>

            <AllProduct heading={"Your Product"}/>
        </div>
    )
}

export default Home
