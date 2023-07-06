import React from 'react';
import './PostCard.css';
import { browserHistory, Link, Route, Routes } from 'react-router-dom';

const PostCard = ({
  id,
  title,
  author,
  content,
  datePublished,
  coverPhoto,
  slug,
}) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.avatar.url} className="avatar" />
        <div className="user-info">
          <h2 className="user-name">{author.name}</h2>
          <p className="post-date">{datePublished}</p>
        </div>
      </div>
      <h1>{title}</h1>
      <Link to={'/Posts/' + slug}>
        <img src={coverPhoto.url} className="cover-photo" />
      </Link>
      <div
        classNameName="post-content"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </div>
  );
};

export default PostCard;
