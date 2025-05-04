import React from 'react'

const PetCard = () => {
    return (
        <>
            <div className="pt-24 px-10">
                <div className="flex flex-wrap justify-start gap-6">

                    <div className="bg-white rounded-2xl shadow-md p-5 w-80 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center mb-4">
                            <img
                                src="https://place-puppy.com/images/7/b/c/f/d/7bcfd4dcc1da3830c2797c5d437b978a36e81924-01.jpg"
                                alt="Pet"
                                className="w-32 h-32 rounded-full object-cover mb-2"
                            />
                            <h2 className="text-xl font-bold text-gray-800">Max</h2>
                            <p className="text-sm text-gray-500">Dog</p>
                        </div>

                        <div className="space-y-2 text-sm text-gray-700">
                            <p><span className="font-medium">Age:</span> 3 years</p>
                            <p><span className="font-medium">Personality:</span> Friendly</p>
                            <p><span className="font-medium">Mood:</span> Happy 🐶</p>
                            <p>
                                <span className="font-medium">Adopted:</span>
                                <span className="ml-1 inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                    Yes
                                </span>
                            </p>
                            <p><span className="font-medium">Adoption Date:</span> 2025-04-21</p>
                        </div>

                        <div className="flex mt-4">
                            <button className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-blue-600 transition cursor-pointer">
                                Adopt
                            </button>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition cursor-pointer">
                                Edit
                            </button>
                            <button className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-blue-600 transition cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PetCard
