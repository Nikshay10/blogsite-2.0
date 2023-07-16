import React from 'react'
import './PostCard.css'
import {Link,Route,Routes, useNavigate } from 'react-router-dom'
import About from './About'

const PostCard=({id,title,author,content,datePublished,coverPhoto,slug})=> {
  const navigate=useNavigate();
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.avatar.url} className="avatar"/>
        <div className="user-info">
          <h2 className="user-name">{author.name}</h2>
          <p className="post-date">{datePublished}</p>
        </div>
      </div>
      <h1>{title}</h1>
      <Link to="/about">
        <img src={coverPhoto.url} className="cover-photo"/>
      </Link>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <div
          className='post-content'
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
        <a href="about">Read More</a>
    </div>
  )
}

export default PostCard