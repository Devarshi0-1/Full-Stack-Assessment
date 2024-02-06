import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const server =
    import.meta.env.VITE_ENV_MODE === 'Development'
        ? import.meta.env.VITE_ENV_DEV_SERVER_BASE_URL
        : import.meta.env.VITE_ENV_DEPLOYMENT_SERVER_BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
