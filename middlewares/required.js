import UserController from '../controllers/user.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userSchema.js';
dotenv.config()
const secreatKey = process.env.secreatKey;

import express from 'express'
const app = express()
import multer from 'multer'


class middlewares {

    static auth = async (req, res, next) => {
        const { authorization } = req.headers;
        console.log(req.headers, "header")
        let token;
        if (authorization && authorization.startsWith("Bearer")) {
            try {
                //extract token
                token = authorization?.split(" ")[1]
                // console.log(token, "18")

                // verify token
                const { user } = jwt.verify(token, process.env.secreatKey)
                // console.log(user, "22")

                //get user from token
                req.user = await user
                // console.log(req.user, "26")
                next()

            } catch (error) {
                console.log(error)
                res.send({
                    status: "failed",
                    msg: "Unauthorized user"
                })
            }
        }
        if (!token) {
            res.send({
                status: "failed",
                msg: "no token"
            })
        }
    }

    // static upload = async (req, res) => {

    //     //configuration for how data should be stored where and what is the file extension name
    //     const storageConfig = multer.diskStorage({
    //         destination: function (req, file, cb) {
    //             cb(null, './uploads')
    //         },
    //         filename: function (req, file, cb) {
    //             cb(null, Date.now() + "-" + file.originalname);
    //         },
    //     });

    //     // const upload = multer({ storage: storageConfig });

    //     // try {
    //     //     app.post('/uploads', upload.array(claimDocument, 4), function (req, res, next) {
    //     //         for (var i = 0; i < req.files.length; i++) {
    //     //             response += req.files[i].path
    //     //         }
    //     //         return res.send({
    //     //             status: "success",
    //     //             message: response
    //     //         })
    //     //     });

    //     // } catch (error) {
    //     //     console.log(error)
    //     //     return res.send({
    //     //         status: "failed",
    //     //         message: "Files not uploaded"
    //     //     })
    //     // }

    // }



}

export default middlewares