import React, { useRef } from 'react'
import { AddIcon, Clock } from '../../icons/Icons'

import axios from 'axios';
import { API_HOST } from '../../API/constant';

export default function EditEventModal({ data, user, setIsOpen }) {
    const [eventTitle, setEventTitle] = React.useState(data.title);
    const [eventDescription, setEventDescription] = React.useState(data.extendedProps.event_description);

    const handleDelete = () => {
        axios.delete(`${API_HOST}/events/${data.extendedProps._id}`)
            .then(res => {
                // console.log(res);    
                setIsOpen(false);
                // refres
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleUpdate = () => {
        const updateData = {
            title: eventTitle,
            description: eventDescription
        }

        axios.put(`${API_HOST}/events/${data.extendedProps._id}`, updateData)
            .then(res => {
                // console.log(res);
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
                    <h2>{user.type === 'staff' ? "Edit Event" : "Event"}</h2>
                </div>
                <button
                    className='center_modal_closeBtn btn'
                    onClick={() => setIsOpen(false)}
                >
                    <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
                </button>
                <div className='center_modal_content'>
                    <form className='modal_content_form'>
                        <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} placeholder='Event Title' />
                        <textarea
                            onChange={(e) => setEventDescription(e.target.value)}
                            value={eventDescription}
                            cols="30"
                            rows="10"
                            className='content_form_noteInput' placeholder='Event Description...' />

                        {user.type === 'staff' && <div className='content_form_actionBtn'>
                            <button type='button' onClick={handleUpdate} className='form_actionBtn_addTask btn'>
                                <p>Update Event</p>
                            </button>

                            <button type='button' onClick={handleDelete} className='form_actionBtn_addTask btn' style={{ backgroundColor: 'red' }}>
                                <p>Delete Event</p>
                            </button>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
    )

}