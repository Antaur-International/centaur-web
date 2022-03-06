import React, { useRef } from 'react'


// just need to setup children
export default function ModalLayout({ children }) {



    return (
        <div className='bg_modal_wrapper'>
            {children}
        </div>
    )
}
