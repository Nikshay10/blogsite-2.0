import { useQuery } from '@apollo/client'
import React from 'react'
import {GET_POSTS} from '../queries/postQuery'
import PostCard from './PostCard';
function PostList() {
    const {loading, error , data} = useQuery(GET_POSTS);
    if(loading) return <p>loading...</p>

    if(error) return <p>error!</p>

    return (
        <div>
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
            />
          );
        })}
        </div>
    )
}

export default PostList