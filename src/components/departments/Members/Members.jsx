import React from 'react'

export default function Members() {
    return (
        <section>
            <h2>Members</h2>
            <ul className='wrapper_members_list'>
                <li className='members_list_item'>
                    <div className='list_item_avatar'>
                        <img src="https://via.placeholder.com/150" alt="avatar" />
                    </div>

                    <p className='list_item_name'>
                        Pratham Yadav
                    </p>
                    <p className='list_item_role'>
                        Student
                    </p>

                </li>
            </ul>

        </section>
    )
}
