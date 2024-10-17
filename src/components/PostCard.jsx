import React from 'react'
import service from '../Appwrite/Config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    const defaultImage = '/assets/placeholder-image.jpg';  // Replace with the path to your default image

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200'>
                
                {/* Image Container */}
                <div className='w-full h-48 flex items-center justify-center mb-4 bg-gray-200 rounded-xl overflow-hidden'>
                    <img 
                        src={featuredImage ? service.getFilePreview(featuredImage) : defaultImage} 
                        alt={title}
                        className='object-cover h-full w-full'
                    />
                </div>

                {/* Title */}
                <h2 className='text-xl font-bold text-gray-800'>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
