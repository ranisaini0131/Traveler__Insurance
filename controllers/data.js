import User from "../models/userSchema.js";
import path from 'path'
import fs from 'fs'
import xlsx from 'xlsx'

class DataController {

    static importData = async (req, res) => {
        try {
            //Read the excel file from path
            const users = xlsx.readFile('Traveler__Insurance.xlsx');

            //Extract data in sheet
            let users_sheet = users.Sheets[users.SheetNames[0]];

            //Convert sheet into JSON
            let data = xlsx.utils.sheet_to_json(users_sheet);
            console.log(data, "18")


            await User.insertMany(data).then((result) => {
                if (result.length > 0) {
                    res.send({
                        status: "success",
                        "message": data
                    })
                    // console.log(result, "25")
                } else {
                    res.send({
                        status: "failed",
                        "message": "Data not found"
                    })
                }
            })

        } catch (error) {
            console.log(error)
            res.send({
                status: "failed",
                "message": error
            })
        }
    }
}

export default DataController