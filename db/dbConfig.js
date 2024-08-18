const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected successfully');
    } catch (error) {
        console.log('DB connection failed:', error.message);
        throw error; // Re-throw the error to handle it properly later
    }
};

module.exports = { db };