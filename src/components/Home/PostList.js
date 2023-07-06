import { useQuery } from '@apollo/client'
import React from 'react'
import {GET_POSTS} from '../../queries/postQuery'
import PostCard from './PostCard';
import './PostList.css';
import LoadingPage from '../LoadingPage';

function PostList() {
    const {loading, error , data} = useQuery(GET_POSTS);
    if(loading) return <LoadingPage/>

    if(error) return <p>error!</p>

    return (
        <div className='blog-container'>
        {data.postsConnection.edges.map((edge) => {
          const postMeta = edge.node;
          return (
            <PostCard
              key={postMeta.id}
              title={postMeta.title}
              author={postMeta.author}
              content={postMeta.content}
              datePublished={postMeta.datePublished}
              coverPhoto={postMeta.coverPhoto}
              slug={postMeta.slug}
            />
          );
        })}
        </div>
    )
}

export default PostList