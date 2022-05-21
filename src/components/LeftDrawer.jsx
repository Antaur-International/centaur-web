import React from 'react';
import "./leftDrawer.css"
import { DashboardIcon, DepartmentIcon, ScheduleIcon, FacultyIcon, ChatIcon, LiveIcon, SettingsIcon, MyWork } from '../icons/Icons';
import { useNavigation } from '../data/Context/NavigationContext';


export default function RightDrawer(props) {

    const { activeTab, updateNavigation } = useNavigation();

    return <nav className={activeTab === "dashboard" ? "navigation" : "smallNav"}  >
        <section className='app-title' >
            <img src={'/centaur-web/images/icons/icon.png'} alt="" />
            <p>Centaur</p>
        </section>
        <ul className={`navigation-list`}>


            <li
                className={`navigation-item ${activeTab === 'dashboard' ? 'selected-item' : ''}`}
                onClick={() => { updateNavigation("dashboard") }}
            >
                <DashboardIcon color={activeTab === "dashboard" ? "#37BC2B" : "#A4A4A4"} />
                <p>Home</p>
            </li>
            <li
                className={`navigation-item ${activeTab === 'department' || activeTab === "department-subject" ? 'selected-item' : ''}`}
                onClick={() => { updateNavigation("department") }}
            >
                <DepartmentIcon color={activeTab === "department" || activeTab === "department-subject" ? "#37BC2B" : "#A4A4A4"} />
                <p>Departments</p>
            </li>
            <li className={`navigation-item ${activeTab === 'calender' ? 'selected-item' : ''}`}
                onClick={() => { updateNavigation("calender") }}

            >
                <ScheduleIcon color={
                    activeTab === "calender" ? "#37BC2B" : "#A4A4A4"
                } />
                <p>Schedules</p>
            </li>
            <li className={`navigation-item ${activeTab === 'faculty' ? 'selected-item' : ''}`}
                onClick={() => { updateNavigation("faculty") }}

            >
                <FacultyIcon color={
                    activeTab === "faculty" ? "#37BC2B" : "#A4A4A4"
                } />
                <p>Faculty</p>
            </li>
            <li className={`navigation-item ${activeTab === 'myWork' ? 'selected-item' : ''}`}
                onClick={() => { updateNavigation("myWork") }}

            >
                <MyWork color={
                    activeTab === "myWork" ? "#37BC2B" : "#A4A4A4"
                } />
                <p>My Work </p>
            </li>
            <li className={`navigation-item ${activeTab === 'live-classes' ? 'selected-item' : ''}`}
                onClick={() => { updateNavigation("live-classes") }}
            >
                <LiveIcon color={
                    activeTab === "live-classes" ? "#37BC2B" : "#A4A4A4"
                } />
                <p>Live Classes </p>
            </li>
        </ul>
        <section className='settings-btn'>
            <button onClick={() => updateNavigation("settings")}>
                <SettingsIcon color={"white"} />
                <p>Settings</p>
            </button>
        </section>

    </nav>;
}
