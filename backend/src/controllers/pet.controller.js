import { response } from "express";
import moodFunction from "../functions/setMood.function.js";
import Pet from "../models/Pet.model.js";

export const fetchForm = async (request, response) => {
    try {
        const pets = await Pet.find();

        const petsWithMood = pets.map(pet => {
            const newMood = moodFunction(pet.createdAt);

            return { id: pet._id, name: pet.name, species: pet.species, personality: pet.personality, mood: newMood, adopted: pet.adopted, adoption_date: pet.adoption_date, }

        });


        response.status(200).json({ success: true, message: 'Fetched all pets successfully', data: petsWithMood });
    } catch (error) {
        response.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};


export const formSubmit = async (request, response) => {
    const { name, species, age, personality } = request.body;

    try {
        const newPet = await Pet.create({ name, species, age, personality });
        response.status(201).json({ message: 'Pet added successfully', pet: newPet });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Failed to add pet', error: error.message, });
    }
};

export const formDelete = async (request, response) => {
    try {
        const { id } = request.body;
        if (!id) { return response.status(400).json({ success: false, message: "ID not provided" }); }

        const deletedPet = await Pet.findByIdAndDelete(id);

        if (!deletedPet) { return response.status(404).json({ success: false, message: "No pet found with the given ID" }); }

        return response.status(200).json({ success: true, message: "Deleted successfully" });

    } catch (error) {
        console.error("Delete error:", error);
        return response.status(500).json({ success: false, message: "Server error" });
    }
};

export const singlePet = async (request, response) => {
    const { id } = request.params;

    try {
        const pet = await Pet.findById(id);

        if (!pet) { return response.status(404).json({ success: false, message: 'Pet not found' }); }

        const mood = moodFunction(pet.createdAt);

        const petWithMood = { id: pet._id, name: pet.name, species: pet.species, personality: pet.personality, mood, adopted: pet.adopted, adoption_date: pet.adoption_date, };


        response.status(200).json({ success: true, message: 'Fetched pet successfully', data: petWithMood, });
    } catch (error) {
        response.status(500).json({ success: false, message: 'Internal Server Error', error: error.message, });
    }
};

export const setAdopt = async (request, response) => {
    const { id } = request.params;

    try {
        const pet = await Pet.findById(id);
        if (!pet) { return response.status(404).json({ success: false, message: 'Pet not found' }) }
        pet.adopted = !pet.adopted;
        const updatedPet = await pet.save();
        return response.status(200).json({ success: true, data: updatedPet });
    } catch (error) {
        console.error('Error updating adoption status:', error);
        return response.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const editForm = async (request, response) => {
    const { id } = request.params;
    const { name, species } = request.body;

    try {
        const updatedPet = await Pet.findById(id);

        if (!updatedPet) { return response.status(404).json({ success: false, message: 'Pet not found' }) }

        updatedPet.name = name;
        updatedPet.species = species;

        await updatedPet.save();

        response.status(200).json({ success: true, message: 'Pet details updated successfully!', data: updatedPet });
    } catch (error) {
        response.status(500).json({ success: false, message: 'Failed to update pet', error });
    }
};

