import React from 'react'
import Header from '../components/Header'

export default function LiveClassesLyt({ user, setActiveTab }) {
    return (
        <main className='lyt_wrapper_liveClasses'>
            <Header user={user} />
            <section className='wrapper_liveClasses_main'>
                <h2>Live Classes</h2>
                <section className='liveClasses_main_onGoing'>
                    <h3>On Going</h3>
                    <ul className='main_onGoing_list'>
                        <li className='onGoing_list_item'>
                            <p className='list_item_title'>Meeting title </p>
                            <p className='list_item_description'>Description</p>
                            <button
                                onClick={() => setActiveTab('joinClasses')}
                                className='list_item_joinBtn'>Join</button>
                        </li>
                    </ul>
                </section>
                <section className='liveClasses_main_scheduled'>
                    <h3>Scheduled</h3>
                </section>
            </section>
        </main>
    )
}
