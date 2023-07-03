import React from 'react';
import './PostView.css';

const PostView = () => {
  const post = {
    author: {
      name: 'John Doe',
      avatar: 'avatar.jpg'
    },
    coverPhoto: 'cover-photo.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec nibh consectetur, pharetra lectus a, efficitur nisl. Sed vitae felis non lectus rutrum luctus.',
    date: 'July 3, 2023'
  };

  return (
    <div className="post-view">
      <div className="post-header">
        <img src={post.author.avatar} alt="User Avatar" className="avatar" />
        <div className="user-info">
          <h2 className="user-name">{post.author.name}</h2>
          <p className="post-date">{post.date}</p>
        </div>
      </div>
      <img src={post.coverPhoto} alt="Post Cover Photo" className="cover-photo" />
      <p className="post-content">{post.content}</p>
    </div>
  );
}

export default PostView;
