import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

/*
A context is a way to share data between components without having to pass props
*/
export const UserContext = createContext({ status: null, update: () => { } });

/*
A component which contains userInstance state and a context provider
*/
export default function UserProvider({ children }) {

    let navigate = useNavigate();

    const [userInstance, setUserInstance] = useState({});

    const updateState = () => {
        if (sessionStorage.getItem('user')) {
            const userFetch = {
                userid: JSON.parse(sessionStorage.getItem('user')).userid,
                userEmail: JSON.parse(sessionStorage.getItem('user')).userEmail
            };

            console.log(userFetch);


            axios.post(`${process.env.REACT_APP_DEV_URL}/user/getUser`, userFetch)
                .then(res => {
                    setUserInstance(res.data.user);
                    console.log('Running', res.data);
                })
                .then(() => {
                    console.log({ userInstance });
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            window.location.href = './#/login';
        }
    }

    return (
        <UserContext.Provider value={{ status: userInstance, update: updateState }}>
            {children}
        </UserContext.Provider>
    )
}
