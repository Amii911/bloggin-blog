import React from 'react';


const Home = () => {
 
  function createBlog() {
    console.log('HOW TO CONNECT TO NEW BLOG IN NAVBAR/CREATE COMPONENT')
  }

  return (
    <div className="home">
      <h2>WELCOME TO BLOGGIN BLOG</h2>
      <br/>
      <p>Bloggin Blog is a space for users to share their story, speak their mind and even hang onto a memeory. Users are able to build, manage, and delete blogs easily with Bloggin Blog. Join millions today and create a blog with Bloggin Blog. </p>
    </div>
  );
}
 
export default Home;