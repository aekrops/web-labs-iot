import React from 'react'
import video from "../../video/lawyer.mp4"
import {
    HeroVideo,
    VideoBackground,
    GetStarted
} from './HeroSection.styled'
const HeroSection = () => {
    return (
        <HeroVideo>
            <VideoBackground autoPlay loop
            muted src={video}/>
            <GetStarted>
                Get started!
            </GetStarted>
        </HeroVideo>
    )
}

export default HeroSection;
