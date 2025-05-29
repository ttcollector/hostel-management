import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect((process.env.MONGODB_URL))
        console.log(`connection of db establish at : ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`connection of db failed due to ${error}`)
        process.exit(1);
    }
}

export default connectDB;