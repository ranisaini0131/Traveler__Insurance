// import User from "../models/userSchema.js";
import jwt from 'jsonwebtoken'

class middlewares {

    static auth = async (req, res, next) => {
        const { authorization } = req.headers;
        let token;
        if (authorization && authorization.startsWith("Bearer")) {
            try {
                //extract token
                token = authorization?.split(" ")[1]
                console.log(token)

                // verify token
                const { } = jwt.verify(token, process.env.secreatKey)

                //get user from token
                req.user = await user
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