
import React from 'react';
import "./header.css";
import { SearchIcon, BellIcon } from '../icons/Icons';
import Modal from './rightDrawer/RightDrawer';
import Notification from './notification/notification';
import Popup from '../layout/lyt-popup';

export default function Header(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

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

        {isPopupOpen && <Popup called="header" setIsOpen={setIsPopupOpen} text="Are you sure you want to log out?" textColor={"red"} />}

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
        <section className='userProfile' onClick={() => setIsPopupOpen(true)}>
            <img src={props.user.image} alt="User Profile" />
            <div>
                <h3>{props.user.name}</h3>
                <p>EN {props.user.en_number}</p>
            </div>
        </section>
    </header>;
}
