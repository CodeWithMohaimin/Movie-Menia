import React from 'react'

const postCard = ({post}) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default postCard