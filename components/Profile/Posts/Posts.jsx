import React from 'react';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div>
    <h3>Posts</h3>
      <div>
        <textarea placeholder='Enter post text' className='add-post'></textarea>
        <button>new post</button>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
    );
}
export default Posts;
