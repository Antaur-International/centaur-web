import React from 'react';
import "./rightDrawer.css"
import { DashboardIcon, DepartmentIcon, ScheduleIcon, FacultyIcon, ChatIcon, LiveIcon, SettingsIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

export default function RightDrawer(props) {

    return <nav className='navigation'>
        <section className='app-title'>
            <img src={'/images/icons/icon.png'} alt="" />
            <p>Centaur</p>
        </section>
        <ul className='navigation-list'>
            <li className='navigation-item selected-item'>
                <DashboardIcon color='#3abe2f' />
                <Link to={'/dashboard/home'} >Dashboard</Link>
            </li>
            <li
                className='navigation-item'>
                <DepartmentIcon color='#A4A4A4' />
                <Link to='/dashboard/department'>Departments</Link>
            </li>
            <li className='navigation-item'>
                <ScheduleIcon color='#A4A4A4' />
                <Link to={'/dashboard/schedule'} >Schedules</Link>
            </li>
            <li className='navigation-item'>
                <FacultyIcon color='#A4A4A4' />
                <Link to={'/dashboard/faculty'}>Faculty</Link>
            </li>
            <li className='navigation-item'>
                <ChatIcon color='#A4A4A4' />
                <Link to={'/dashboard/chats'}>Chats</Link>
            </li>
            <li className='navigation-item'>
                <LiveIcon color='#A4A4A4' />
                <Link to={'dashboard/liveClasses'}>Live Classes </Link>
            </li>
        </ul>
        <section className='settings-btn'>
            <button>
                <SettingsIcon />
                <Link to={'dashboard/settings'}>Settings</Link>
            </button>
        </section>

    </nav>;
}
