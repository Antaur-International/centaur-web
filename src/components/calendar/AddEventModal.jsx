import React, { useRef } from 'react'
import { AddIcon, Clock } from '../../icons/Icons'

import axios from 'axios';
import { API_HOST } from '../../API/constant';

export default function AddEventModal({ selectedDate, setIsOpen }) {
    const eventTitle = useRef(null);
    const eventDescription = useRef(null);
    const eventDateStart = useRef(null);
    const eventDateEnd = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: eventTitle.current.value,
            event_description: eventDescription.current.value,
            date: selectedDate,
            event_created_by: JSON.parse(sessionStorage.getItem('user')).userid,
        }

        console.log(event);
        axios.post(`${API_HOST}/events`, event)
            .then(res => {
                console.log(res);
                setIsOpen(false);
                // refresh the page
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='modal_wrapper_center'>
            <div className='wrapper_center_modal'>
                <div className='center_modal_header'>
                    <h2>Create New Event</h2>
                </div>
                <button
                    className='center_modal_closeBtn btn'
                    onClick={() => setIsOpen(false)}
                >
                    <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
                </button>
                <div className='center_modal_content'>
                    <form className='modal_content_form'>
                        <input type="text" ref={eventTitle} placeholder='Event Title' />
                        <textarea
                            ref={eventDescription}
                            className='content_form_noteInput' placeholder='Event Description...' />

                        <div className='content_form_actionBtn'>
                            <button type='button' className='form_actionBtn_addTask btn' onClick={(e) => { handleSubmit(e); }}>
                                <p>Add Event</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}