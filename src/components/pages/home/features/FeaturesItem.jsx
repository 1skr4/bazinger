import React from 'react'
import styled from 'styled-components'

export const FeaturesItem = ({ label, description, icon }) => {
    return (
        <ContainerStyled>
            <Rounded>
                <i className={icon}></i>
            </Rounded>
            <Label>{label}</Label>
            <Description>{description}</Description>
        </ContainerStyled>
    )
}

const Rounded = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--primary);
    border: 4px solid #EFEFEF;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    i {
        font-size: 90px;
        color: var(--white);
    }
`

const Label = styled.span`
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: var(--text);
    transition: .3s;
`

const ContainerStyled = styled.div`
    max-width: 220px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 20px;
    :hover {
        ${Rounded} {
            background: #414042;
            transition: .3s;
        };
        ${Label} {
            color: var(--primary);
            transition: .3s;
        }
    }
`

const Description = styled.p`
    text-align: center;
    color: #939393;
`