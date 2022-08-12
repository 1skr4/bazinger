import React from 'react'
import styled from 'styled-components'
import banner from '../../../../assets/main_banner.png'
import { Carousel } from '../../../general/Carousel'
import { MobilePresentation } from './carousel-items/MobilePresentation'

export const Main = () => {

    
    const components = [
        <MobilePresentation />,
        <TestComponent>Component 2</TestComponent>,
        <TestComponent>Component 3</TestComponent>
    ]

    return (
        <Wrapper>
            <Carousel 
                components={components}
            />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 4px solid var(--primary);
`

const TestComponent = styled.span`
    color: var(--white);
`