import React from 'react'
import { Link } from '../../icons/Icons'

const NotificationCard = (props) => {

    return <li className='wrapper_list_item'>
        <img src="/centaur-web/images/icons/bell-green.svg" alt="" />

        <div className='list_item_text'>
            <p className='item_text_label'>2 Hour Ago | AJP</p>
            <p className='item_text_content'>Practical 15 Assigned</p>
        </div>

        <div className='list_item_actionButtons'>
            <button className='btn'>
                <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
            </button>
            <button className='btn'>
                <img src="/centaur-web/images/icons/tick-green.svg" alt="" />
            </button>
        </div>

    </li>
}

export default function Notification() {
    return (
        <section className='lyt_notification_wrapper'>
            <div className='notification_wrapper_title'>
                <h1>Notification</h1>
                <hr />
            </div>
            <div className='notification_wrapper_quickAction'>
                <button className='btn'>
                    <img src="/centaur-web/images/icons/bell-green.svg" alt="" />
                </button>

                <button className='btn'>
                    <img src="/centaur-web/images/icons/tick-green.svg" alt="" />
                    <p>Mark all as read</p>
                </button>
            </div>
            <ul className='notification_wrapper_list'>
                {
                    [1, 2].map((item, key) => {
                        return <NotificationCard key={key} />
                    })
                }
            </ul>
        </section>
    )
}
