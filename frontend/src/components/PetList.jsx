import React from 'react';
import Moods from '../pages/moods/Moods';

const PetList = ({ pet, onAdopt, onShow, onDelete }) => {
    
    const moodColors = {
        Happy: 'text-green-600',
        Sad: 'text-red-600',
        Excited: 'text-blue-500',
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-sm mx-auto">
            <div className="flex flex-col items-center mb-2">
                <Moods mood={pet.mood} />
                <h2 className="text-2xl font-bold text-gray-800 mt-1">{pet.name}</h2>
            </div>


            <p className="text-sm text-gray-600 mb-1">Species: {pet.species}</p>

            <p className={`font-medium ${moodColors[pet.mood] || 'text-gray-500'} mb-1`}>
                Mood: {pet.mood}
            </p>

            <p className="text-sm text-gray-600 mb-3">
                Status: <span className={pet.adopted ? 'text-green-600' : 'text-yellow-600'}>
                    {pet.adopted ? 'Adopted' : 'Available'}
                </span>
            </p>

            <div className="flex gap-2">
                <button
                    onClick={() => onShow(pet)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                    Show
                </button>

                <button
                    onClick={() => onAdopt(pet.id)}
                    className={`px-3 py-1 rounded text-sm text-white ${pet.adopted
                        ? 'bg-gray-500 hover:bg-gray-600'
                        : 'bg-green-500 hover:bg-green-600'
                        }`}
                >
                    {pet.adopted ? 'Adopted' : 'Adopt'}
                </button>

                <button
                    onClick={() => onDelete(pet.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PetList;
