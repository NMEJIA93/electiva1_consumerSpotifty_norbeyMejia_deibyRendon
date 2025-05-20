import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpotifyApp } from './SpotifyApp'


import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <SpotifyApp />
      </BrowserRouter>
  </StrictMode>,
)
