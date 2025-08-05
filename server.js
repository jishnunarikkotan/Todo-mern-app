const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv")
const cors = require("cors");
const connectDB = require("./config/db");
//env config
dotenv.config();

//DB connection 

connectDB();

//rest object
const app = express();

//middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user",require("./routes/userRoute"));

app.use("/api/v1/test",require("./routes/testRouter"));

// app.get("/test",(req,res)=>{

//     res.status(200).send("<h1>Welcome to TODO MERN APP </h1>");

// });

//port

const PORT = process.env.PORT || 8000;
//listen 

app.listen(PORT, () => {
    console.log(`Node server is runnning localhost ${process.env.DEV_MODE} mode on port no ${PORT}`);
    

})