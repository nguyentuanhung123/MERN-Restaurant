import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

//icons
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsCartFill } from 'react-icons/bs'
import { useState } from 'react'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    
    const handleShowMenu = () => {
        setShowMenu((prev) => !prev)
    }

    return (
        <div className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50'>
            {/* desktop */}

            <div className="flex items-center justify-between h-full">
                <Link to={""}>
                    <div className="h-10">
                        <img src={logo} className='h-full'/>
                    </div>
                </Link>

                <div className='flex items-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>
                    <div className='text-2xl text-slate-600 relative'>
                        <BsCartFill />
                        <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm flex items-center justify-center'>0</div>
                    </div>
                    <div className='text-slate-600' onClick={handleShowMenu}>
                        <div className='text-3xl cursor-pointer'>
                            <HiOutlineUserCircle />
                        </div>
                        {
                            showMenu && (
                                <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md'>
                                    <p className='whitespace-nowrap cursor-pointer'>New product</p>
                                    <p className='whitespace-nowrap cursor-pointer'>Login</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>


            {/* mobile */}
        </div>
    )
}

export default Header
