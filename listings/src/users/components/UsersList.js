import React from 'react';
import './UsersList.css';
import Card from '../../shared/components/UIElements/Card';
import SingleUser from './SingleUser';

const UsersList = props => {
  if(props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No users found</h1>
        </Card>
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
