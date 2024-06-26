// eslint-disable-next-line react/prop-types
const CardFeature = ({name, image, price, category, loading}) => {
    return (
        <div className="min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col">
            {
                image ? (
                    <>
                        <div className="h-28 flex flex-col justify-center items-center">
                            <img src={image} className="h-full"/>
                        </div>
                        <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">{name}</h3>
                        <p className="text-center text-slate-500 font-medium">{category}</p>
                        <p className="text-center font-bold">
                            <span className="text-red-500">₹</span>
                            <span>{price}</span>
                        </p>
                        <button className="bg-yellow-500 py-1 mt-2 rounded">Add Cart</button>
                    </>
                ) : (
                    <div className="min-h-[150px] flex justify-center items-center">
                        <p>{loading}</p>
                    </div>
                )
            }
        </div>
    )
}

export default CardFeature