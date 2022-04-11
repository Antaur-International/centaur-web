import React from 'react'

export default function Teams() {
    return (
        <section className='landing_body_team' id='teams'>
            <h2>Meet the team</h2>
            <ul className='body_team_list'>
                <li className='team_list_item'>

                    <img src='https://avatars.githubusercontent.com/u/64542454?v=4' alt="" width={200} className='list_item_img' />

                    <div className='list_item_text'>
                        <p className='item_text_title'>Bedant Hota</p>
                        <p className='item_text_description'>
                            EN 1911480143
                        </p>
                    </div>
                </li>
                <li className='team_list_item'>

                    <img src='https://avatars.githubusercontent.com/u/72993471?v=4' alt="" width={200} className='list_item_img' />

                    <div className='list_item_text'>
                        <p className='item_text_title'>Pratham Yadav</p>
                        <p className='item_text_description'>
                            EN 1911480143
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
