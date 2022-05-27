import axios from 'axios';
import React, { useEffect } from 'react'
import { API_HOST } from '../API/constant';
import Header from '../components/Header'
import { CreateModal } from '../components/liveClasses/CraeteModal'
import Modal from '../components/rightDrawer/RightDrawer'
import Popup from './lyt-popup';
import ModalLayout from "./_lyt_modal";

const HOSTED_MEET_URL = "https://grp-call-peer-js.herokuapp.com";
const LOCALHOST_MEET_URL = "http://localhost:4000";

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
                                        <a
                                            href={`${HOSTED_MEET_URL}/${meeting._id}?userId=${user._id}`}
                                            target="_blank"
                                            rel='noreferrer'
                                            className='list_item_joinBtn'>Join</a>
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
                                        <a
                                            href={`${LOCALHOST_MEET_URL}/${meeting._id}?userId=${user._id}`}
                                            target="_blank"
                                            rel='noreferrer'
                                            className='list_item_joinBtn'>Join</a>
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
                                        <a
                                            href={`${LOCALHOST_MEET_URL}/${meeting._id}?userId=${user._id}`}
                                            target="_blank"
                                            style={{ backgroundColor: '#ccc', cursor: 'not-allowed' }}
                                            disabled="true"
                                            rel='noreferrer'
                                            className='list_item_joinBtn'>Join</a>
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
