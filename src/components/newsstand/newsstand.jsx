import React from 'react'


const NewsCardItem = (props) => {
    return <li className='wrapper_newsCard_item'>
        <div className='newsCard_item_head'>
            <div className='item_head_date'>
                <p>{props.date}</p>
            </div>
            <p className='item_head_category'>{props.category}</p>
        </div>

        <p className='newsCard_item_content'>
            {props.content}
        </p>
    </li>
}

export default function Newsstand() {
    return (
        <section className='cp_newsstand_wrapper'>
            <div className='wrapper_title'>
                <img src='/images/icons/newspaper.svg' alt="" width={50} className="wrapper_title_icon" />
                <h1>News Stand</h1>
            </div>

            <ul className='wrapper_newsCard_list'>
                <NewsCardItem
                    date="17 Feb 2020"
                    category="MSBTE"
                    content='One week online faculty development training program on " ENHANCING INDUSTRY INSTITUTE INTERACTION" from 07th to 11 th March, 2022 organised by Government polytechnic, Nanded.( English)(34 kb)'
                />
                <NewsCardItem
                    date="17 Feb 2020"
                    category="MSBTE"
                    content='One week online faculty development training program on " ENHANCING INDUSTRY INSTITUTE INTERACTION" from 07th to 11 th March, 2022 organised by Government polytechnic, Nanded.( English)(34 kb)'
                />
                <NewsCardItem
                    date="17 Feb 2020"
                    category="MSBTE"
                    content='One week online faculty development training program on " ENHANCING INDUSTRY INSTITUTE INTERACTION" from 07th to 11 th March, 2022 organised by Government polytechnic, Nanded.( English)(34 kb)'
                />
            </ul>
        </section>
    )
}
