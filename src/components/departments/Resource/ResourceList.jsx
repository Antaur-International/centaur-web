import React from 'react'
import { DotsIcon, DownloadIcon, PDFIcon } from '../../../icons/Icons';

export default function ResourceList({ item }) {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <li className='publicResource_list_item'>
            <PDFIcon />
            <p className='list_item_title'>{item.title}</p>
            <p className='list_item_date'>{item.date}</p>
            <div className='list_item_extra' onClick={() => setIsOpen(!isOpen)}>
                <DotsIcon />

                {isOpen && <a
                    href='/centaur-web/images/EmmotionsExpressed.jpg'
                    className='item_extra_download'
                    download={"Emmotions Expressed"}
                >
                    <DownloadIcon />
                    <p>Download</p>
                </a>}


            </div>
        </li>
    )
}
