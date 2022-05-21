
import React, { useContext } from 'react';
import "./header.css";
import { SearchIcon, BellIcon } from '../icons/Icons';
import Modal from './rightDrawer/RightDrawer';
import Notification from './notification/notification';
import Popup from '../layout/lyt-popup';
import { useNavigation } from '../data/Context/NavigationContext';
import { useAuth } from '../data/Context/UserContext';

export default function Header({ user }) {

    const { updateNavigation, setExtra } = useNavigation();
    const { userInstance, isAuthenticated } = useAuth();

    const [isOpen, setIsOpen] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);


    const [search, setSearch] = React.useState("");

    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    if (!isAuthenticated) {
        return null;
    }

    return <header className='header'>

        {/* Notification Modal */}
        <Modal show={isOpen} handleClose={handleClose}>
            <Notification />
        </Modal>

        {isPopupOpen && <Popup called="header" setIsOpen={setIsPopupOpen} text="Are you sure you want to log out?" textColor={"red"} />}

        <form className="header__search">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..." />
            <button onClick={() => {
                updateNavigation("search");
                setExtra({
                    searchKeyword: search
                })
            }}>
                <SearchIcon />
            </button>
        </form>
        <button
            className='notifications'
            onClick={handleOpen}
        >
            <BellIcon />
        </button>
        <section className='userProfile' onClick={() => setIsPopupOpen(true)}>
            <img src={userInstance.image} alt="User Profile" />
            <div>
                <h3>{userInstance.name}</h3>
                <p>EN {userInstance.en_number}</p>
            </div>
        </section>
    </header>;
}
