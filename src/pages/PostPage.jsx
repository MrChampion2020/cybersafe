import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from '../components/PostCard';
const API_URL = import.meta.env.VITE_BACKEND_URL;

const api = API_URL;


export default function PostPage() {
    const { postSlug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState(null);

    useEffect(() => {


        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/api/post/getposts?slug=${postSlug}`);
                const data = await res.json();
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                if (res.ok) {
                    setPost(data.posts[0]);
                    setLoading(false);
                    setError(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPost();
    }, [postSlug]);

    useEffect(() => {
        try {
            const fetchRecentPosts = async () => {
                const res = await fetch(`${api}/api/post/getposts?limit=4`);
                const data = await res.json();
                if (res.ok) {
                    setRecentPosts(data.posts);
                }
            };
            fetchRecentPosts();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner size="xl" />
            </div>
        );
    return (
        <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
                {post && post.title}
            </h1>
            <Link
                to={`/search?category=${post && post.category}`}
                className="self-center mt-5"
            >
                <Button color="gray" pill size="xs">
                    {post && post.category}
                </Button>
            </Link>
            <img
                src={post && post.image}
                alt={post && post.title}
                className="mt-10 p-3 max-h-[600px] w-full object-cover"
            />
            <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
                <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
                <span className="italic">
                    {post && (post.content.length / 1000).toFixed(0)} mins read
                </span>
            </div>
            <div
                className="p-3 max-w-2xl mx-auto w-full post-content"
                dangerouslySetInnerHTML={{ __html: post && post.content }}
            ></div>
            <div className="max-w-4xl mx-auto w-full">
                <CallToAction />
            </div>
            <CommentSection postId={post._id} />
            <div className='flex flex-col justify-center items-center mb-5'>
                <h1 className='text-xl mt-5'>Recent articles</h1>
                <div className='flex flex-wrap gap-5 mt-5 justify-center'>
                    {recentPosts &&
                        recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
                </div>
            </div>
        </main>
    );
}


// import { Button, Spinner } from "flowbite-react";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import CallToAction from "../components/CallToAction";
// import CommentSection from "../components/CommentSection";
// import PostCard from '../components/PostCard';

// const API_URL = import.meta.env.VITE_BACKEND_URL;

// export default function PostPage() {
//     const { postSlug } = useParams();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     const [post, setPost] = useState(null);
//     const [recentPosts, setRecentPosts] = useState(null);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 setLoading(true);
//                 const res = await fetch(`${API_URL}/api/post/${postSlug}`);
//                 if (!res.ok) {
//                     setError(true);
//                     setLoading(false);
//                     return;
//                 }
//                 const data = await res.json();
//                 setPost(data);
//                 setLoading(false);
//                 setError(false);
//             } catch (error) {
//                 console.error('Error fetching post:', error);
//                 setError(true);
//                 setLoading(false);
//             }
//         };
//         fetchPost();
//     }, [postSlug]);

//     useEffect(() => {
//         const fetchRecentPosts = async () => {
//             try {
//                 const res = await fetch(`${API_URL}/api/post/getposts?limit=3`);
//                 if (res.ok) {
//                     const data = await res.json();
//                     setRecentPosts(data.posts);
//                 }
//             } catch (error) {
//                 console.error('Error fetching recent posts:', error);
//             }
//         };
//         fetchRecentPosts();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <Spinner size="xl" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <p className="text-3xl text-red-500">Error loading post</p>
//             </div>
//         );
//     }

//     return (
//         <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
//             <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
//                 {post && post.title}
//             </h1>
//             <Link
//                 to={`/search?category=${post && post.category}`}
//                 className="self-center mt-5"
//             >
//                 <Button color="gray" pill size="xs">
//                     {post && post.category}
//                 </Button>
//             </Link>
//             <img
//                 src={post && post.image}
//                 alt={post && post.title}
//                 className="mt-10 p-3 max-h-[600px] w-full object-cover"
//             />
//             <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
//                 <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
//                 <span className="italic">
//                     {post && (post.content.length / 1000).toFixed(0)} mins read
//                 </span>
//             </div>
//             <div
//                 className="p-3 max-w-2xl mx-auto w-full post-content"
//                 dangerouslySetInnerHTML={{ __html: post && post.content }}
//             ></div>
//             <div className="max-w-4xl mx-auto w-full">
//                 <CallToAction />
//             </div>
//             <CommentSection postId={post && post._id} />
//             <div className='flex flex-col justify-center items-center mb-5'>
//                 <h1 className='text-xl mt-5'>Recent articles</h1>
//                 <div className='flex flex-wrap gap-5 mt-5 justify-center'>
//                     {recentPosts &&
//                         recentPosts.map((recentPost) => (
//                             <PostCard key={recentPost._id} post={recentPost} />
//                         ))}
//                 </div>
//             </div>
//         </main>
//     );
// }

