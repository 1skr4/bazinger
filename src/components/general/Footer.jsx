import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Label>Copyright © 2013 | BAZIGNER | All Rights Reserved</Label>
                <Links>
                    <LabelLink href='/'>Terms of Service</LabelLink>
                    <Label>|</Label>
                    <LabelLink href='/'>Privacy Policy</LabelLink>
                </Links>        
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    width: 100%;
    min-height: 150px;
    background: #414042;
`

const Container = styled.div`
    max-width: 1170px;
    min-height: 150px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
        padding: 0 20px;
    }
`

const Label = styled.span`
    color: #717071;
    font-size: 16px;
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-column-gap: 5px;
`

const LabelLink = styled.a`
    color: #717071;
    font-size: 16px;
`