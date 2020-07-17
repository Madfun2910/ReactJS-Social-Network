import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" />
      </div>
      <div className = {s.discriptionBlock}>
        avatar + discription
      </div>
    </div>
  )

}

export default ProfileInfo;
