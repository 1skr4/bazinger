import React from 'react'
import styled from 'styled-components'
import { FeaturesItem } from './FeaturesItem'

const ITEMS = [
    {
        icon: "bx bxs-layer",
        label: "ATTRACTIVE LAYOUT",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    },
    {
        icon: "bx bx-mobile-alt",
        label: "FRESH DESIGN",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    },
    {
        icon: "bx bxs-conversation",
        label: "MULTIPURPOSE",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    },
    {
        icon: "bx bx-message",
        label: "EASY TO CUSTOMIZE",
        description: "Nunc cursus libero purus ac congue arcu curus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar"
    }
]

export const Features = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerHeader>
                    <HeaderTitle>summarise the features</HeaderTitle>
                    <HeaderDescription>summarise what your product is all about</HeaderDescription>
                </ContainerHeader>
                <Items>
                    {
                        ITEMS.map((item) => (
                            <FeaturesItem label={item.label} icon={item.icon} description={item.description} />
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
    border-bottom: 1px solid #e7e7e7;
    background: #F9F9F9;
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