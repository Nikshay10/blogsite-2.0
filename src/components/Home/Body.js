import React from 'react'
import PostList from './PostList'
import './styles.css'
import Header from './Header'
function Body() {
  return (
    <div className='body'>
      <Header />
        <PostList/>
    </div>
  )
}

export default Body