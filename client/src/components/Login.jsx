import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../redux/reducer/userSlice';
import { useNavigate } from 'react-router-dom';


export default function Login({ openSignUp, setIsModelOpen }) {
    const [data, setData] = useState({});
    const [rememberme, setRememberme] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchLoginUser(data))
        // setIsModelOpen(false)
        navigate('/shop')
    }


    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" name="email" id="email" className='w-full px-3 py-2 border rounded' placeholder='Enter Email' onChange={(e) => handleChange(e)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" name='password' id='password' className='w-full px-3 py-2 border rounded' placeholder='Enter Password' onChange={(e) => handleChange(e)} />
                </div>
                <div className='mb-4 flex items-center justify-between'>
                    <label htmlFor="rememberme" className='inline-flex items-center'>
                        <input type="checkbox" name="rememberme" id="rememberme" className='form-checkbox' />
                        <span className='ml-2 text-gray-700'>Remember Me</span>
                    </label>
                    <a href="#" className='text-blue-800'>Forgot Password?</a>
                </div>
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-black hover:bg-gray-700 py-2 text-white'>Login</button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Don't Have an Account?</span>
                <button className='text-blue-800 hover:underline' onClick={openSignUp}>SignUp</button>
            </div>
        </div>
    )
}
