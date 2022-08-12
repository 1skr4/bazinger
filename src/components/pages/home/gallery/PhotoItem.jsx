import React from 'react'
import styled from 'styled-components'
import image from '../../../../assets/image_gallery.png'

export const PhotoItem = ({ label, description, image }) => {



    return (
        <ContainerStyled>
            <Photo>
                <i class='bx bx-plus'></i>
                <Cover> 
                    <Label>{label}</Label>
                </Cover>
            </Photo>
            <Description>{description}</Description>
        </ContainerStyled>
    )
}

const Photo = styled.div`
    position: relative;
    width: 270px;
    height: 200px;
    border-radius: 14px;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    transition: .3s;
    i {
        display: none;
        font-size: 40px;
        color: var(--white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        transition: .3s;
    };
    :hover {
        i {
            display: block;
            transition: .3s;
        };
        ::after {
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
            border-radius: 14px;
            background: rgb(75, 202, 255);
            opacity: .6;
            transition: .3s;
        };
    };
    @media (max-width: 1280px) {
        width: 220px;
        height: 160px;
    };
    @media (max-width: 425px) {
        width: 270px;
        height: 200px;
    };
`

const Cover = styled.div`
    width: 100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    height: 40px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.5);
`

const Label = styled.span`
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: var(--primary);
    transition: .3s;
`

const ContainerStyled = styled.div`
    max-width: 220px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 20px;
`



const Description = styled.p`
    text-align: center;
    color: #939393;
`