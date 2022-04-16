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

    useEffect(() => {
        // console.log(user);
        console.log(user.user.sender._id + ' === ' + user.currentUser._id);
        if (user.user.sender._id === user.currentUser._id) {
            setUserType("self");
            console.log('====================================');
            console.log(userType);
            console.log('====================================');
        } else {
            setUserType("endUser");
        }
    }, []);




    return (
        <li className={`section_chats_userChat ${userType}`}>
            <img src={user.user.sender.image} alt={user.user.sender.name} className='chats_userChat_img' />
            <div>
                <p className='chats_userChat_name'>{user.user.sender.name} <i className='userChat_name_time'>{user.user.time}</i></p>
                <p className='chats_userChat_content'>
                    {user.user.message}
                </p>
            </div>
        </li>
    )
}

export default function Room({ user }) {

    const inputRef = useRef(null);
    const messagesList = useRef(null);

    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [message, setMessage] = useState('');

    const [visible, setVisible] = useState(false);

    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        scrollToBottom(messagesList.current);

        // establishing connection with socket.io
        socket = io('http://localhost:8080');
        console.log(socket);

        // join the room entered by the user
        socket.emit('join', user.batch.chatroom._id);

        socket.on('chatroom', (chatroom) => {
            console.log('First time logging ====================================');
            console.log(chatroom);
            console.log('====================================');
            setChatHistory(chatroom.messages);
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

        console.log('User Chat ====================================');
        console.log(chatNew);
        console.log('=============================================');

        // send the message to the server
        socket.emit('chat', chatNew);
        socket.on('chatroom', (chatroom) => {
            setChatHistory(chatroom.messages);
            console.log('Room Law ====================================');
            console.log(chatroom.messages);
            console.log('====================================');
        });


        setMessage("");
    }

    const scrollToBottom = (element) => {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });;
        console.log('====================================');
        console.log(element);
        console.log('====================================');
    }

    return (
        <section className='cp_wrapper_room'>
            <div className='wrapper_room_title'>
                <img src="https://via.placeholder.com/100" alt="avatar" className='room_title_img' />
                <h2>{user.batch.chatroom.room_name}</h2>
                <div className='room_title_extraIcon'>
                    <div onClick={() => setVisible(!visible)}>
                        <InfoIcon color={"#3ABE2F"} />

                    </div>
                    <div className='title_extraIcon_infoDisplay'
                        style={{
                            visibility: visible ? 'visible' : 'hidden'
                        }}>
                        <p>Messages you send in this group are secured with end-to-end encryption.</p>
                    </div>

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
