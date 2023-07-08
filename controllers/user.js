import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const secreatKey = process.env.secreatKey;

import User from "../models/userSchema.js";

class UserController {

    static verify = async (req, res) => {

        try {

            const { uniqueId, passportNumber } = req.body

            const user = await User.findOne(req.user._id);
            console.log(user, "19");

            if (user) {
                if (passportNumber && uniqueId) {
                    if (passportNumber === user.passportNumber && uniqueId === user.uniqueId) {

                        const token = jwt.sign({
                            user: passportNumber, uniqueId
                        },
                            process.env.secreatKey,
                            { expiresIn: "3d" }
                        )


                        res.send({
                            status: "success",
                            msg: "user Verified successfully",
                            token: token
                        })


                    } else {
                        res.send({
                            status: "failed",
                            msg: "Wrong Credentials"
                        })
                    }
                }
            } else {
                res.send({
                    status: "failed",
                    msg: "All fields are required"
                })
            }

        } catch (error) {
            console.log(error, "19")
        }



    }


}

export default UserController;


