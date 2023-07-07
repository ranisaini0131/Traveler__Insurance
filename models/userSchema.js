import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    passportNumber: {
        type: String
    },
    MobileNumber: {
        type: Number
    },
    StartDate: {
        type: Number
    },
    EndDate: {
        type: Number
    },
    DOB: {
        type: String
    },
    uniqueId: {
        type: String
    }


})


const User = mongoose.model("User", userSchema);

export default User;