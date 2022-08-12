import React from 'react'
import styled from 'styled-components'
import banner from '../../../../assets/map_banner.png'
import { ContactForm } from './ContactForm'

export const Contact = () => {
    return (
        <Wrapper>
            <ContactForm />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    min-height: 900px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`