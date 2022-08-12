import React from 'react'
import styled from 'styled-components'
import { Contact } from '../components/pages/home/contact'
import { Features } from '../components/pages/home/features'
import { Gallery } from '../components/pages/home/gallery'
import { Main } from '../components/pages/home/main'
import { Video } from '../components/pages/home/video'

export const HomePage = () => {
    return (
        <Wrapper>
            <Main />
            <Features />
            <Gallery />
            <Video />
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    
`