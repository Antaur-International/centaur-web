import React from 'react'
import { SingleTick, HamBurger } from '../icons/Icons'


export default function TodoLayout() {

    const todos = [
        {
            date: "12 Oct 2022",
            title: "Meeting with client",
            category: "Office"
        },
        {
            date: "22 March 2022",
            title: "Meeting with Bedant Hota",
            category: "Office"
        },
        {
            date: "12 Oct 2022",
            title: "Meeting with client",
            category: "Office"
        },
    ]

    const listItem = todos.map((todo, index) => (
        <li className='wrapper_todo_item'>
            <p className='todo_item_date'>{todo.date}</p>
            <div className='todo_item_main'>
                <div className='item_main_dragIcon'>
                    <HamBurger />
                </div>
                <label className='m_container'>
                    <input type={'checkbox'} className="checkbox_done" />
                    <span class="checkmark"></span>
                </label>
                <div className='item_main_todoText'>
                    <p>{todo.category}</p>
                    <p>{todo.title}</p>
                </div>
            </div>
        </li>
    ))

    return (
        <ul className='lyt_todo_wrapper'>
            {listItem}
        </ul>
    )
}
