import mongoose from "mongoose";

const claimsSchema = new mongoose.Schema({

    claims: {

        type: String,
        required: true,

        claimDocument: [
            {
                type: String,
                required: true
            }
        ]





    }

})

const Claims = mongoose.model("Claims", claimsSchema);

export default Claims;


