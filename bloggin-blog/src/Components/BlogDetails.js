import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../Components/useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()


    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }) .then(() => {
            history.push('/')
        })
    }


    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{ blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>

    );
}

export default BlogDetails; 