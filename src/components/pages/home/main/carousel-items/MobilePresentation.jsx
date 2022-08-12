import React from 'react'
import styled from 'styled-components'
import phoneImg from '../../../../../assets/phone.png'

export const MobilePresentation = () => {

    return (
        <Wrapper>
            <PhoneImage src={phoneImg} />
            <Content>
                <ContentTitle>Simple, Beautiful <b>and Amazing</b></ContentTitle>
                <ContentDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quidem, reprehenderit facere fugiat adipisci ea obcaecati quam nobis accusamus exercitationem sequi fuga inventore vel ut, architecto quia quibusdam impedit repellat.</ContentDescription>
                <ContentButtons>
                    <Button href='/'>DOWNLOAD</Button>
                    <Button fill href='/' >LEARN MORE</Button>
                </ContentButtons>
                <AppsContainer>
                    <AppTitle>Available on:</AppTitle>
                    <AppItems>
                        <App href='/' ><i class='bx bxl-android'></i></App>
                        <App href='/' ><i class='bx bxl-apple' ></i></App>
                    </AppItems>
                </AppsContainer>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`

const PhoneImage = styled.img`
    align-self: flex-end;
    width: 800px;
    @media (max-width: 1750px) {
        width: calc(100px + (800 - 100) * ((100vw - 320px) / (1750 - 320)));
    }
    @media (max-width: 1200px) {
        position: absolute;
        display: none;
    }
`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-self: center;
    grid-row-gap: 50px;
    padding: 0 50px;
    padding-top: 100px;
    @media (max-width: 1440px) {
        padding-left: 25px;
        padding-right: 25px;
    }
    @media (max-width: 1024px) {
        align-items: center;
    }
`

const ContentTitle = styled.h1`
    font-weight: 300;
    color: var(--white);
    font-size: 58px;
    @media (max-width: 1024px) {
        font-size: calc(32px + (58 - 32) * ((100vw - 320px) / (1024 - 320)));
        text-align: center;
    };
`

const ContentDescription = styled.p`
    font-weight: 300;
    max-width: 700px;
    font-size: 20px;
    color: var(--white);
    @media (max-width: 1024px) {
        font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1024 - 320)));
        text-align: center;
    }
`

const ContentButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    @media (max-width: 1024px) {
        justify-content: center;
    }
`

const Button = styled.a`
    height: 60px;
    width: 200px;
    border: ${({ fill }) => !fill && '2px solid var(--white)'};
    border-bottom: ${({ fill }) => fill && '2px solid #277697'};
    background: ${({ fill }) => fill && 'var(--primary)'};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
    :hover {
        box-shadow: 0px 2px 10px rgba(0,0,0,.25);
        transition: .3s;
    };
    @media (max-width: 425px) {
        width: 120px;
        font-size: 12px;
    }
`

const AppsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 1024px) {
        justify-content: center;
        flex-direction: column;
    }
`

const AppTitle = styled.span`
    color: var(--white);
    font-size: 18px;
`

const AppItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`

const App = styled.a`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #2b2b2c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
        color: var(--white);
        font-size: 28px;
    };
    :hover {
        i {
            color: var(--primary);
        }
    }

`