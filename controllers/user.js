import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import express from 'express'
import multer from 'multer'
dotenv.config()
const secreatKey = process.env.secreatKey;
const app = express()


import User from "../models/userSchema.js";


class UserController {

    static verify = async (req, res) => {

        try {

            const { uniqueId, passportNumber } = req.body

            const user = await User.findOne({ uniqueId });
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


