import React from 'react'
import { SingleTick, HamBurger } from '../icons/Icons'

function TodoCard() {
    return (
        <li className='wrapper_todo_item'>
            <p className='todo_item_date'>12 Oct 2021</p>
            <div className='todo_item_main'>
                <HamBurger />
                <label className='m_container'>
                    <input type={'checkbox'} className="checkbox_done" />
                    <span class="checkmark"></span>
                </label>
                <div className='item_main_todoText'>
                    <p>College</p>
                    <p>Complete Practical 15</p>
                </div>
            </div>
        </li>
    )
}

export default function TodoLayout() {
    return (
        <ul className='lyt_todo_wrapper'>
            {
                [1, 2].map(() => {
                    return <TodoCard />
                })
            }
        </ul>
    )
}
