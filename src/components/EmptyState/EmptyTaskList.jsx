import React from 'react'

export const EmptyTaskList = () => {
    return (
        <div className='empty_state_wrapper'>
            <img src='/centaur-web/images/state/emptyTask.svg' width={120} alt='' />
            <p>It seems there are no task added yet.</p>
        </div>
    )
}
