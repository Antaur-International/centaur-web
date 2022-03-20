import React, { useRef, useState } from 'react'
import { EmojiICon, InfoIcon, SendIcon } from '../../../icons/Icons'
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const UserChat = ({ userImg, chat, time, userType, userName }) => {
    return (
        <div className={`section_chats_userChat ${userType}`}>
            <img src={userImg} alt={userName} className='chats_userChat_img ' />
            <div>
                <p className='chats_userChat_name'>{userName} <i className='userChat_name_time'>{time}</i></p>
                <p className='chats_userChat_content'>
                    {chat}
                </p>
            </div>

        </div>
    )
}

export default function Room() {

    const inputRef = useRef(null);

    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [message, setMessage] = useState('');

    const [visible, setVisible] = useState(false);

    const chatHistory = [
        {
            userImg: 'https://via.placeholder.com/150',
            chat: "So I was testing today the UI for our applications and found that the UI is not very good, but don't be sad, I will fix it soon. This is just a test message. I am testing the width of this text display box",
            time: '12:00',
            userType: 'endUser',
            userName: 'Tester 01'
        },
        {
            userImg: 'https://via.placeholder.com/150',
            chat: "So I was testing today the UI for our applications and found that the UI is not very good, but don't be sad, I will fix it soon. This is just a test message. I am testing the width of this text display box",
            time: '12:00',
            userType: 'self',
            userName: 'You'
        },
        {
            userImg: 'https://via.placeholder.com/150',
            chat: "This is a sample small text message.",
            time: '12:00',
            userType: 'endUser',
            userName: 'Tester 02'
        },
    ]

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmitBtn = () => {
        console.log({ message });
        setMessage("");
    }

    return (
        <section className='cp_wrapper_room'>
            <div className='wrapper_room_title'>
                <img src="https://via.placeholder.com/100" alt="avatar" className='room_title_img' />
                <h2>College Group</h2>
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
                <div className='room_section_chats'>
                    <div className='section_chats_display'>


                        {
                            chatHistory.map((value, key) => {
                                return (
                                    <UserChat
                                        {...value}
                                    />
                                )
                            })
                        }
                    </div>

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
                        onChange={handleInputChange} placeholder="Start typing here" />
                    <button onClick={handleSubmitBtn} className='section_inputArea_sendBtn'>
                        <SendIcon scale={24} />
                    </button>

                </div>
            </section>
        </section>
    )
}
