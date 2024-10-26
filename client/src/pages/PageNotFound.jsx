import React from 'react'
import { Link } from 'react-router-dom'


export default function PageNotFound() {
    return (
        <div className='text-center py-20 min-h-80'>
            <h4 className='text-5xl font-bold mb-3'>404</h4>
            <h2 className='mb-3 text-xl font-semibold'>Oops! Page Not Found</h2>
            <button className='p-2 hover:underline outline outline-2 mt-2'>
                <Link to="/">
                    Go Back
                </Link>
            </button>
        </div>
    )
}
