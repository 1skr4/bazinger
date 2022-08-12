import React, { useState} from 'react'
import styled from 'styled-components'

export const Carousel = ({ components }) => {

    const [currentItem, setCurrentItem] = useState(0)

    const handleChangeCurrentItem = (side, index) => {
        return () => {
            switch (side) {
                case 'left':
                    if(currentItem > 0)
                        setCurrentItem(prev => prev - index)
                    else
                        setCurrentItem(components.length - 1)
                    break
                case 'right':
                    if(currentItem < components.length - 1)
                        setCurrentItem(prev => prev + index)
                    else
                        setCurrentItem(0)
                    break
                default:
                    break
            }
        }
    }

    const handleSetCurrentItem = (index) => {
        return () => {
            setCurrentItem(index)
        }
    }

    return (
        <Container>
            <ArrowButton side='left' onClick={handleChangeCurrentItem('left', 1)} ><i class='bx bx-chevron-left'></i></ArrowButton>
            {
                components && components[currentItem]
            }
            <ArrowButton side='right' onClick={handleChangeCurrentItem('right', 1)} ><i class='bx bx-chevron-right' ></i></ArrowButton>
            <CarouselDots>
                {components.map(( item, index ) => (<Dot active={currentItem === index} onClick={handleSetCurrentItem(index)} />))}
            </CarouselDots>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ArrowButton = styled.div`
    position: absolute;
    top: 50%;
    left: ${({ side }) => side === 'left' && '5%'};
    right: ${({ side }) => side === 'right' && '5%'};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(75, 202, 255, 0.25);
    cursor: pointer;
    transition: .3s;
    :hover {
        background: rgba(75, 202, 255, .6);
        box-shadow: 0px 2px 10px rgba(0,0,0,.5);
        transition: .3s;
        i {
            color: #414042;
            transition: .3s;
        }
    };
    i {
        color: rgba(255,255,255,0.6);
        font-size: 32px;
        transition: .3s;
    };
    @media (max-width: 768px) {
        background: none;
        width: 10px;
        left: ${({ side }) => side === 'left' && '3%'};
        right: ${({ side }) => side === 'right' && '3%'};
        :hover {
            background: none;
            box-shadow: none;
        }
    }
`

const CarouselDots = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-column-gap: 10px;
    bottom: 25px;
`

const Dot = styled.i`
    display: block;
    width: ${({ active }) => active ? '18px' : '15px'};
    height: ${({ active }) => active ? '18px' : '15px'};
    border-radius: 50%;
    background: ${({ active }) => active && 'var(--primary)'};
    border: ${({ active }) => !active && '1px solid var(--white)'};
    cursor: pointer;
    transition: .5s;
`