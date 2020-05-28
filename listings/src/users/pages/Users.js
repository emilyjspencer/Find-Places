import React from 'react';


import UsersList from '../components/UsersList';


const Users = () => {

    const USERS = [
        {
          id: '1',
          name: 'Emily',
          image: 'https://muppet.fandom.com/wiki/Miss_Piggy?file=Giles_deacon_miss_piggy_04a.png', 
          listings: 5
        }
        ];

  return (
  <div>
    <h1>Users</h1>
    <UsersList items={USERS} />
  </div>
  )
};

export default Users;


