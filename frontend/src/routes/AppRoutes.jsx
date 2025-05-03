import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PetCard from '../components/PetCard'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/show/:id' element={<PetCard />} />
            </Routes>
        </>
    )
}

export default AppRoutes
