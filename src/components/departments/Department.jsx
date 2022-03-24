import React from 'react'
import Header from '../Header'
import { CheckMark, AddIcon, ChevronRight, ChevronLeft, UserGroupIcon, ChatIcon, FolderIcon } from '../../icons/Icons'
import Resource from './Resource/Resource'
import Members from './Members/Members';
import Chats from './Chats/Chats';
import Room from './Chats/Room';

import { UserContext } from '../../data/Context/UserContext';


export default function Department(props) {

    const [selected, setSelected] = React.useState("resource");

    const user = React.useContext(UserContext);
    var sessionUser = JSON.parse(sessionStorage.getItem('user'));

    const changeTab = (tab) => {
        setSelected(tab);
    }

    React.useEffect(() => {
        console.log(sessionStorage.getItem('user'));
        console.log(user.status);
    }, [])

    return (
        <main className='lyt_wrapper_department'>
            <Header user={props.user} />
            <section className='wrapper_department_main'>
                <div className='department_main_leftPanel'>
                    <ul className='main_leftPanel_navList'>
                        <li className='leftPanel_navList_item'
                            onClick={() => setSelected("members")}>
                            <div className={`navList_item_label ${selected === 'members' && 'selected'}`}>
                                < UserGroupIcon />
                                <p>Members</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item'
                            onClick={() => setSelected("resource")}>
                            <div className={`navList_item_label ${selected === 'resource' && 'selected'}`} >
                                <FolderIcon />
                                <p>Resources</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item'
                            onClick={() => setSelected("messages")}
                        >
                            <div className={`navList_item_label ${selected === 'messages' || selected === 'room' ? 'selected' : ''}`}>
                                <ChatIcon color="black" />
                                <p>Messages</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item' >
                            <div className='navList_item_label' style={{ opacity: "0.5" }}>
                                <ChevronLeft size="15" />
                                <p style={{
                                    fontSize: "0.9vw",
                                }} >{user.status.batch.name}</p>
                            </div>
                            <ul className='navList_item_subMenu'>
                                {
                                    user.status.batch.subjects.map((subj, index) => {
                                        return (
                                            <li className='item_subMenu_item'>
                                                {subj.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className='department_main_rightContent'>
                    {selected === "members" && <Members />}
                    {selected === "resource" && <Resource />}
                    {selected === "messages" && <Chats changeTab={changeTab} />}
                    {selected === "room" && <Room changeTab={changeTab} />}
                </div>
            </section>
        </main >
    )
}
