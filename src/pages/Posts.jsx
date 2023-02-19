import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true);
    async function fetchPosts() {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((json) => setPosts(json))
            .then(setLoader(false));
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <main>
            <div className="pg-header flex justify-between items-center">
                <div className="md:px-[80px] px-[40px]">
                    <h1>Posts</h1>
                </div>
                <div className="md:px-[80px] px-[40px] flex">
                    <Link to="/">Home</Link>
                    <div className="px-2">/</div>
                    <div className="text-slate-500">Posts</div>
                </div>
            </div>
            <div className="content md:px-[80px] px-[40px]">
                {loader ? (
                    <div className="text-center font-bold text-[25px]">Loading...</div>
                ) : (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px]">
                        {posts.map((post) => (
                            <div key={post.id} className="card px-6 border-2 border-[#eee]">
                                <h2 className="font-semibold text-[20px] text-center leading-[24px] mt-2 mb-4">
                                    {post.title}
                                </h2>
                                <p className="mb-3 text-center">{post.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Posts;
