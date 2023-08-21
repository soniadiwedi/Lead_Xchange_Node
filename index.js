const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/userRoutes");
const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/",(req,res)=>{
    res.send(`<h1>Hello</h1>`)
})
// Routing for our user registration.




app.listen(4500,()=>{
    console.log("server is running")
})




module.exports = app;
