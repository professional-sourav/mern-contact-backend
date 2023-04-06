import mongoose from "mongoose"

export const connectDB = async () => {

    const connect = await mongoose.connect(process.env.DB_CONNECTION)

    console.log("Database is connected:", connect.connection.host);    
}