import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import { API_HOST } from '../../API/constant';
/*
A context is a way to share data between components without having to pass props
*/
export const UserContext = createContext({ status: null, update: () => { } });

/*
A component which contains userInstance state and a context provider
*/
export default function UserProvider({ children }) {

    const [userInstance, setUserInstance] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const updateState = () => {
        if (sessionStorage.getItem('user')) {
            const userFetch = {
                userid: JSON.parse(sessionStorage.getItem('user')).userid,
                userEmail: JSON.parse(sessionStorage.getItem('user')).userEmail
            };

            console.log(userFetch);
            console.log(API_HOST);


            axios.post(`${API_HOST}/user/getUser`, userFetch)
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
        <UserContext.Provider value={{ status: userInstance, update: updateState, isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
    )
}
