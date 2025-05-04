import React, { useContext } from 'react'
import assets from "../assets/assets";
import PetCard from "./PetCard";
import axiosInstance from '../services/api';
import PetList from './PetList';
import { PetContext } from '../hooks/PetContext';
import { useNavigate } from 'react-router-dom';
import PetModal from './PetModal';
import Swal from 'sweetalert2';



const FilterBar = () => {
    const { pets } = useContext(PetContext)

    const [modal, setModal] = React.useState(false)
    const [filer, setFilter] = React.useState('')

    const filterFetch = async () => {
        try {
            const response = await axiosInstance.post('/pets/filter', { mood: filer });
            const { success, message, data } = response.data;
            console.log(data)
            if (success) {
                console.log("Filtered pets:", data);

            } else {
                console.warn("Filter failed:", message);
            }

        } catch (error) {
            const { success, message } = error.response.data
            Swal.fire({
                title: message,
                icon: "error",
                timer: 500
            });

        }
    };
    
    return (
        <>
            <div className="min-h-screen bg-gray-100">

                <div className="bg-[#1f2937] fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 text-white shadow-md">
                    <div className="flex items-center">
                        <img src={assets.company_logo} alt="Logo" className="h-8 mr-3" />
                        <span className="text-lg font-semibold">Virtual Pet Center</span>
                    </div>

                    <div className="flex flex-grow max-w-xl mx-4">
                        <input
                            type="text"
                            placeholder="Search With the Mood"
                            className="bg-gray-100 w-full p-2 rounded-l-md focus:outline-none text-black placeholder-gray-500"
                            onChange={(e) => setFilter(e.target.value)}
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md transition-colors cursor-pointer" onClick={filterFetch}>
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-end p-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={() => setModal(prev => !prev)}>
                            Add
                        </button>
                    </div>
                </div>

                {pets.map((pet) => (
                    <PetList key={pet.id} pet={pet} />
                ))}

            </div>
            {modal && <PetModal closeHandle={() => setModal(prev => !prev)} />}
        </>
    )
}

export default FilterBar
