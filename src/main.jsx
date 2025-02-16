import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reactImg from './assets/react.svg'
import './app/landing/profile.css'
import LandingPage from './app/landing/LandingPage'
const rootElement = document.getElementById("root");
const rootDom = createRoot(rootElement);


rootDom.render(
  <>
    <LandingPage />
    
  </>
)

