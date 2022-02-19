import React from 'react'
import "./notification.css"
import { Link } from '../../icons/Icons'

const NotificationCard = (props) => {

    return <li>
        <div className='notifyCardTop'>
            <p>{props.notify}</p>
            <Link />
        </div>
        <div className='notifyCardBottom'>
            <p>{props.notifyTimeCount} &#8226; {props.notifyChannel} </p>
            <p>Ignore</p>
        </div>
    </li>
}

export default function Notification() {
    return (
        <section className='notifyContainer'>
            <div className='notifyTitle'>
                <h1>Notification</h1>
                <hr />
            </div>
            <ul className='notifyCards'>
                <NotificationCard notify='Practical 15 Added' notifyTimeCount='1 min ago' notifyChannel='AJP' />
                <NotificationCard notify='Practical 15 Added' notifyTimeCount='1 min ago' notifyChannel='AJP' />
                <NotificationCard notify='Practical 15 Added' notifyTimeCount='1 min ago' notifyChannel='AJP' />
            </ul>
        </section>
    )
}
