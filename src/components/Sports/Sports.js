import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';

const Sports = () => {
    const [user, setUser] = useContext(userContext);
    console.log(user.name)
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Sports;