import {sechma, modles } from "mongoose";

const doctorSchema = new Schema(
  {
    specialization: {
        type: String,
        required: true,
        trim: true,
    },
    qualifications: {
        type: string,
        required: true,
        trim: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    timestamps: true,
  }
);  
