import React, { useState } from 'react'
import styled from 'styled-components'
import banner from '../../../../assets/video_banner.png'
import { Media } from './Media'
import { Link, useLocation } from 'react-router-dom'

export const Video = () => {
    
    const location = useLocation()
    
    const [isOpenedMedia, setOpenedMedia] = useState(false)

    const handleOpenMedia = () => {
        setOpenedMedia(prev => !prev)
    }

    const handleCloseMedia = () => {
        setOpenedMedia(false)
    }

    return (
        <Wrapper>
            <Container>
                <ButtonOpenVideo onClick={handleOpenMedia} >
                    <i class='bx bx-play' ></i>
                </ButtonOpenVideo>
                <Title>Whatch the best Technology in <b>Action</b></Title>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quidem, reprehenderit facere fugiat adipisci ea obcaecati quam nobis accusamus exercitationem sequi fuga inventore vel ut, architecto quia quibusdam impedit repellat.</Description>
            </Container>
            {
                isOpenedMedia && <Media onClose={handleCloseMedia} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    width: 100%;
    max-height: 680px;
    padding: 150px 0;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
`

const Container = styled.div`
    max-width: 1170px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row-gap: 20px;
    @media (max-width: 1200px) {
        padding: 0 20px;
    }
`

const ButtonOpenVideo = styled.button`
    border: 2px solid var(--white);
    background: none;
    outline: none;
    border-radius: 8px;
    height: 75px;
    width: 120px;
    cursor: pointer;
    i {
        color: var(--white);
        font-size: 70px;
    };
`

const Title = styled.h1`
    text-align: center;
    font-weight: 300;
    color: var(--white);
    font-size: 48px;
    @media (max-width: 1024px) {
        font-size: calc(32px + (48 - 32) * ((100vw - 320px) / (1024 - 320)));
    }
`

const Description = styled.p`
    text-align: center;
    font-weight: 300;
    max-width: 600px;
    font-size: 18px;
    color: var(--white);
    @media (max-width: 1024px) {
        font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1024 - 320)));
    }
`