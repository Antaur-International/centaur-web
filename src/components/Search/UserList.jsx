import React, { useEffect, useState } from 'react'
import { useNavigation } from '../../data/Context/NavigationContext';
import { useAuth } from '../../data/Context/UserContext';

export const UserList = ({ key }) => {

    const [users, setUsers] = useState([]);
    const { extra, reload, setReload } = useNavigation();
    const { userInstance, isAuthenticated } = useAuth();

    useEffect(() => {
        search()
    }, [])

    function search() {
        const searchKeyword = extra.searchKeyword.split(" ").slice(1).join(" ");

        userInstance.batch.students.map((user, index) => {

            console.log(user.name);
            console.log(searchKeyword);

            if (user.name === searchKeyword) {
                setUsers((prev) => [...prev, user]);
            }
        })

        console.log("Searched users: ", users);
    }

    return (
        <ul className='cp_wrapper_usersList'>
            {
                users.map((user, index) => {
                    return <li key={index} className='cp_usersList_item'>
                        <div className='cp_usersList_item_avatar'>
                            <img src={user.image} alt="avatar" />
                        </div>

                        <p className='cp_usersList_item_name'>
                            {user.name}
                        </p>
                    </li>
                })
            }
        </ul>
    )
}
