import React from 'react';
import UsersList from '../components/UsersList';
import me from './me.png'


const Users = () => {

    const USERS = [
        {
          id: '1',
          name: 'Emily Spencer',
          image: <img src={me}></img>, 
          listings: 5
        }
    ];

  return (
  <div>
    <h1 align="center">Users</h1>
    <UsersList items={USERS} />
  </div>
  )
};

export default Users;


