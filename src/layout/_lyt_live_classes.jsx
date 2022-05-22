import axios from 'axios';
import React, { useEffect } from 'react'
import { API_HOST } from '../API/constant';
import Header from '../components/Header'
import { CreateModal } from '../components/liveClasses/CraeteModal'
import Modal from '../components/rightDrawer/RightDrawer'
import Popup from './lyt-popup';
import ModalLayout from "./_lyt_modal";

export default function LiveClassesLyt({ user }) {


    const [show, setShow] = React.useState(false);

    const [onGoingMeetings, setonGoingMeetings] = React.useState([]);
    const [scheduledMeetings, setScheduledMeetings] = React.useState([]);
    const [pastMeetings, setPastMeetings] = React.useState([]);

    useEffect(() => {
        axios.get(`${API_HOST}/meet`)
            .then(res => {
                let meets = res.data.meets;
                let dateToday = new Date().getDate();

                meets.forEach(meet => {
                    let meetDate = new Date(meet.meet_date).getDate();

                    if (meetDate === dateToday) {
                        setonGoingMeetings(onGoingMeetings => [...onGoingMeetings, meet]);
                    }
                    else if (meetDate < dateToday) {
                        setPastMeetings(pastMeetings => [...pastMeetings, meet]);
                    }
                    else if (meetDate > dateToday) {
                        setScheduledMeetings(scheduledMeetings => [...scheduledMeetings, meet]);
                    }

                })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const JoinMeeting = (meet_id) => {
        // window.open(`https://grp-call-peer-js.herokuapp.com/${meet_id}?userId=${user._id}`, "_blank");
        window.open(`http://localhost:4000/${meet_id}?userId=${user._id}`, "_blank");
    }

    return (
        <main className='lyt_wrapper_liveClasses'>
            <Header user={user} />
            <section className='wrapper_liveClasses_main'>
                <h2>Live Classes</h2>

                {
                    user.type === "staff" && <button onClick={() => setShow(true)} className='liveClasses_main_createBtn'>
                        Create a meeting
                    </button>
                }

                {show && <ModalLayout show={show} >
                    <CreateModal hideModal={() => setShow(false)} />
                </ModalLayout>}

                <section className='liveClasses_main_onGoing'>

                    <h3>On Going</h3>
                    <ul className='main_onGoing_list'>

                        {
                            onGoingMeetings.map((meeting, index) => {
                                return (
                                    <li className='onGoing_list_item' key={index}>
                                        <p className='list_item_title'>{meeting.meet_title}</p>
                                        <p className='list_item_description'>{meeting.meet_description}</p>
                                        <button
                                            onClick={() => JoinMeeting(meeting._id)}
                                            className='list_item_joinBtn'>Join</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </section>
                <section className='liveClasses_main_onGoing'>
                    <h3>Scheduled</h3>
                    <ul className='main_onGoing_list'>

                        {
                            scheduledMeetings.map((meeting, index) => {
                                return (
                                    <li className='onGoing_list_item' key={index}>
                                        <p className='list_item_title'>{meeting.meet_title}</p>
                                        <p className='list_item_description'>{meeting.meet_description}</p>
                                        <button
                                            onClick={() => JoinMeeting(meeting._id)}
                                            className='list_item_joinBtn'>Join</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </section>
                <section className='liveClasses_main_onGoing' style={{ marginBottom: "40px" }}>
                    <h3>Past Meetings</h3>
                    <ul className='main_onGoing_list'>
                        {
                            pastMeetings.map((meeting, index) => {
                                return (
                                    <li className='onGoing_list_item disabled' key={index}>
                                        <p className='list_item_title'>{meeting.meet_title}</p>
                                        <p className='list_item_description'>{meeting.meet_description}</p>
                                        <button
                                            style={{ backgroundColor: '#ccc', cursor: 'not-allowed' }}
                                            disabled="true"
                                            onClick={() => JoinMeeting(meeting._id)}
                                            className='list_item_joinBtn'>Join</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </section>
            </section>
        </main>
    )
}
