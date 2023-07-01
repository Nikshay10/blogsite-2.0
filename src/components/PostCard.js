import React from 'react'

function PostCard({id,title,author,content,datePublished,coverPhoto}) {
  return (
    <li>
        <h1>{title}</h1>
        <img src={author.avatar.url}/>
        <img src={coverPhoto.url}/>
    </li>
  )
}

export default PostCard