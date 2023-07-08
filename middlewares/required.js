import UserController from '../controllers/user.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userSchema.js';
dotenv.config()
const secreatKey = process.env.secreatKey;

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





}

export default middlewares