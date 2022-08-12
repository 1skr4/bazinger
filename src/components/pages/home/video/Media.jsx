import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import banner from '../../../../assets/main_banner.png'

export const Media = ({ onClose }) => {

    const videoRef = useRef(null)

    return (
        <Wrapper onClick={onClose} >
            <VideoContainer  
                ref={videoRef}
                src="https://www.youtube.com/embed/YFaBS24CPv8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="
                    accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture
                "
                allowFullScreen
            />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const VideoContainer = styled.iframe`
    width: 845px;
    height: 475px;
    background: none;
    border: none;
    box-shadow: 0px 4px 10px rgba(0,0,0,.5);
    @media (max-width: 1024px) {
        width: calc(270px + (845 - 270) * ((100vw - 320px) / (1024 - 320)));
        height: calc(155px + (475 - 155) * ((100vw - 320px) / (1024 - 320)));
    }
`