import React from 'react';
import { addLoadStorage } from '../LocalData/LocalData';
import './User.css';

const User = ({ user }) => {
    const { name, address, balance, company, email, phone, _id } = user;

    const AddToStorage = () => {
        addLoadStorage(_id)
    }
    return (
        <div className='user'>
            <h1>Name: {name}</h1>
            <h3>Company: {company}</h3>
            <h3>Address: {address}</h3>
            <h4>Balance: {balance}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Email: {email}</h4>
            <button onClick={() => AddToStorage(_id)}>Storage Add Id</button>
        </div>
    );
};

export default User;