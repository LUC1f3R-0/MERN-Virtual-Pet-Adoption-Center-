import React from 'react';
import Header from '../components/Header';
import axios_Instance from '../services/api/axiosinstance';
import PetList from '../components/PetList';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Home = () => {
    const { width, height } = useWindowSize();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [postSuccess, setPostSuccess] = React.useState(false);
    const [pets, setPets] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [confetti, setConfetti] = React.useState(false);

    const handleAdopt = async (id) => {
        try {
            const response = await axios_Instance.patch(`/pets/${id}`, { isAdopted: true });
            setPostSuccess(true);
            setConfetti(true);
            if (confetti) {
                setTimeout(() => {
                    setConfetti(false);
                }, 5000);
            }
        } catch (error) {
            console.error('Adoption failed', error);
        }
    };

    const handleShow = (pet) => {
        navigate(`/show/${pet.id}`);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios_Instance.delete(`/pets/${id}`);
            setPostSuccess(true);
        } catch (error) {
            console.error('Delete failed', error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        await fetchPostData(formJson);
        form.reset();
    };

    const fetchPostData = async (data) => {
        try {
            const response = await axios_Instance.post('/pets/form', data);
            const { success, message } = response.data;

            setPostSuccess(true);

            Swal.fire({
                title: message,
                icon: 'success',
                draggable: success,
            });
        } catch (error) {
            console.error('Post failed', error);
        }
    };

    const fetchGetData = async () => {
        try {
            const response = await axios_Instance('/pets/fetch');
            const { success, message, data } = response.data;
            if (success && data) {
                setPets(data);
                setLoading(true);
            }
        } catch (error) {
            console.error('Fetch failed', error);
        }
    };

    React.useEffect(() => {
        fetchGetData();
    }, []);

    React.useEffect(() => {
        if (postSuccess) {
            fetchGetData();
            setIsModalOpen(false);
            setPostSuccess(false);
        }
    }, [postSuccess]);

    return (
        <>
            <div className="p-4">
                <Header />

                <div className="mb-4 text-right">
                    <button onClick={openModal} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                        Add New
                    </button>
                </div>
                {confetti && (
                    <Confetti
                        width={width}
                        height={height}
                    />
                )}
                {!loading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {pets.length === 0 ? (
                            <div className="col-span-full text-center text-gray-500 text-lg">
                                No data available
                            </div>
                        ) : (
                            pets.map((pet) => (
                                <PetList
                                    key={pet.id}
                                    pet={pet}
                                    onAdopt={handleAdopt}
                                    onShow={handleShow}
                                    onDelete={handleDelete}
                                />
                            ))
                        )}
                    </div>
                )}
            </div>

            {isModalOpen && (
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
                                    onClick={closeModal}
                                    className="bg-gray-300 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm"
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
            )}
        </>
    );
};

export default Home;
