import React from 'react'
import { DotsIcon, DownloadIcon, PDFIcon } from '../../../icons/Icons';

export default function ResourceList({ item }) {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <li className='publicResource_list_item'>
            <PDFIcon />
            <div>
                <p className='list_item_title'>{item.resource_name}</p>
                <p className='list_item_description'>{item.resource_description}</p>
            </div>
            <p className='list_item_date'>{item.resource_created_on.toString()}</p>
            <div className='list_item_extra' onClick={() => setIsOpen(!isOpen)}>
                <DotsIcon />

                {isOpen && <a
                    href='/centaur-web/images/EmmotionsExpressed.jpg'
                    className='item_extra_download'
                    download={"Emmotions Expressed"}
                >
                    <DownloadIcon />
                    <a href={item.resource_attachments[0]}>Download</a>
                </a>}


            </div>
        </li>
    )
}
