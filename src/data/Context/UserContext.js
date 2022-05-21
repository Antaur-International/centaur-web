import React, { useState, createContext, useEffect, useContext } from 'react';
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

export const useAuth = () => {
    return useContext(UserContext);
}
export default function UserProvider({ children }) {

    const [userInstance, setUserInstance] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const Navigate = useNavigate();

    useEffect(() => {
        updateState();
    }, [])

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
                    setIsAuthenticated(true);
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

    const logout = () => {
        sessionStorage.clear();
        setIsAuthenticated(false);
        Navigate('/login');
    }

    return (
        <UserContext.Provider value={{ userInstance, setUserInstance, isAuthenticated, setIsAuthenticated, updateState, logout }}>
            {children}
        </UserContext.Provider>
    )
}
