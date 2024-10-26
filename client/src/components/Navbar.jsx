import React, { useEffect, useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal';
import Login from './Login';
import SignUp from './SignUp';
import { setSearchTerm } from '../redux/reducer/ProductSlice';
import Logo from '../assets/Images/icons8-letter-g-cute-clipart-96.png';


export default function Navbar() {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const { isloggedIn } = useSelector(state => state.user);

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openSignUp = () => {
        setIsLogin(false)
        setIsModelOpen(true);
        console.log(isloggedIn)
    }

    const openLogin = () => {
        setIsLogin(true);
        setIsModelOpen(true)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate('/filter-data')
    }

    const products = useSelector(state => state.cart.products);

    useEffect(() => {

    }, []);

    return (
        <nav className='bg-gray-800 shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center text-white'>
                <div className='text-lg font-bold'>
                    <Link to="/" className='flex items-center space-x-1'>
                        <div>
                            <img src={Logo} alt="logo" width={30} />
                        </div>
                        <div>
                            kart
                        </div>
                    </Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type="text" name="" id="" placeholder='Search Product'
                            className='w-full border py-2 px-4'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch className='absolute top-3 right-3' />
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute top-0 left-3 text-xs w-3 rounded-full flex justify-center items-center text-white bg-red-600'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                    {
                        isloggedIn ? <>true</> : <>false</>
                    }
                    <button
                        className='hidden md:block'
                        onClick={() => setIsModelOpen(true)}
                    >
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold text-white'>
                <Link to="/" className='hover:underline'>Home</Link>
                <Link to="/shop" className='hover:underline'>Shop</Link>
                <Link to="/contact" className='hover:underline'>Contact</Link>
                <Link to="/about" className='hover:underline'>About</Link>
            </div>
            {/* {
                isLogin ? 
                <Link to="/login">Login</Link>
                : <Link to="/signup">SignUp</Link>
            } */}
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                {isLogin ?
                    <Link to='/login'>
                        <Login openSignUp={openSignUp} setIsModelOpen={setIsModelOpen} />
                    </Link>
                    :
                    <Link to='/signup'>
                        <SignUp openLogin={openLogin} setIsModelOpen={setIsModelOpen} />
                    </Link>
                }
            </Modal>
        </nav>
    )
}
