import React from 'react';
import {useParams} from "react-router-dom";

const Blog = () => {
    const params = useParams();
    return (
        <div>
            <h1>Blog Post id {params.postId}</h1>
        </div>
    );
};

export default Blog;
