import React, { useRef, useState, useEffect } from 'react'
import { EmojiICon, InfoIcon, SendIcon } from '../../../icons/Icons'
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { io } from 'socket.io-client';
import queryString from "query-string";
import { API_HOST } from '../../../API/constant';
import axios from 'axios';

// define a socket
let socket;

const UserChat = (user) => {

    const [userType, setUserType] = useState();

    const [date, setDate] = useState(user.user.time);

    useEffect(() => {
        // console.log(user.user.sender._id + ' === ' + user.currentUser._id);
        if (user.user.sender._id === user.currentUser._id) {
            setUserType("self");
        } else {
            setUserType("endUser");
        }

        const event = new Date('7/4/2022 7:02:16 pm');

        setDate(event.toDateString());
    }, []);

    return (
        <li className={`section_chats_userChat ${userType}`}>
            <img src={user.user.sender.image} alt={user.user.sender.name} className='chats_userChat_img' />
            <div>
                <p className='chats_userChat_name'>
                    {userType === 'self' ? "You" : user.user.sender.name}

                    <i className='userChat_name_time'>
                        {user.user.time}
                    </i>
                </p>
                <p className='chats_userChat_content'>
                    {user.user.message}
                </p>
            </div>
        </li>
    )
}

export default function Room({ user, changeTab }) {

    const inputRef = useRef(null);
    const messagesList = useRef(null);

    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [message, setMessage] = useState('');

    const [visible, setVisible] = useState(false);

    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {

        // establishing connection with socket.io
        socket = io(`${API_HOST}`);

        // join the room entered by the user
        socket.emit('join', user.batch.chatroom._id);

        socket.on('chatroom', (chatroom) => {
            console.log("Messages when user connected !\n");
            setChatHistory(chatroom.messages);
            if (messagesList.current) {
                messagesList.current.scrollTop = messagesList.current.scrollHeight;
            }
        });
    }, []);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmitBtn = () => {
        const time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        const chatNew = {
            sender: user._id,
            message: message,
            time: time,
            chatroom: user.batch.chatroom._id
        };

        // console.log(chatNew);

        // send the message to the server
        socket.emit('chat', chatNew);
        socket.on('chatroom', (chatroom) => {
            console.log("Socket Data: ", chatroom);
            setChatHistory(chatroom.messages);
        });

        messagesList.current.scrollTop = messagesList.current.scrollHeight;

        setMessage("");
    }

    return (
        <section className='cp_wrapper_room'>
            <div className='wrapper_room_title'>
                <img src="https://via.placeholder.com/100" alt="avatar" className='room_title_img' />
                <h2>{user.batch.chatroom.room_name}</h2>
                <div className='room_title_extraIcon'>
                    <div
                        onMouseOver={() => {
                            setVisible(true)
                        }}
                        onMouseLeave={() => {
                            setVisible(false)
                        }}

                    >
                        <InfoIcon color={"#3ABE2F"} />

                    </div>
                    {visible && <div className='title_extraIcon_infoDisplay'>
                        <p>Messages you send in this group are secured with end-to-end encryption.</p>
                    </div>}

                </div>
            </div>
            <section className='wrapper_room_section'>
                <div className='room_section_chats' ref={messagesList}>
                    <ul className='section_chats_display' >
                        {
                            chatHistory.map((value, key) => {
                                return (
                                    <UserChat
                                        user={value}
                                        currentUser={user}
                                    />
                                )
                            })
                        }
                    </ul>

                </div>
                <div className='room_section_inputArea'>
                    <button onClick={() => setShowEmoji(!showEmoji)} className='section_inputArea_emojiBtn'>
                        <EmojiICon />
                    </button>
                    <div className='section_inputArea_emojiPicker'>


                        {showEmoji &&
                            <EmojiPicker
                                onEmojiClick={(event, emojiObject) => {
                                    setSelectedEmoji(emojiObject.emoji);
                                    setMessage(message + emojiObject.emoji);
                                }}
                                preload={false}
                                disableAutoFocus={true}
                                skinTone={SKIN_TONE_MEDIUM_DARK}
                                groupNames={{ smileys_people: 'PEOPLE' }}
                                searchPlaceholder={'Search here for emoji'}
                                groupVisibility={{
                                    flags: false,
                                }}
                                disableSkinTonePicker
                                native
                            />}
                    </div>
                    <input type={'text'}
                        value={message}
                        ref={inputRef}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmitBtn();
                            }
                        }}
                        onChange={handleInputChange} placeholder="Start typing here" />
                    <button onClick={handleSubmitBtn} className='section_inputArea_sendBtn'>
                        <SendIcon scale={24} />
                    </button>
                </div>
            </section>
        </section>
    )
}
