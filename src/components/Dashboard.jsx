import React, { useContext } from 'react';
import Header from "./Header"
import "./dashboard.css";
import { CalenderIcon, MoreIcon, VideoIcon } from '../icons/Icons';

import TodoLayout from '../layout/lyt-todo';
import Modal from './rightDrawer/RightDrawer';
import Newsstand from './newsstand/newsstand';
import { UserContext } from '../data/Context/UserContext';

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

export default function Dashboard() {
    const [greeting, setGreeting] = React.useState("Evening");
    const [isOpen, setIsOpen] = React.useState(false);

    const user = useContext(UserContext)

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
        console.log(greeting + " " + hours);

        setGreeting(greetingTemp)
    }, []);


    return <section className='dashboard'>
        <Modal show={isOpen} handleClose={handleClose} >
            <Newsstand />
        </Modal>
        <Header />
        <section className='welcome'>
            <img src="https://i.ibb.co/XpFJZS0/fox-image.png" alt="" />
            <div>
                <h2>Good {greeting}, <br />  <b style={{ fontSize: "2vw" }}>{user.status.name}</b></h2>
                <button>Go to Schedules </button>
            </div>
        </section>
        <section className='calender'>
            <div className='dashboardCardLabel'>
                <p>Todo</p>
                <MoreIcon />
            </div>
            <TodoLayout />
        </section>
        <section className='news' onClick={handleOpen}>
            <div className='dashboardCardLabel'>
                <p>Newsstand</p>
                <MoreIcon />
            </div>
        </section>
        <section className='meetings'>
            <div className='dashboardCardLabel'>
                <p>Upcoming Meetings</p>
                <CalenderIcon />
            </div>
            <ul>
                <MeetingsListItem meeting={{ title: "AJP", titleLong: "Advance Java Programing" }} />
                <MeetingsListItem meeting={{ title: "OSY", titleLong: "Operating System" }} />
                <MeetingsListItem meeting={{ title: "AJP", titleLong: "Advance Java Programing" }} />
            </ul>
        </section>
    </section>;
}
