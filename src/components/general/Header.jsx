import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

export const Header = observer(() => {

    const [isOpenBurger, setOpenBurger] = useState(false)


    const handleOpenMenu = useCallback(() => {
        if(window.innerWidth <= 1200) {
          setOpenBurger(old => !old)
          if(isOpenBurger) {
            document.body.style.overflow = 'unset'
          } else {
            document.body.style.overflow = 'hidden'
          }
        }
      }, [isOpenBurger])

    return (
        <Wrapper open={isOpenBurger} >
            <Container>
                <LogoLink href='/'>
                    <img src={logo} />
                </LogoLink>
                <nav>
                    <NavBar open={isOpenBurger}>
                        <NavBarLi><a href="#">HOME</a></NavBarLi>
                        <NavBarLi><a href="#">FEATURES</a></NavBarLi>
                        <NavBarLi><a href="#">GALLERY</a></NavBarLi>
                        <NavBarLi><a href="#">VIDEO</a></NavBarLi>
                        <NavBarLi><a href="#">PRICES</a></NavBarLi>
                        <NavBarLi><a href="#">TESTIMONIALS</a></NavBarLi>
                        <NavBarLi><a href="#">DOWNLOAD</a></NavBarLi>
                        <NavBarLi><a href="#">CONTACT</a></NavBarLi>
                    </NavBar>
                </nav>

                <Burger 
                    open={isOpenBurger} 
                    onClick={handleOpenMenu}
                >
                    <span></span>
                </Burger>
            </Container>
        </Wrapper>
    )
})

const Wrapper = styled.header`
    position: absolute;
    width: 100%;
    height: 100px;
    background-color: ${({ open }) => !open && 'rgba(0, 0, 0, 0.25)'};
    box-shadow: ${({ open }) => !open && '0px 1px 1px rgba(255, 255, 255, 0.20)'};
    z-index: 10;
`

const Container = styled.div`
    max-width: 1170px;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
        padding: 0 20px;
    }
`

const LogoLink = styled.a`
    z-index: 10;
    img {
        width: 140px;
    };
`

const NavBar = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    grid-column-gap: 37px;
    height: 100%;
    @media (max-width: 1200px) {
            position: fixed;
            top: 0;
            right: ${({ open }) => open ? 0 : '-100%'};
            width: 100%;
            height: 100%;
            padding-bottom: 100px;
            background: rgba(18, 50, 63, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 80px;
            transition: all .3s ease 0s;
        li {
            margin-bottom: 20px;
            margin-left: 20px;
        }
        li > a {
            font-size: 28px;
        };
    };
`

const NavBarLi = styled.li`
    display: grid;
    height: 100%;
    align-items: center;
    cursor: pointer;
    a {
        color: var(--white);
        font-size: 13px;
        font-weight: 700;
        transition: .3s;
    };
    :hover {
        border-top: 2px solid var(--primary);
        a {
            color: var(--primary);
            transition: .3s;
        }
    }
`

const Burger = styled.div`
  display: none;
  z-index: 3;
  cursor: pointer;
  @media (max-width: 1200px) {
    position: relative;
    display: block;
    width: 30px;
    height: 20px;
    span {
      position: absolute;
      background-color: #FFF;
      left: 0;
      width: 100%;
      height: 2px;
      top: 9px;
      transform: ${({ open }) => open ? 'scale(0)' : 'scale(1)'};
      /* transition: all .3s ease 0s; */
    }
    ::before, ::after {
      content: '';
      background-color: #FFF;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      transition: all .3s ease 0s;
    };
    ::before {
      top: ${({ open }) => open ? '9px' : 0};
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
    };
    ::after {
      bottom: ${({ open }) => open ? '9px' : 0};
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  };
`
