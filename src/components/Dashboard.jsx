import React from 'react';
import Header from "./Header"
import "./dashboard.css";
import { CalenderIcon, MoreIcon, VideoIcon } from '../icons/Icons';

import TodoLayout from '../layout/lyt-todo';
import Modal from './rightDrawer/RightDrawer';
import Newsstand from './newsstand/newsstand';
import { API_HOST } from '../API/constant';
import axios from 'axios';

const MeetingsListItem = (props) => {
    return <li>
        <div>
            <h3>{props.meeting.title}</h3>
            <VideoIcon />
        </div>
        <p>{props.meeting.titleLong}</p>
        <p className='meeting-time'>10:00 AM - 11:00 AM</p>
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

export default function Dashboard({ user }) {
    const [greeting, setGreeting] = React.useState("Evening");
    const [isOpen, setIsOpen] = React.useState(false);
    const [news, setNews] = React.useState([]);

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
        <Header user={user} />
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
                <MeetingsListItem meeting={{ title: "AJP", titleLong: "Advance Java Programing" }} />
                <MeetingsListItem meeting={{ title: "OSY", titleLong: "Operating System" }} />
                <MeetingsListItem meeting={{ title: "AJP", titleLong: "Advance Java Programing" }} />
            </ul>
        </section>
    </section>;
}
