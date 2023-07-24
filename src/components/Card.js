import React from 'react';
import './Card.css'

function Card(props) {
    const { user } = props;

  return (
    <div className="info">
      <div className="text_info">
        <h1>Name: {user.first_name} {user.last_name}</h1>
        <h2>Email Id: {user.email}</h2>
        <h2>User Id: {user.id}</h2>
      </div>
      <div className="image_info">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      </div>
    </div>
  );
}

export default Card;
