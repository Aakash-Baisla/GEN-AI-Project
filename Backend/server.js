require("dotenv").config()
const app = require("./src/app")
const {resume,selfDescription,jobDescription} = require("./src/services/temp")
const connectDB = require("./src/db")


connectDB()





app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running at PORT ${process.env.PORT || 3000}`)
})