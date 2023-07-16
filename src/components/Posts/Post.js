import React from 'react';
import PropTypes from 'prop-types';

// CSS styles
const styles = {
  postContainer: {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    padding: '10px',
  },
  authorContainer: {
    marginRight: '10px',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  postContent: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  content: {
    fontSize: '14px',
    lineHeight: '1.4',
  },
  date: {
    fontSize: '12px',
    color: '#888',
  },
};

const Post = ({ author, title, content, date }) => {
  return (
    <div style={styles.postContainer}>
      <div style={styles.authorContainer}>
        <img src={author.avatar} alt={author.name} style={styles.avatar} />
      </div>
      <div style={styles.postContent}>
        <div style={styles.title}>{title}</div>
        <div style={styles.content}>{content}</div>
        <div style={styles.date}>{date}</div>
      </div>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
