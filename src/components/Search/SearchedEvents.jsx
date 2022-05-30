import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { API_HOST } from '../../API/constant';
import { useNavigation } from '../../data/Context/NavigationContext';
import { BoxLoading } from 'react-loadingg';
import { EmptySearch } from '../EmptyState/EmptySearch';

export const SearchedEvents = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const { extra } = useNavigation();

    useEffect(() => {

        const searchKeyword = extra.searchKeyword.split(" ").slice(1).join(" ");


        axios.get(`${API_HOST}/events`)
            .then(res => {

                const filteredEvents = res.data.filter(event => {
                    return event.title.toLowerCase().includes(searchKeyword.toLowerCase());
                })

                setEvents(filteredEvents);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if (loading) {
        return <BoxLoading color="#65FF52" />
    }

    return (
        <ul className='wrapper_publicResource_list'>
            {
                events.length > 0 ? events.map((item, index) => {
                    return (
                        <li className='publicResource_list_item' key={index}>
                            <p className='list_item_title'>{item.title}</p>
                            <p className='list_item_description'>{item.date.toString()}</p>
                        </li>
                    )
                }
                ) : <EmptySearch />
            }
        </ul>
    )
}
