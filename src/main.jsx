import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Header } from './assets/pages/header.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
  </StrictMode>,
)
