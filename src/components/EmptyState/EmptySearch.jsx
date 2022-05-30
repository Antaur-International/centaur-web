import React from 'react'

export const EmptySearch = () => {
    return (
        <div className='empty_state_wrapper'>
            <img src='/centaur-web/images/state/resultNotFound.svg' width={120} alt='' />
            <p>No Result Found!</p>
        </div>
    )
}
