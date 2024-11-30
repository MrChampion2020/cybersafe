import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import img1 from "../assets/pass.jpeg"
import img2 from "../assets/email.jpg"

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/post/getPosts');
            const data = await res.json();
            setPosts(data.posts);
        };
        fetchPosts();
    }, []);

    const images = [
        img1,
        img2,
        img1,
        img2,
        img1,
      ];

      const [currentImage, setCurrentImage] = useState(0);

      useEffect(() => {
        // Change image every 5 seconds
        const interval = setInterval(() => {
          setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, []);
    
    return (
        <div>
            {/* <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
                <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
                <p className='text-gray-500 text-xs sm:text-sm'>
                    Here you'll find a variety of articles on topics such as
                    web development, software engineering, and programming languages.
                </p>
                <Link
                    to='/search'
                    className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
                >
                    View all posts
                </Link>
            </div> */}

<div className="flex flex-col lg:flex-row gap-6 p-28 px-3 max-w-6xl mx-auto">
      {/* Left Side: Text Section */}
      <div className="flex flex-col gap-6 text-left lg:w-1/2">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to Cyber Safe</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles on topics such as web development,
          software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      {/* Right Side: Image Carousel */}
      <div
        className="relative lg:w-1/2 h-72 sm:h-96 lg:h-auto bg-center bg-cover"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        {/* Mobile view */}
        <div className="lg:hidden absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
      </div>
    </div>


            <div className='p-3 bg-amber-100 dark:bg-slate-700'>
                <CallToAction />
            </div>

            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
                {posts && posts.length > 0 && (
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
                        <div className='flex flex-wrap gap-4'>
                            {posts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </div>
                        <Link
                            to={'/search'}
                            className='text-lg text-teal-500 hover:underline text-center'
                        >
                            View all posts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home
