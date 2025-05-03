import React from 'react';
import { useParams } from 'react-router-dom';
import axios_Instance from '../services/api/axiosinstance';
import Header from './Header';
import Swal from 'sweetalert2';

const moodColors = {
    Happy: 'text-green-500',
    Sad: 'text-blue-500',
    Angry: 'text-red-500',
    Excited: 'text-purple-500',
    Calm: 'text-yellow-500',
};

const PetCard = () => {
    const [pet, setPet] = React.useState(null);
    const [load, setLoad] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);

    const [editName, setEditName] = React.useState('');
    const [editSpecies, setEditSpecies] = React.useState('');
    const [editMood, setEditMood] = React.useState('');
    const [editIsAdopted, setEditIsAdopted] = React.useState(false);

    const { id } = useParams();

    const fetchGetData = async () => {
        try {
            const response = await axios_Instance(`/pets/${id}`);
            const { success, data } = response.data;

            if (success) {
                setPet(data);
                setLoad(true);
            } else {
                console.log('Failed to load pet data:', response.data);
            }
        } catch (err) {
            console.log('Fetch error:', err);
        }
    };

    React.useEffect(() => {
        fetchGetData();
    }, [id]);

    const handleEdit = () => {
        setEditName(pet.name);
        setEditSpecies(pet.species);
        setEditMood(pet.mood);
        setEditIsAdopted(pet.isAdopted);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = async () => {

        const updatedData = {
            name: editName,
            species: editSpecies,
            mood: editMood,
            isAdopted: editIsAdopted,
        };

        try {
            const response = await axios_Instance.put(`/pets/${id}`, updatedData);
            const { success, message, data } = response.data
            setIsEditing(false);
            fetchGetData();
            Swal.fire({
                title: message,
                icon: 'success',
                draggable: success,
            });
        } catch (error) {
            console.error('Update failed:', error);
        }
    };



    return (
        <>
            <Header />
            {load && pet ? (
                <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl mx-auto mt-20">
                    {!isEditing ? (
                        <>
                            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">{pet.name}</h2>
                            <p className="text-xl text-gray-700 mb-3 text-center">
                                Species: <span className="font-semibold">{pet.species}</span>
                            </p>
                            <p className={`text-xl font-semibold ${moodColors[pet.mood] || 'text-gray-500'} mb-3 text-center`}>
                                Mood: {pet.mood}
                            </p>
                            <p className="text-xl text-center text-gray-700">
                                Status:{' '}
                                <span className={pet.isAdopted ? 'text-green-600 font-semibold' : 'text-yellow-600 font-semibold'}>
                                    {pet.isAdopted ? 'Adopted' : 'Available'}
                                </span>
                            </p>
                            <div className="flex justify-center mt-6">
                                <button onClick={handleEdit} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                                    Edit
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                className="block w-full mb-4 p-2 border rounded text-xl"
                                placeholder="Pet Name"
                            />
                            <input
                                type="text"
                                value={editSpecies}
                                onChange={(e) => setEditSpecies(e.target.value)}
                                className="block w-full mb-4 p-2 border rounded text-xl"
                                placeholder="Species"
                            />
                            <select
                                value={editMood}
                                disabled
                                className="block w-full mb-4 p-2 border rounded text-xl bg-gray-100 text-gray-600 cursor-not-allowed"
                            >
                                <option value="">Select Mood</option>
                                {Object.keys(moodColors).map((mood) => (
                                    <option key={mood} value={mood}>{mood}</option>
                                ))}
                            </select>


                            <div className="flex justify-center gap-4 mt-6">
                                <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                                    Save
                                </button>
                                <button onClick={handleCancel} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-gray-600">
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </>
    );
};

export default PetCard;
