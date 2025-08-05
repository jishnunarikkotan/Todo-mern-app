const mongoose = require("mongoose");


 const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongodb connected  ${mongoose.connection.host}`);
        
    } catch (error) {

        console.log(`mongodb error ${error}`);
        
        
    }
 };

 module.exports =connectDB;