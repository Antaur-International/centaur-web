import axios from 'axios';
import React from 'react'
import { API_HOST } from '../../API/constant';

export const CreateModal = ({ hideModal }) => {

    const [meetingName, setMeetingName] = React.useState('');


    const addMeeting = () => {
        const meeting = {
            meet_title: meetingName,
            meet_description: 'Sample description',
            meet_date: new Date(),
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
            </div>
            <button type='button' className='wrapper_createMeeting_btn' onClick={addMeeting}>
                Create
            </button>
        </form>
    )
}
