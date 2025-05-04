import React from 'react'
import PetMood from './PetMood'

const PetList = ({ pet }) => {

    return (
        <>
            <div className="pt-24 px-10">
                <div className="flex flex-wrap justify-start gap-6">

                    <div className="bg-white rounded-2xl shadow-md p-5 w-80 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center mb-4">

                            <PetMood mood={pet.mood} />
                            <h2 className="text-xl font-bold text-gray-800">{pet.name}</h2>
                            <p className="text-sm text-gray-500">{pet.species}</p>
                        </div>

                        <div className="space-y-2 text-sm text-gray-700">
                            <p><span className="font-medium">Age:</span> {pet.age} years</p>
                            <p><span className="font-medium">Personality:</span> {pet.personality}</p>
                            <p><span className="font-medium">Mood:</span> {pet.mood}</p>
                            <p>
                                <span className="font-medium">Adopted:</span>
                                <span className={`ml-1 inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 ${pet.adopted ? 'text-blue-500' : 'text-green-700'}`}>
                                    {(pet.adopted) ? "Adopted" : "Available"}
                                </span>
                            </p>
                            {pet.adopted && <p><span className="font-medium">Adoption Date:</span> 2025-04-21</p>}
                        </div>

                        <div className="flex mt-4">
                            <button className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition cursor-pointer">
                                Adopt
                            </button>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition cursor-pointer">
                                Edit
                            </button>
                            <button className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default PetList
