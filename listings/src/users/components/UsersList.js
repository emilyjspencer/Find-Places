import React from 'react';
import './UsersList.css';
import SingleUser from './SingleUser';

const UsersList = props => {
  if(props.items.length === 0) {
    return (
      <div className="center">
          <h1>No users found</h1>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => {
        return <SingleUser 
          key={user.id} 
          id={user.id} 
          image={user.image} 
          name={user.name} 
          listingsCount={user.listings}
        />
      })}
    </ul>
  );

};

export default UsersList;
