import React, { useEffect, useState } from 'react'
import { useNavigation } from '../../data/Context/NavigationContext'
import Header from '../Header';
import { UserList } from './UserList';

export const Search = () => {

    const { extra, setExtra } = useNavigation();
    const [search, setSearch] = useState('');
    const [areaToSearch, setAreaToSearch] = useState('');

    useEffect(() => {
        const key = extra.searchKeyword;

        if (key) {
            const searchCategory = key.split(" ")[0];
            const searchKeyword = key.split(" ").slice(1).join(" ");
            setSearch(searchKeyword);

            switch (searchCategory) {
                case '/u':
                    setAreaToSearch('users');
                    break;

                default:
                    console.log('search default');
                    break;
            }

        }

    }, [])

    return (
        <section className='lyt_wrapper_searchPage'>
            <Header />
            <p className='wrapper_searchPage_label'>
                Showing results for {search}
            </p>
            {
                areaToSearch === 'users' && <UserList key={extra} />
            }
        </section>
    )
}
