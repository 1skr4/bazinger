import React from 'react'
import styled from 'styled-components'
import useInput from '../../../../hooks/useInput'

export const ContactForm = () => {

    const nameInput = useInput('')
    const emailInput = useInput('')
    const subjectInput = useInput('')
    const messageInput = useInput('')

    const handleSubmitForm = () => {
        // Function for send form to any api
    }

    return (
        <Container>
            <Title>Contact</Title>
            <Input placeholder="Your name" name="name" {...nameInput} />
            <Input placeholder="Your email" name="email" {...emailInput} />
            <Input placeholder="Subject" name="subject" {...subjectInput} />
            <TextArea placeholder="Message" rows="10" name="message" {...messageInput} />
            <SubmitButton onClick={handleSubmitForm}>
                <span>Send</span>
            </SubmitButton>
        </Container>
    )
}

const Container = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 12px;
    background: rgba(75, 202, 255, 0.9);
    box-shadow: 0px 2px 10px rgba(0,0,0,.15);
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 375px) {
        width: 300px;
        padding: 25px;
    }
`

const Title = styled.h1`
    margin-bottom: 20px;
    color: var(--white);
    font-size: 36px;
    font-weight: 600;
`

const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    height: 60px;
    margin-bottom: 15px;
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    ::placeholder {
        color: #B0B0B0;
    }
`

const TextArea = styled.textarea`
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 6px;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    resize: none;
    ::placeholder {
        color: #B0B0B0;
    }
`

const SubmitButton = styled.button`
    width: 70%;
    border: none;
    outline: none;
    height: 80px;
    border-radius: 8px;
    background: #414042;
    border-bottom: 4px solid #313032;
    cursor: pointer;
    transition: .3s;
    span {
        color: var(--primary);
        font-size: 18px;
        font-weight: 500;
    };
`