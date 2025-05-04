import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { PetProvider } from './hooks/PetContext'

const App = () => {
  return (
    <BrowserRouter>
      <PetProvider>
        <AppRoutes />
      </PetProvider>
    </BrowserRouter>
  )
}

export default App
