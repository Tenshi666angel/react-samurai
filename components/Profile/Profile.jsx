import React from 'react';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <div className='content'>
      <img className='banner' src='https://s3.amazonaws.com/thumbnails.venngage.com/template/0a8867ee-df1e-41ac-b914-053e13b319e8.png'/>
      <div>Ava + Description</div>
      <Posts />
    </div>
    );
}
export default Profile;
