import React from 'react'
import { SingleTick, HamBurger } from '../icons/Icons'

export default function TodoLayout() {
    return (
        <ul className='lyt_todo_wrapper'>
            <li className='wrapper_todo_item'>
                <p className='todo_item_date'>12 Oct 2021</p>
                <div className='todo_item_main'>
                    <HamBurger />
                    <button className='item_main_button'>
                        <SingleTick />
                    </button>
                    <div className='item_main_todoText'>
                        <p>College</p>
                        <p>Complete Practical 15</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}
