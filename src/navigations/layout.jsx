import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Header } from '../components/general/Header'
import { Footer } from '../components/general/Footer'

export const Layout = observer(() => {
  return (
    <Wrapper>
        <Header />
        <Outlet />
        <Footer />
    </Wrapper>
  )
})

const Wrapper = styled.div`
  width: 100%;
`