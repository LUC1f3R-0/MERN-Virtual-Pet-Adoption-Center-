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