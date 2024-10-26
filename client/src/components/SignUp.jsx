import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSignUpUser } from '../redux/reducer/userSlice';
import { useNavigate} from 'react-router-dom'


export default function SignUp({ openLogin, setIsModelOpen }) {
    const [signUpData, setSignUpData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchSignUpUser(signUpData))
        // setIsModelOpen(false)
        navigate('/login');
    }



    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="username" className='block text-gray-700'>Your Name</label>
                    <input type="text" name="username" id="username" className='w-full px-3 py-2 border rounded' placeholder='Enter Username' onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" name="email" id="signup-email" className='w-full px-3 py-2 border rounded' placeholder='Enter Email' onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="mobilenumber">Mobile Number</label>
                    <input type="text" name="mobilenumber" id="mobilenumber" className='w-full px-3 py-2 border rounded' placeholder='Enter Mobile Number' onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" name='password' id='signup-password' className='w-full px-3 py-2 border rounded' placeholder='Enter Password' onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-black hover:bg-gray-700 py-2 text-white'>Create Account</button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Already have an Account?</span>
                <button className='text-blue-800 hover:underline' onClick={openLogin}>Login</button>
            </div>

        </div>
    )
}
