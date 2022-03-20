import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>Json Random Information</h1>
            {
                Users.map(user => console.log(user))
            }
            {
                Users.map(user => <User key={user._id} user={user}></User>)
            }
        </div>
    );
};

export default Users;