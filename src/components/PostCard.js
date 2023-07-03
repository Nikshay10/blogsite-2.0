import React from 'react'
import './PostCard.css'
import PostView from './PostView'

function PostCard({id,title,author,content,datePublished,coverPhoto}) {
  return (
    <div class="post">
      <div class="post-header">
        <img src={author.avatar.url} class="avatar"/>
        <div class="user-info">
          <h2 class="user-name">{author.name}</h2>
          <p class="post-date">{datePublished}</p>
        </div>
      </div>
      <img src={coverPhoto.url} class="cover-photo"/>
      <div
          className='post-content'
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      <a href="#" class="read-more">Read More</a>
    </div>
  )
}

export default PostCard