import React from 'react';
import Header from "./Header"
import "./dashboard.css";
import { CalenderIcon, MoreIcon, VideoIcon } from '../icons/Icons';

import TodoLayout from '../layout/lyt-todo';
import Modal from './rightDrawer/RightDrawer';
import Newsstand from './newsstand/newsstand';
import { API_HOST } from '../API/constant';
import axios from 'axios';
import { useAuth } from '../data/Context/UserContext';


const MeetingsListItem = ({ user, meeting }) => {

    let date = new Date(meeting.meet_date);

    const JoinMeeting = (meet_id) => {
        window.open(`https://grp-call-peer-js.herokuapp.com/${meet_id}?userId=${user._id}`, "_blank");
        // window.open(`http://localhost:4000/${meet_id}?userId=${user._id}`, "_blank");
    }

    return <li>
        <div>
            <h3 className='meeting_title'>{meeting.meet_title}</h3>
            <button onClick={() => JoinMeeting(meeting._id)} className='meeting_joinBtn'><VideoIcon /></button>
        </div>
        <p className='meeting_desc'>{meeting.meet_description}</p>
        <p className='meeting-time'>{date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</p>
    </li>
}

const NewsCardItem = (props) => {
    return <li className='wrapper_newsCard_item'>
        <div className='newsCard_item_head'>
            <p className='item_head_category'>{props.category}</p>
        </div>

        <p className='newsCard_item_content'>
            {props.content}
        </p>
    </li>
}

export default function Dashboard({ user, meetings }) {
    const [greeting, setGreeting] = React.useState("Evening");
    const [isOpen, setIsOpen] = React.useState(false);
    const [news, setNews] = React.useState([]);

    const { userInstance, isAuthenticated } = useAuth();

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    React.useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        const greetingTemp = hours < 12 ? "Morning" : hours < 18 ? "Afternoon" : "Evening";
        setGreeting(greetingTemp)

        console.log(meetings);

        axios
            .get(`${API_HOST}/msbte/news`)
            .then(res => {
                console.log(res.data.newsData);
                setNews(res.data.newsData);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);


    return <section className='dashboard'>
        <Modal show={isOpen} handleClose={handleClose} >
            <Newsstand />
        </Modal>
        <Header />
        <section className='welcome'>
            <img src="https://i.ibb.co/XpFJZS0/fox-image.png" alt="" />
            <div>
                <h2>Good {greeting}, <br />  <b style={{ fontSize: "2vw" }}>{user.name}</b></h2>
                <button>Go to Schedules </button>
            </div>
        </section>
        <section className='calender'>
            <div className='dashboardCardLabel'>
                <div className='topLayer'>
                    <p>Todo</p>
                    <MoreIcon />
                </div>
            </div>
            <TodoLayout user={user} />
        </section>
        <section className='news' onClick={handleOpen}>
            <div className='dashboardCardLabel newsStand'>
                <div className='topLayer'>
                    <p>Newsstand</p>
                    <MoreIcon />
                </div>

                <section className='cp_newsstand_wrapper'>
                    <ul className='wrapper_newsCard_list'>
                        {
                            news.map(news => {
                                return <NewsCardItem
                                    category="MSBTE"
                                    content={news.innerText}
                                />
                            })
                        }
                    </ul>
                </section>
            </div>
        </section>
        <section className='meetings'>
            <div className='dashboardCardLabel'>
                <div className='topLayer'>
                    <p>Upcoming Meetings</p>
                    <CalenderIcon />
                </div>
            </div>
            <ul>
                {
                    meetings.map(meeting => {
                        return <MeetingsListItem user={user} meeting={meeting} />
                    })
                }
            </ul>
        </section>
    </section>;
}
