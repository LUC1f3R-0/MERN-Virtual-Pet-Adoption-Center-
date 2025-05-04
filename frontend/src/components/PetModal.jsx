import React, { useContext } from 'react'
import axiosInstance from '../services/api';
import Swal from 'sweetalert2';
import { PetContext } from '../hooks/PetContext';


const PetModal = (prop) => {
    const { fetchPets } = useContext(PetContext)
    
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        postData(formJson);
        form.reset()
    }

    const postData = async (e) => {
        const response = await axiosInstance.post('/pets/form', e)
        const { success, message, data } = response.data
        try {
            
            Swal.fire({
                title: message,
                icon: "success",
                draggable: success
            })
            fetchPets()
            prop.closeHandle()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="fixed inset-0 z-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Add New Pet</h3>

                    <form className="space-y-4" onSubmit={handleForm}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
                                placeholder="Enter pet name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species</label>
                            <select
                                id="species"
                                name="species"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
                                required
                            >
                                <option value="">Select species</option>
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Rabbit</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
                                placeholder="Enter pet age"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="personality" className="block text-sm font-medium text-gray-700">Personality</label>
                            <input
                                type="text"
                                id="personality"
                                name="personality"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
                                placeholder="Playful, Calm, Energetic..."
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={prop.closeHandle}
                                className="bg-gray-300 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PetModal
