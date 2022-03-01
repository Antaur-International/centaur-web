import React from 'react';
import "./rightDrawer.css"
import { DashboardIcon, DepartmentIcon, ScheduleIcon, FacultyIcon, ChatIcon, LiveIcon, SettingsIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const NavListItem = (props) => {
    return (
        <li
            className={`navigation-item ${props.activeTab === props.tab ? 'selected-item' : ''}`}
            onClick={() => { props.setActiveTab("dashboard") }}
        >
            <DashboardIcon />
            <p>{props.title}</p>
        </li>
    )
}

export default function RightDrawer(props) {

    return <nav className='navigation'>
        <section className='app-title'>
            <img src={'/images/icons/icon.png'} alt="" />
            <p>Centaur</p>
        </section>
        <ul className='navigation-list'>


            <li
                className={`navigation-item ${props.activeTab === 'dashboard' ? 'selected-item' : ''}`}
                onClick={() => { props.setActiveTab("dashboard") }}
            >
                <DashboardIcon color={props.activeTab === "dashboard" ? "#37BC2B" : "#A4A4A4"} />
                <p>Dashboard</p>
            </li>
            <li
                className={`navigation-item ${props.activeTab === 'department' ? 'selected-item' : ''}`}
                onClick={() => { props.setActiveTab("department") }}
            >
                <DepartmentIcon color={props.activeTab === "department" ? "#37BC2B" : "#A4A4A4"} />
                <p>Departments</p>
            </li>
            <li className='navigation-item'>
                <ScheduleIcon color='#A4A4A4' />
                <p>Schedules</p>
            </li>
            <li className='navigation-item'>
                <FacultyIcon color='#A4A4A4' />
                <p>Faculty</p>
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
