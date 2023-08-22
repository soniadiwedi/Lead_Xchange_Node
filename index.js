const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/userRoutes");
// const connection = require("./connection");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/",(req,res)=>{
    res.send(`<h1>Hello</h1>`)
})
// Routing for our user registration.



const port=4500
app.listen(port,async()=>{
    try{
        // await connection
        // console.log("server is connected to db")
    }catch(err){
        console.log(err)
    }
    console.log(`server is running ${port}`)
})





