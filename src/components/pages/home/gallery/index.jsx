import React from 'react'
import styled from 'styled-components'
import { PhotoItem } from './PhotoItem'

const ITEMS = [
    {
        label: "SCREEN SHOT #1",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    },
    {
        label: "SCREEN SHOT #2",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    },
    {
        label: "SCREEN SHOT #3",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    },
    {
        label: "SCREEN SHOT #4",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    }
]

export const Gallery = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerHeader>
                    <HeaderTitle>show the gallery</HeaderTitle>
                    <HeaderDescription>summarise what your product is all about</HeaderDescription>
                </ContainerHeader>
                <Items>
                    {
                        ITEMS.map((item) => (
                            <PhotoItem label={item.label} description={item.description} />
                        ))
                    }
                </Items>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    min-height: 680px;
    background: var(--background);
`

const Container = styled.div`
    max-width: 1170px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1200px) {
        padding: 0 20px;
    }
`

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row-gap: 5px;
    margin-top: 60px;
`

const HeaderTitle = styled.h1`
    font-size: 36px;
    font-weight: 900;
    color: var(--text);
    text-align: center;
`

const HeaderDescription = styled.span`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
`

const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-row-gap: 40px;
    grid-column-gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 60px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`