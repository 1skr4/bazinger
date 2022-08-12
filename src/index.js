import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from './utils/styles'

ReactDOM.render(
  <>
    <Global />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root')
)