import React from 'react';
import BlogList from "../Components/BlogList";
import useFetch from './useFetch';

const Blog = () => {

    const {error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    
    //thing on right will only display if value on the left is truthy
    return(
        <div className="blog">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
           
        </div>
    );
}

export default Blog;  