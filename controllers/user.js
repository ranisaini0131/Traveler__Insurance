import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const secreatKey = process.env.secreatKey;

import User from "../models/userSchema.js";


class UserController {

    static verify = async (req, res) => {
        try {
            const { email, passportNumber, uniqueId } = req.body;

            const user = await User.findOne({ email })
            console.log(user)





        } catch (error) {
            console.log(error)
        }
    }



}

export default UserController;
