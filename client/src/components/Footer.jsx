import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

    <footer className='bg-gray-800 text-white p-8 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='font-semibold text-xl'>Gkart</h3>
          <p className='mt-4 text-justify'>
            A world of limitless possibilities awaits you - Gkart brings you the joy of discovery
            with a huge selection of original products from mobiles, fashion, electronics, home appliances grocery and more...
          </p>
        </div>

        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Get to Know</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-lg'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400'><FaFacebook /></a>
            <a href="" className='hover:text-gray-400'><FaTwitter /></a>
            <a href="" className='hover:text-gray-400'><FaGithub /></a>
            <a href="" className='hover:text-gray-400'><FaLinkedin /></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" name="footer-email" id="footer-email" className='w-full rounded-l-lg p-2 bg-gray-800 border border-gray-600' placeholder='Enter Email' />
            <button className='bg-white text-black px-4 py-2 rounded-r-lg border border-gray-600'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 Gkart All rights reserved</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Link to="/policy" className='hover:underline'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
