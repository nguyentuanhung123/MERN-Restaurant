import { useSelector } from "react-redux";
import CardFeature from "./CardFeature"
import FilterProduct from "./FilterProduct"
import { useEffect, useState } from "react";

/**
 * Component này được sử dụng trong Home.jsx và Menu.jsx
 * 
 */

// eslint-disable-next-line react/prop-types
const AllProduct = ({heading}) => {

    const productData = useSelector((state) => state.product.productList);

    /**
     * create categoryList
     * 27/6/2024
     */
    const categoryList =  [...new Set(productData.map((el) => el.category))]
    console.log("categoryList: ", categoryList); // categoryList:['fruits', 'vegetable', 'rice', 'cake', 'burger', 'icream', 'pizza', 'dosa', 'paneer', 'sandwich']

    /**
     * filter data display
     * 27/6/2024
     */
    const [dataFilter, setDataFilter] = useState([])

    useEffect(() => {
        setDataFilter(productData)
    }, [productData])
    
    const handleFilterProduct = (category) => {
        const filter = productData.filter((el) => el.category.toLowerCase() === category.toLowerCase());
        setDataFilter(() => {
            return[
                ...filter
            ]
        })
    }

    return (
        <div className="my-5">
            <h2 className="font-bold text-2xl text-slate-800 mb-4">
                {heading}
            </h2>

            <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
                {
                    categoryList[0] && categoryList.map((el) => {
                        return(
                            <FilterProduct key={el} category={el} onClick={() => handleFilterProduct(el)}/>
                        )
                    })
                }
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-4">
                {
                    dataFilter.map((el) => {
                        return(
                            <CardFeature 
                                key={el._id}
                                id={el._id}
                                image={el.image}
                                name={el.name}
                                category={el.category}
                                price={el.price}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct