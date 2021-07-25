import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TestimonialData } from '../data/testimonialData'
import Testimonial from './Testimonial'
let heroStyle = {};
let playButtonStyle = {
    top: 'calc(50% - 43px)',
    left: 'calc(50% - 43px)',
}
const Hero = () => {
    const video = useRef(null);
    const [played, setPlayed] = useState(false)
    const toggleFullScreen = () => {
        video.current.play();
        setPlayed(true);
        if (video.current.requestFullscreen) {
            video.current.requestFullscreen();
        } else if (video.current.msRequestFullscreen) {
            video.current.msRequestFullscreen();
        } else if (video.current.mozRequestFullScreen) {
            video.current.mozRequestFullScreen();
        } else if (video.current.webkitRequestFullscreen) {
            video.current.webkitRequestFullscreen();
        }
    };
    return (
        <div className="mt-24 lg:mt-44 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <h1 className="text-4/5xl leading-tight lg:text-6xl px-4 lg:px-0  
            bg-clip-text text-transparent bg-gradient-to-l from-defi-purple  to-defi-blue hero-line-height">
                We’re The DeFi Network. <br ></br> We build digital products <br className="hidden lg:inline-block"></br> & apps on the blockchain.
            </h1>
            <p className="text-xl pt-3 px-4 lg:px-0">The DeFi Network is a global blockchain product team.</p>
            <div className="pt-6 lg:pt-16 relative">
                <video style={{width: '100%'}} ref={video} controls={played} onEnded={() => {setPlayed(false)}}>
                    <source src='/HomePage.mp4' type='video/mp4' />
                </video>
                {!played&&<span className="absolute hover:opacity-80 cursor-pointer" style={playButtonStyle} onClick={() => {video.current.play();setPlayed(true);}}>
                    <Image
                    src="/play.png"
                        width={86}
                        height={86}
                        objectFit="contain"
                        quality={100}
                        alt="play"
                    />
                </span>}
                {!played&&<h1 className="absolute video-caption hidden lg:block">Learn more<br/>about our<br/>process —</h1>}
                </div>
            <div className="flex space-x-12 p-4 testimonals">
            {TestimonialData.map((data, idx) => (idx === 0 || idx ===1) && <Testimonial avatar={data.avatar} name={data.name} jobTitle={data.jobTitle} content={data.content} className={`testimonal-${idx}`} />)}
            </div>
            </div>
    )
}

export default Hero

// <Image
//     src="/video.png"
//     width={1248}
//     height={650}
//     objectFit="cover"
//     quality={100}
//     alt="video"
// />