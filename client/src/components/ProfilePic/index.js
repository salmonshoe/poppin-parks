import React from 'react';
import './style.css';

function ProfilePic(props) {
    return (
        <div className="photo" style={{ backgroundImage: `url(${props.backgroundImage})` }} />

    );
}

export default ProfilePic;