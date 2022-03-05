import React from 'react';
import "./leftDrawer.css"
import { DashboardIcon, DepartmentIcon, ScheduleIcon, FacultyIcon, ChatIcon, LiveIcon, SettingsIcon, MyWork } from '../icons/Icons';


export default function RightDrawer(props) {

    return <nav className='navigation'>
        <section className='app-title'>
            <img src={'/centaur-web/images/icons/icon.png'} alt="" />
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
            <li className={`navigation-item ${props.activeTab === 'myWork' ? 'selected-item' : ''}`}
                onClick={() => { props.setActiveTab("myWork") }}

            >
                <MyWork color={
                    props.activeTab === "myWork" ? "#37BC2B" : "#A4A4A4"
                } />
                <p>My Work </p>
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
