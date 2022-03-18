import React from 'react'

export default function Chats({ changeTab }) {
    return (
        <section className='cp_wrapper_chats'>
            <h2>Chat Rooms</h2>
            <ul className='wrapper_chats_list'>
                <li className='chats_list_item'
                    onClick={() => changeTab("room")}>
                    <div className='list_item_avatar'>
                        <img src="https://via.placeholder.com/150" alt="avatar" />
                    </div>
                    <p className='list_item_title'>College</p>
                </li>
            </ul>
        </section>
    )
}
