import React, { useState } from 'react';
const USER_API = 'https://randomuser.me/api/';

export const getUser = async () => {
  console.log('Fetching user form API');
  try {
    const resp = await fetch(USER_API);
    const {
      results: [user],
    } = await resp.json();
    return user;
  } catch (err) {
    console.log('Error on fetch user');
  }
};

const initialState = [];

const Users = () => {
  const [users, setUsers] = useState(initialState);
  return (
    <div>
      <button
        onClick={async () => {
          const newUser = await getUser();

          console.log(newUser);
          // setUsers([...users, newUser]);
          setUsers((oldUsersList) => {
            oldUsersList.push(newUser);
            return [...oldUsersList];
          });
        }}
      >
        Fetch User from API
      </button>
      {users.map((user) => (
        <div>
          {user.name.first} - {user.name.last}
        </div>
      ))}
    </div>
  );
};

export default Users;
