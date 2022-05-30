import React, { useRef } from 'react'
import { AddIcon, Clock } from '../../icons/Icons'
import { BlockPicker } from "react-color";
// import { TextField } from '@mui/material';
// import {TextField} from '@mui/material/TextField';
import axios from 'axios';
import { API_HOST } from '../../API/constant';

export default function AddEventModal({ selectedDate, setIsOpen }) {
    const eventTitle = useRef(null);
    const eventDescription = useRef(null);
    const [eventDateTime, setEventDateTime] = React.useState();
    const [eventDateEndTime, setEventDateEndTime] = React.useState();

    const [color, setColor] = React.useState('#F47373');

    const handleTimeChange = (e) => {
        setEventDateTime(e.target.value);
    }

    const handleDateEndTimeChange = (e) => {
        setEventDateEndTime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(eventDateTime)
        // console.log(eventDateEndTime.split('T'))

        const event = {
            title: eventTitle.current.value,
            event_description: eventDescription.current.value,
            start: new Date(selectedDate).toISOString(),
            end: eventDateEndTime,
            event_created_by: JSON.parse(sessionStorage.getItem('user')).userid,
            color: color,
        }

        axios.post(`${API_HOST}/events`, event)
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

    const handleColorChange = (color) => {
        setColor(color.hex);
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
                        <input
                            ref={eventDescription}
                            className='content_form_noteInput' placeholder='Event Description...' />
                        <label className='dateLabel'>Set Start Date and Time</label>
                        {/* <TextField
                            id="datetime-local"
                            name="dateAndTime"
                            type="time"
                            onChange={handleTimeChange}
                            className="textFieldStartDate"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> */}
                        <label className='dateLabel'>Set End Date and Time</label>
                        {/* <TextField
                            id="datetime-local"
                            name="dateAndTime"
                            onChange={handleDateEndTimeChange}
                            type="datetime-local"
                            className="textFieldEndDate"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> */}
                        <br />
                        <BlockPicker color={color} onChangeComplete={handleColorChange} />
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