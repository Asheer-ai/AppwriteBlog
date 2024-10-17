import React, { useEffect, useState } from 'react';
import service from '../Appwrite/Config';
import { Container, PostCard } from '../components';
import Pic1 from "../assets/Pic1.png";

function Home() {
    const [posts, setPosts] = useState([]);
    // Added loading state

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            
        });
    }, []);



    
    return (
        <div className="w-full py-8" style={{ backgroundColor: '#D3D3D3' }}> 
            <Container>
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 p-4">
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                                Welcome to Our Blogging Website!
                            </h1>
                            <p className="text-lg text-gray-700 mb-6">
                                Discover a world of creativity, inspiration, and knowledge through our engaging blog posts. 
                                We share articles on a variety of topics to help you stay informed and entertained. Happy reading!
                            </p>
                            <p className="text-md text-gray-500">
                                Feel free to explore our blog posts below and immerse yourself in amazing stories from various authors.
                                Whether you’re looking for tips, reviews, or personal stories, we’ve got something for everyone.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <img 
                                src={Pic1} 
                                alt="Blog illustration" 
                                className="rounded-lg shadow-md w-full h-auto "
                            />
                        </div>
                    </div>
                </div>

                {/* Blog Posts Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2'>
                            <PostCard {...post} className="transition-transform duration-300 transform hover:scale-105" />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
