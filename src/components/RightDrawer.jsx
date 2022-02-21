import React from 'react';
import "./rightDrawer.css"
import { DashboardIcon, DepartmentIcon, ScheduleIcon, FacultyIcon, ChatIcon, LiveIcon, SettingsIcon } from '../icons/Icons';

export default function RightDrawer(props) {

    function handleClick(content) {
        props.setContentShow(content);
    }

    return <nav className='navigation'>
        <section className='app-title'>
            <img src={'/images/icons/icon.png'} alt="" />
            <p>Centaur</p>
        </section>
        <ul className='navigation-list'>
            <li onClick={handleClick("dashboard")} className='navigation-item selected-item'>
                <DashboardIcon color={props.contentShow === "dashboard" ? '#3abe2f' : '#A4A4A4'} />
                <p>Dashboard</p>
            </li>
            <li
                onClick={handleClick("department")}
                className='navigation-item'>
                <DepartmentIcon color={props.contentShow === "department" ? '#3abe2f' : '#A4A4A4'} />
                <p>Departments</p>
            </li>
            <li className='navigation-item'>
                <ScheduleIcon color='#A4A4A4' />
                <p>Schedules</p>
            </li>
            <li className='navigation-item'>
                <FacultyIcon color='#A4A4A4' />
                <p>Dashboard</p>
            </li>
            <li className='navigation-item'>
                <ChatIcon color='#A4A4A4' />
                <p>Chats</p>
            </li>
            <li className='navigation-item'>
                <LiveIcon color='#A4A4A4' />
                <p>Live Classes </p>
            </li>
        </ul>
        <section className='settings-btn'>
            <button>
                <SettingsIcon />
                <p>Settings</p>
            </button>
        </section>
    </nav>;
}
