import mongoose from "mongoose"
import BaseError from '../errors/BaseError.js'
import IncorectRequest from '../errors/IncorectRequest.js'
import ValidationError from "../errors/ValidationError.js"

function errorMiddleware(error,req,res,next){
    console.log('Received error:', error)
    if(error instanceof mongoose.Error.CastError){
        new IncorectRequest().sendResponse(res)
    }else if(error instanceof mongoose.Error.ValidationError){
        new ValidationError(error).sendResponse(res)
    }else{
        new BaseError().sendResponse(res)
    }
}

export default errorMiddleware