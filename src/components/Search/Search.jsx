import React from 'react'
import { useNavigation } from '../../data/Context/NavigationContext'

export const Search = () => {

    const { updateNavigation } = useNavigation();

    return (
        <section className='lyt_wrapper_searchPage'>
            <h1>Search</h1>
        </section>
    )
}
