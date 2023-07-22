import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const secreatKey = process.env.secreatKey;
const app = express()


import User from "../models/userSchema.js";
import Claims from '../models/claimsSchema.js'


class UserController {

    static verify = async (req, res) => {

        try {

            const { uniqueId, passportNumber } = req.body

            const user = await User.findOne({ _id: uniqueId }); //how to 
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

    static uploadsDocuments = async (req, res) => {
        try {
            console.log(req.files, "67")
            await Claims.findOneAndUpdate(req.user._id, { claims: req.body.claims })
            res.send({
                status: "failed",
                msg: "All fields are required"
            })

        } catch (error) {
            console.log(error)
            // res.send({
            //     status: "failed",
            //     msg: "All fields are required"
            // })
        }
    }



}

export default UserController;


