import React, { useRef, useState } from 'react'
import { EmojiICon, SendIcon } from '../../../icons/Icons'
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

export default function Room() {

    const inputRef = useRef(null);

    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [message, setMessage] = useState('');

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
                <img src="https://via.placeholder.com/150" alt="avatar" className='room_title_img' />
                <h2>College Group</h2>
            </div>
            <section className='wrapper_room_section'>
                <div className='room_section_chats'>
                    <div className='section_chats_display'>


                        {
                            [1, 2, 3, 4, 5, 6, 7].map((value, key) => {
                                return (
                                    <div key={key} className='section_chats_userChat endUser'>
                                        <img src="https://via.placeholder.com/150" alt="avatar" className='chats_userChat_img ' />

                                        <div>

                                            <p className='chats_userChat_name'>Bedant Hota <i className='userChat_name_time'>11:02 PM</i></p>
                                            <p className='chats_userChat_content'>
                                                Sir, we talked to the professor about the project.
                                            </p>
                                        </div>

                                    </div>
                                )
                            })
                        }

                        <div className='section_chats_userChat self'>
                            <img src="https://via.placeholder.com/150" alt="avatar" className='chats_userChat_img ' />

                            <div>

                                <p className='chats_userChat_name'>You <i className='userChat_name_time'>11:02 PM</i></p>
                                <p className='chats_userChat_content'>
                                    Sir, we talked to the professor about the project.
                                </p>
                            </div>

                        </div>
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
