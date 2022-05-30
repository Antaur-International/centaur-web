import React, { useEffect, useState } from 'react'
import { useNavigation } from '../../data/Context/NavigationContext';
import { useAuth } from '../../data/Context/UserContext';
import { BoxLoading } from 'react-loadingg';
import { EmptySearch } from '../EmptyState/EmptySearch';
export const UserList = ({ key }) => {

    const [users, setUsers] = useState([]);
    const { extra } = useNavigation();
    const { userInstance } = useAuth();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        search()
    }, [])

    function search() {
        const searchKeyword = extra.searchKeyword.split(" ").slice(1).join(" ");

        userInstance.batch.students.map((user, index) => {

            // console.log(user.name);
            // console.log(searchKeyword);

            if (user.name.includes(searchKeyword)) {
                setUsers((prev) => [...prev, user]);
            }
        })

        setLoading(false);

        // console.log("Searched users: ", users);
    }

    if (loading) {
        return <BoxLoading color="#65FF52" />
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