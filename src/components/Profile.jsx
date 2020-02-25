import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" />
      </div>
      <div>
        avatar + discription
      </div>
      <div>
        MyPosts
        <div>
          New Post
        </div>

        <div className={s.posts}>
          <div className={s.item}>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>

    </div>
  )

}
export default Profile
