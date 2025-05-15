import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpotifyApp } from './SpotifyApp'
import { AuthProvider } from './auth/hooks/authContext'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <SpotifyApp />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
