
import React, { useEffect, useRef } from "react";
import "./header.css";
import { SearchIcon, BellIcon } from "../icons/Icons";
import Modal from "./rightDrawer/RightDrawer";
import Notification from "./notification/notification";
import Popup from "../layout/lyt-popup";
import { useNavigation } from "../data/Context/NavigationContext";
import { useAuth } from "../data/Context/UserContext";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Header() {
  const inputRef = useRef();

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        inputRef.current.focus();
        return null;
      }
    };
  }, []);

  const { updateNavigation, activeTab, updateAreaToSearch } = useNavigation();
  const { userInstance, isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const [search, setSearch] = React.useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  // if (!isAuthenticated) {
  //     return null;
  // }

  return (
    <header className="header">
      {/* Notification Modal */}
      <Modal show={isOpen} handleClose={handleClose}>
        <Notification />
      </Modal>

      {isPopupOpen && (
        <Popup
          called="header"
          setIsOpen={setIsPopupOpen}
          text="Are you sure you want to log out?"
          textColor={"red"}
        />
      )}

      <form
        className="header__search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          ref={inputRef}
          value={search}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (activeTab !== "search") {
                updateNavigation("search");
              }
              updateAreaToSearch(search);
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="/u for users, /r for resource, /e for events..."
        />
        <button
          type="button"
          onClick={() => {
            if (activeTab !== "search") {
              updateNavigation("search");
            }
            updateAreaToSearch(search);
          }}
        >
          <SearchIcon />
        </button>
      </form>
      <button className="notifications" onClick={handleOpen}>
        <BellIcon />
      </button>
      <section className="userProfile" onClick={() => setIsPopupOpen(true)}>
        {isAuthenticated ? (
          <img src={userInstance.image} alt="User Profile" />
        ) : (
          <Skeleton circle />
        )}
        <div>
          <h3>{userInstance.name}</h3>
          <p>EN {userInstance.en_number}</p>
        </div>
      </section>
    </header>
  );
}
