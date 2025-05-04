// PetContext.jsx
import React, { createContext, useState, useEffect } from 'react'
import axiosInstance from '../services/api'

export const PetContext = createContext()

export const PetProvider = ({ children }) => {
    const [pets, setPets] = useState([])

    const fetchPets = () => {
        axiosInstance('/pets/fetch')
            .then(response => {
                const { success, data } = response.data
                if (success) {
                    setPets(data)
                }
            })
            .catch(error => {
                console.error('Error fetching pets:', error)
            })
    }

    // Initial fetch
    useEffect(() => {
        fetchPets()
    }, [])

    return (
        <PetContext.Provider value={{ pets, fetchPets }}>
            {children}
        </PetContext.Provider>
    )
}
