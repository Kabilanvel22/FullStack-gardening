import React, { useState } from 'react';

const Profile = () => {
  const [isActive, setIsActive] = useState(false);

  const menuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="action">
      <div className="profile" onClick={menuToggle}>
        <img src="./assets/avatar.jpg" alt="Avatar" />
      </div>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        <h3>
          Someone Famous<br />
          <span>Website Designer</span>
        </h3>
      </div>
    </div>
  );
};

export default Profile;
