import React, { useEffect, useState } from 'react'
import { useNavigation } from '../../data/Context/NavigationContext'
import ResourceList from '../departments/Resource/ResourceList';
import Header from '../Header';
import { Resource } from './SearchedResource';
import { UserList } from './UserList';

export const Search = () => {

    const { extra, setExtra, areaToSearch, updateAreaToSearch } = useNavigation();

    return (
        <section className='lyt_wrapper_searchPage'>
            <Header />
            <p className='wrapper_searchPage_label'>
                Showing results for {extra.searchKeyword}
            </p>
            {areaToSearch === 'users' && <UserList />}
            {areaToSearch === 'rooms' && <Resource />}
        </section>
    )
}
