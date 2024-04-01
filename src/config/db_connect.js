import mongoose from "mongoose"

async function connectOnDB(){
    mongoose.connect(process.env.MONGODB_ATLAS)
    return mongoose.connection
}

export default connectOnDB