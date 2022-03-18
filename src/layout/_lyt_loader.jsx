import React from 'react'

export default function Loader() {
    return (
        <div className='bg_wrapper_loader'>
            <div className='wrapper_loader_content'>
                {/* <img src="https://i.ibb.co/5jcrz1J/loading.gif" alt="loading" border="0" /> */}
                <img src='/centaur-web/images/icons/icon.svg' width={100} alt='' />
                <p>Centaur</p>
            </div>
        </div>
    )
}
