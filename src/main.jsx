

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// CSS files path-ai `src/assets/css/` folder create panni adharkul vaika vendum
import './assets/css/animate.css'
import './assets/css/flex-slider.css'
import './assets/css/fontawesome.css'
import './assets/css/owl.css'
import './assets/css/templatemo-tale-seo-agency.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)