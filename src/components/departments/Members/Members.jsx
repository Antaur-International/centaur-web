import React from 'react'

export default function Members() {
    return (
        <section className='cp_wrapper_members'>
            <h2>Members</h2>
            <div className='wrapper_members_section'>

                <div className='members_section_label'>
                    <p>Faculty</p>
                </div>

                <ul className='wrapper_members_list'>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(() => {
                            return <li className='members_list_item'>
                                <div className='list_item_avatar'>
                                    <img src="https://via.placeholder.com/150" alt="avatar" />
                                </div>

                                <p className='list_item_name'>
                                    Bedant Hota
                                </p>
                                <p className='list_item_role'>
                                    Faculty
                                </p>

                            </li>
                        })
                    }
                </ul>
            </div>
            <div className='wrapper_members_section'>
                <div className='members_section_label'>
                    <p>Student</p>
                </div>
                <ul className='wrapper_members_list'>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(() => {
                            return <li className='members_list_item'>
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
                        })
                    }
                </ul>
            </div>

        </section>
    )
}
