import React from 'react';
import { useNavigate } from "react-router-dom"

const Blogs = () => {
    let navigator = useNavigate();
    return (
        <div>
            <h1>Blogs</h1>
            <button onClick={() => { navigator("/about")}}>Go to About page</button>
        </div>
    );
};

export default Blogs;
