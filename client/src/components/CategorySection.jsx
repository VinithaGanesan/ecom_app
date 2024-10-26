import React from 'react'
import MenCategory from '../assets/Images/men fashion.jpg'
import WomenCategory from '../assets/Images/women fashion.jpg'
import KidsCategory from '../assets/Images/kids fashion.jpg'

const categories = [
    {
        title: 'Men',
        imageUrl: MenCategory,
    },
    {
        title: 'Women',
        imageUrl: WomenCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidsCategory,
    },
];

export default function CategorySection() {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {categories.map((category, index) => (
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-5 left-6'>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}
