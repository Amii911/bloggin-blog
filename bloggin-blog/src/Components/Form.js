import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Add Blogger Name');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
//POST reuqest made to send data to server
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/blog');
    })
  }

  return (
    <div className="form">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
           <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>ADD BLOG</button>
      </form>
    </div>
  );
}
 
export default Form;

