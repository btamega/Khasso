require('dotenv').config();
const mongo =require('mongoose');

const connectDB = async()=>{
    try{
        await mongo.connect(process.env.MONGO_URI,{
            useNewUrlParser: true
        })
        console.log("MongoDB connection success");
    }catch(error){
        console.error("MongoDB connection fail");
        process.exit(1);
    }
};
module.exports = connectDB;