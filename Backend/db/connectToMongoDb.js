import mongoose from "mongoose";
const connectToMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to MongoDb")
    }catch(error){
console.log("error connecting to Mongo DB",error.message)
    }


}
export default connectToMongoDb;