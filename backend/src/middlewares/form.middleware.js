const formMiddleware = (request, response, next) => {
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

export default formMiddleware;
