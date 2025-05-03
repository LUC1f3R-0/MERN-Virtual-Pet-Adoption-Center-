import mongoose from "mongoose";

console.log()

const databaseConnection = async () => {
    mongoose.connection.on('connected', () => { console.log('database connected successfully') })
    mongoose.connection.on('disconnected', () => { console.log('database disconnected') })
    mongoose.connection.on('error', (err) => { console.log('database connection error', err) })
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: 'pet-database' })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
});

export default databaseConnection