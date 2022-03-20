import React from 'react';

const User = ({ user }) => {
    const { name, address, age, balance, company, email, phone, registered } = user;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Company: {company}</p>
            <p>Balance: {balance}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Registered: {registered}</p>
            <p>Address: {address}</p>
        </div>
    );
};

export default User;