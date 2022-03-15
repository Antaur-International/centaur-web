import React from 'react'
import Header from '../Header'
import { CheckMark, AddIcon, ChevronRight, ChevronLeft, UserGroupIcon } from '../../icons/Icons'


export default function Department(props) {

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <main className='lyt_wrapper_department'>
            <Header user={props.user} />
            <section className='wrapper_department_main'>
                <div className='department_main_leftPanel'>
                    <ul className='main_leftPanel_navList'>
                        <li className='leftPanel_navList_item'>
                            <div className='navList_item_label'>
                                {/* <UserGroupIcon /> */}
                                <p>Members</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item'>
                            <div className='navList_item_label'>
                                {/* <UserGroupIcon /> */}
                                <p>Public Resources</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item'>
                            <div className='navList_item_label'>
                                {/* <UserGroupIcon /> */}
                                <p>Messages</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item' >
                            <div className='navList_item_label' style={{ opacity: "0.5" }}>
                                <ChevronLeft size="15" />
                                <p style={{
                                    fontSize: "0.9vw",
                                }} >Semester 06</p>
                            </div>
                            <ul className='navList_item_subMenu'>
                                <li className='item_subMenu_item'>
                                    Public Resources
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className='department_main_rightContent'>

                </div>
            </section>
        </main>
    )
}
