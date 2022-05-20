import React from 'react'
import { NewspaperIcon } from '../../icons/Icons';
import axios from 'axios';

const NewsCardItem = (props) => {
    return <li className='wrapper_newsCard_item'>
        <a target='_blank' href={props.link} title="link" rel="noreferrer">
            <div className='newsCard_item_head'>
                <p className='item_head_category'>{props.category}</p>
            </div>

            <p className='newsCard_item_content'>
                {props.content}
            </p>
        </a>
    </li>
}

export default function Newsstand() {
    const [news, setNews] = React.useState([]);

    React.useEffect(() => {
        axios
            .get('http://localhost:5000/msbte/news')
            .then(res => {
                console.log(res.data.newsData);
                setNews(res.data.newsData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section className='cp_newsstand_wrapper'>
            <div className='wrapper_title'>
                <NewspaperIcon width="45" height="45" />
                <h1>News Stand</h1>
            </div>

            <ul className='wrapper_newsCard_list'>
                {news.map(news => (
                    <NewsCardItem
                        key={news.id}
                        category="MSBTE"
                        content={news.innerText}
                        link={news.href}
                    />
                ))}
            </ul>
        </section>
    )
}
