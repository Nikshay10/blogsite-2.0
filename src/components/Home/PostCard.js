import React from 'react'
import './styles.css'

const PostCard=({id,title,author,content,datePublished,coverPhoto,slug})=> {
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
        <img src={coverPhoto.url} class="cover-photo"/>
      <div
        classNameName="post-content"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </div>
  );
};

export default PostCard;
