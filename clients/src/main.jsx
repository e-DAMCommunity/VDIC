import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import State from './Context/State';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>,
)