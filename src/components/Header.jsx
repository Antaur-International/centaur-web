import React from 'react';
import "./header.css";
import { SearchIcon, BellIcon } from '../icons/Icons';
import Modal from './modals/modal';
import Notification from './notification/notification';


export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    return <header className='header'>

        {/* Notification Modal */}
        <Modal show={isOpen} handleClose={handleClose} title="Add a new course">
            <Notification />
        </Modal>

        <form className="header__search">
            <input type="text" placeholder="Search here..." />
            <SearchIcon />
        </form>
        <button
            className='notifications'
            onClick={handleOpen}
        >
            <BellIcon />
        </button>
        <section className='userProfile'>
            <img src="https://avatars.githubusercontent.com/u/64542454?v=4" alt="User Profile" />
            <div>
                <h3>Bedant Hota</h3>
                <p>EN 1911480116</p>
            </div>
        </section>
    </header>;
}
