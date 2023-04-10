import React, { useEffect, useRef, useState } from 'react'
import { EndCallIcon, LiveIcon, MicroPhoneIcon } from '../icons/Icons';

export default function JoinMeeting() {


    const [isCameraOn, setIsCameraOn] = useState(false);

    const videoRef = useRef(null);


    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.muted = true;
                video.play();
            })
    }

    useEffect(() => {
        getUserCamera();
        setIsCameraOn(true);
    }, [])

    const changeCameraState = () => {

        if (isCameraOn) {
            setIsCameraOn(false);
            videoRef.current.pause();
        } else {
            setIsCameraOn(true);
            videoRef.current.play();
        }
    }

    return (
        <main className='wrapper_lyt_joinMeeting'>
            <h1>Video Conference</h1>
            <section className='lyt_joinMeeting_userInteraction'>
                <div className='joinMeeting_userInteraction_userArea'>
                    <video
                        className='userInteraction_userArea_video'
                        ref={videoRef}
                    />
                </div>

                <div className='joinMeeting_userInteraction_controls'>
                    <ul className='userInteraction_controls_list'>
                        <li className='controls_list_item'>
                            <button
                                onClick={changeCameraState}
                                className='list_item_btn'>
                                <LiveIcon color={"white"} />
                            </button>
                        </li>
                        <li className='controls_list_item'>
                            <button className='list_item_btn'>
                                <MicroPhoneIcon />
                            </button>
                        </li>
                        <li className='controls_list_item'>
                            <button className='list_item_btn endCall_btn'>
                                <EndCallIcon />
                            </button>
                        </li>
                    </ul>

                </div>

            </section>
        </main>
    )
}
