import React from 'react'
import { NewspaperIcon } from '../../icons/Icons';
import axios from 'axios';
import { API_HOST } from '../../API/constant';

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
    const [circulars, setCircular] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(`${API_HOST}/msbte/news`)
            .then(res => {
                console.log(res.data.newsData);
                setNews(res.data.newsData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        axios
            .get(`${API_HOST}/msbte/onlineActivities`)
            .then(res => {
                console.log(res.data.onlineActivitiesData);
                setCircular(res.data.onlineActivitiesData);
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
            <details>
                <summary>
                    <h1>Latest Circulars</h1>
                </summary>

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
            </details>
            <details>
                <summary>
                    <h1>Latest Activies</h1>
                </summary>

                <ul className='wrapper_newsCard_list'>
                    {circulars.map(news => (
                        <NewsCardItem
                            key={news.id}
                            category="MSBTE"
                            content={news.innerText}
                            link={news.href}
                        />
                    ))}
                </ul>
            </details>
        </section>
    )
}
