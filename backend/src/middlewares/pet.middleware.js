import Pet from "../models/Pet.model.js";

export const authMiddleware = async (request, response, next) => {
    const { id } = request.body
    try {
        if (!id) { return response.status(400).json({ success: false, message: "ID not provided" }); }
        const findID = await Pet.findById(id);
        if (!findID) { return response.status(404).json({ success: false, message: "Pet not found" }); }
        next();
    } catch (error) {
        return response.status(500).json({ success: false, message: "Server error" });
    }
};

export const authIDMiddleware = async (request, response, next) => {
    const { id } = request.params
    try {
        if (!id) { return response.status(400).json({ success: false, message: "ID not provided" }); }
        const findID = await Pet.findById(id);
        if (!findID) { return response.status(404).json({ success: false, message: "Pet not found" }); }
        next();
    } catch (error) {
        return response.status(500).json({ success: false, message: "Server error" });
    }
}

export const formMiddleware = (request, response, next) => {
    let { name, species, age, personality } = request.body;

    name = name?.trim();
    species = species?.trim();
    personality = personality?.trim();

    try {
        if (!name || !species || !personality || !age || isNaN(age)) { return response.status(400).json({ error: "Missing or invalid fields" }); }

        next();
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export const fetchMood = async (request, response, next) => {
    let { mood } = request.body;
    mood = mood.toLowerCase();

    const moods = {
        happy: "happy",
        calm: "calm",
        sad: "sad",
        angry: "angry",
        excited: "excited",
        anxious: "anxious",
        tired: "tired",
        bored: "bored",
        confused: "confused",
        surprised: "surprised",
        nervous: "nervous",
        frustrated: "frustrated",
        hopeful: "hopeful",
        lonely: "lonely",
        relaxed: "relaxed",
        scared: "scared",
        shy: "shy",
        proud: "proud",
        grateful: "grateful",
        inLove: "inLove"
    };

    try {
        if (!moods[mood]) { return response.status(400).json({ success: false, message: 'cant find' }) }
        next()
    } catch (error) {

        console.error(error.message);
        return response.status(400).json({ success: false, message: error.message });
    }

}