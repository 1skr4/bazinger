import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './layout'
import { HomePage } from '../pages/Home.page'
import { Media } from '../components/pages/home/video/Media'

export const useRoutes = () => {
  
  let location = useLocation()
  let state = location.state

  return (
    <>
      <Routes location={state?.background || location}>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
      </Routes>

      {
        state?.background && (
          <Routes>
            <Route path='/media' element={<Media />} />
          </Routes>
        )
      }
    </>
  )
}