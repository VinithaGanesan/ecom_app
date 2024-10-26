import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {id} = useParams();
    const products = useSelector(state => state.product.products)
    const [product, setProduct] = useState({})

    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id))
        setProduct(newProduct)
        console.log(newProduct)
        console.log(product)
    }, [id]);



  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row gap-x-16'>
            <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
                <img src={product.image} alt={product.name} className='h-full'/>
            </div>
            <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
                <h2>{product.name}</h2>
                <p className='text-xl font-semibold text-gray-800 mb-4'>
                    ${product.price}
                </p>

                <div className='flex items-center mb-4 gap-x-2'>
                    <input 
                    type="number" 
                    id='quantity'
                    min='1'
                    className='border p-1 w-16' 
                    />
                    <button className='bg-black text-white py-1.5 px-4 hover:bg-gray-600'>
                        Add to Cart
                    </button>
                </div>
                <div className='flex flex-col gap-y-4 mt-4'>
                    <p className='flex items-center'>
                        <FaCarSide className='mr-1'/>
                        Delivery & Return
                    </p>
                    <p className='flex items-center'>
                        <FaQuestion className='mr-1'/>
                        Ask a Question
                    </p>
                </div>
            </div>
        </div>
        <div className='mt-8'>
            <h3 className='text-xl font-bold mb-2'>Product Description</h3>
            <p>This casual yet stylish outfit features a woman confidently dressed in a classic tee shirt paired with versatile jeans, embodying a perfect blend of comfort and contemporary fashion. The tee shirt, crafted from soft, breathable fabric, offers a relaxed fit that complements the timeless design of the jeans, making it an ideal choice for everyday wear or casual outings. This ensemble highlights the effortless elegance of modern attire, suitable for various occasions while ensuring ease of movement and a chic appearance.</p>
        </div>
    </div>
  )
}
