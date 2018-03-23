import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/YourDatabaseName");

module.exports.db = mongoose.connection;
