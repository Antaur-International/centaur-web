import React from 'react'
import Header from '../components/Header'
import { ChevronLeft, Heart, UserIcon } from '../icons/Icons'

export default function SettingsLayout(props) {
    return (
        <section className='layout_wrapper_settings'>
            <Header />
            <section className='wrapper_settings_navbar'>
                <h1>Settings</h1>
                <ul className='settings_navbar_list'>
                    <li className='navbar_list_item'>

                        <Heart color="black" />
                        <div className='list_item_title'>
                            <p className='item_title_title'>Appearances</p>
                            <p className='item_title_shortList'>Dark and Light Mode, Font Size</p>
                        </div>
                        <div className='list_item_iconChevron'>

                            <ChevronLeft color="black" />
                        </div>
                    </li>
                    <li className='navbar_list_item'>
                        <UserIcon color={"#3ABE2F"} />
                        <div className='list_item_title'>
                            <p className='item_title_title'
                                style={{ color: "#3ABE2F" }}
                            >
                                Account Settings</p>
                            <p className='item_title_shortList' style={{ color: "#3ABE2F" }}>Personal Information, Email</p>
                        </div>
                        <div className='list_item_iconChevron'>

                            <ChevronLeft color="#3ABE2F" />
                        </div>
                    </li>
                </ul>
            </section>
            <section className='wrapper_setting_content'>

            </section>
        </section>
    )
}
