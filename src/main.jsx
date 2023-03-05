import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CategorySelectedProvider } from './contexts/CategorySelectedContext'
import { UserDataProvider } from './contexts/UserDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDataProvider>
      <CategorySelectedProvider>
        <App />
      </CategorySelectedProvider>
    </UserDataProvider>
  </React.StrictMode>,
)
