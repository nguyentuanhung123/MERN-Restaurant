import { useState } from 'react'
import loginSignupImage from '../assets/login-animation.gif'

// icons
import { BiShow, BiHide } from 'react-icons/bi'

// router
import { Link, useNavigate } from 'react-router-dom';

// toast
import { toast } from 'react-hot-toast';

// redux
import { loginRedux } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const userData = useSelector(state => state)
    // console.log("userData on reducer 1: ", userData); // user: {email: "", ....}
    // console.log("userData on reducer 2: ", userData.user); // {email: "", ....}

    const dispatch = useDispatch();

    // console.log("Data: ", data);

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return{
                ...prev,
                [name]: value
            }
        })
    }  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        if( email && password ) {
            const dataResponse = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/signin`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const dataRes = await dataResponse.json()
            // console.log(dataRes);
            
            toast(dataRes.message)

            if(dataRes.success) {
                dispatch(loginRedux(dataRes))
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            } 
            // console.log(userData); // trả về user cũ (hoặc không có dữ liệu)
        }
        else {
            alert("Please enter required fields")
        }
    }

    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
                {/* <h1 className="text-center text-2xl font-bold">Sign up</h1> */}
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                    <img src={loginSignupImage} className='w-full'/>
                </div>

                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

                    <label htmlFor='email' className=''>Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
                        value={data.email}
                        onChange={handleOnChange}
                    />

                    <label htmlFor='password' className=''>Password</label>
                    <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300'>
                        <input 
                            type={showPassword ? "text": "password"} 
                            id='password' 
                            name='password' 
                            className='w-full bg-slate-200 border-none outline-none'
                            value={data.password}
                            onChange={handleOnChange}
                        />
                        <span className='flex justify-center items-center cursor-pointer' onClick={handleShowPassword}>
                            {
                                showPassword ? <BiShow/> : <BiHide/>
                            }
                        </span>
                    </div>

                    <button type='submit' className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>
                        Login
                    </button>
                </form>
                <p className='text-left text-sm mt-2'>
                    Don&apos;t have account ?{" "} 
                    <Link to={"/signup"} className='text-red-500 underline'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
