import React from 'react'
import './PostCard.css'
import {browserHistory, Link,Route,Routes } from 'react-router-dom'

const PostCard=({id,title,author,content,datePublished,coverPhoto,slug})=> {
  return (
    <div class="post">
      <div class="post-header">
        <img src={author.avatar.url} class="avatar"/>
        <div class="user-info">
          <h2 class="user-name">{author.name}</h2>
          <p class="post-date">{datePublished}</p>
        </div>
      </div>
      <h1>{title}</h1><Link to={"/Posts/"+slug}>
      <img src={coverPhoto.url} class="cover-photo"/>
      </Link>
      <div
          className='post-content'
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
    </div>
  )
}

export default PostCard