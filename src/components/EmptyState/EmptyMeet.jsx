import React from 'react'

export const EmptyMeet = () => {
    return (
        <div className='empty_state_wrapper'>
            <img src='/centaur-web/images/state/emptyMeet.svg' width={100} alt='' />
            <p>No upcoming meeting.</p>
        </div>
    )
}
