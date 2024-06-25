

// eslint-disable-next-line react/prop-types
const HomeCard = ({name, image,category,price}) => {
    return (
        <div className="bg-white shadow-md p-2 rounded">
            <div className="w-40 h-40 min-h-[150px]">
                <img src={image} className="h-full w-full mix-blend-multiply"/>
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
            <p className="text-center text-slate-500 font-medium">{category}</p>
            <p className="text-center font-bold"><span className="text-red-500">₹</span><span>{price}</span></p>
        </div>
    )
}

export default HomeCard
