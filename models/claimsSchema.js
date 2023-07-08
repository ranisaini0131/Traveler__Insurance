import mongoose from "mongoose";

const claimsSchema = new mongoose.Schema({

    MedicalClaims: {

        sickness: {

        },
        injury: {

        },
        hospitalisation: {

        },
        accidentalDeath: {

        }

    },

    TravelInconvenience: {

        MissingOfLuggage: {

        },
        MissingPassport: {

        },
        delayInPlaneArrival: {

        },
        tripCurtailment: {

        },
        loseOfMoney: {

        }
    }
}
)


const Claims = mongoose.model("Claims", claimsSchema);

export default Claims;