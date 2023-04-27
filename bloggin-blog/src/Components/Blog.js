import React from 'react';
import { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";
import useFetch from "../Components/useFetch";

const Blog = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return(
        <div className="blog">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
}

export default Blog;