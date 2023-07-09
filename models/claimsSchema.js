import mongoose from "mongoose";

const claimsSchema = new mongoose.Schema({

    claims: {
        "type": "object",
        "properties": {
            "claimNumber": {
                "type": "string"
            },
            "policyNumber": {
                "type": "string"
            },
            "insuredPerson": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "dateOfBirth": {
                        "type": "string",
                        "format": "date"
                    },
                    "gender": {
                        "type": "string",
                        "enum": ["male", "female", "other"]
                    }
                },
                "required": ["name", "dateOfBirth"]
            },
            "incidentDate": {
                "type": "string",
                "format": "date"
            },
            "incidentDescription": {
                "type": "string"
            },
            "claimAmount": {
                "type": "number",
                "minimum": 0
            },
            "documents": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
        },
        "required": ["claimNumber", "policyNumber", "insuredPerson", "incidentDate", "incidentDescription", "claimAmount"]
    }

}
)


const Claims = mongoose.model("Claims", claimsSchema);

export default Claims;


// MedicalClaims: {

//     sickness: {

//     },
//     injury: {

//     },
//     hospitalisation: {

//     },
//     accidentalDeath: {

//     }

// },

// TravelInconvenience: {

//     MissingOfLuggage: {

//     },
//     MissingPassport: {

//     },
//     delayInPlaneArrival: {

//     },
//     tripCurtailment: {

//     },
//     loseOfMoney: {

//     }
// }