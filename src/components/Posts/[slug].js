import React from 'react'
import { GET_SLUG } from '../../queries/viewQuery';
import { GET_POSTS } from '../../queries/postQuery';
import './BlogPost.css'

export function getStaticPaths() {
    const {loading, error , data} = useQuery(GET_SLUG);
    if(loading) return <LoadingPage/>

    if(error) return <p>error!</p>
  return {
    paths:data.map((post)=>({params:{slug:post.slug}})),
    fallback: false,
  }
}

export function getStaticProps({params}) {
    const slug=params.slug;
    const {loading, error , data} = useQuery(GET_POSTS,{slug});
    if(loading) return <LoadingPage/>

    if(error) return <p>error!</p>
}

export default function BlogPost({post}){
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
    )
}