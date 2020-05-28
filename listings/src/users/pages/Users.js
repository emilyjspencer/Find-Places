import React from 'react';
import UsersList from '../components/UsersList';
//import me from './me.png'


const Users = () => {

    const USERS = [
        {
          id: '1',
          name: 'Emily Spencer',
          //image: <img src={me}></img>, 
          image: 'https://vignette.wikia.nocookie.net/muppet/images/b/b1/Giles_deacon_miss_piggy_04a.png/revision/latest?cb=20140210053226',
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


