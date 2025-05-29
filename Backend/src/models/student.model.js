import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        regno:{
            type: String,
            required: true,
            unique: true
        },
        mobile:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        branch:{
            type: String,
            required: true,
        },
        year:{
            type: String,
            required: true,
        },
        hostel:{
            type: String,
            required: true,
        },

    },{
        timestamps: true
    }
)

export const Student = mongoose.model("Student", studentSchema) ;