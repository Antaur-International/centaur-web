import axios from 'axios';
import React, { useRef } from 'react'
import { API_HOST } from '../../API/constant';

export const CreateModal = ({ hideModal }) => {

    const [meetingName, setMeetingName] = React.useState('');
    const [meetingDescription, setMeetingDescription] = React.useState('');
    const meetingDate = useRef(null);


    const addMeeting = () => {
        const meeting = {
            meet_title: meetingName,
            meet_description: meetingDescription,
            meet_date: meetingDate.current.value,
        }


        axios.post(`${API_HOST}/meet`, meeting)
            .then(res => {
                console.log(res);
                hideModal();
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <form className='cp_wrapper_createMeeting'>
            <div className='wrapper_createMeeting_inputGrp'>
                <label htmlFor='title'>Meeting name</label>
                <input value={meetingName} onChange={(e) => setMeetingName(e.target.value)} type='text' id='title' />
                <input value={meetingDescription} onChange={(e) => setMeetingDescription(e.target.value)} type='text' id='description' />
                {/* date */}
                <div className='wrapper_createMeeting_inputGrp_date'>
                    <label htmlFor='date'>Date</label> <br />
                    <input ref={meetingDate} type='date' id='date' />
                </div>
            </div>
            <button type='button' className='wrapper_createMeeting_btn' onClick={addMeeting}>
                Create
            </button>
        </form>
    )
}
