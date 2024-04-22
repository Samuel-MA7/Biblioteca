import IncorectRequest from "./IncorectRequest.js";

class ValidationError extends IncorectRequest{
    constructor(error){
        const errorMessage = Object.values(error.errors).map(error=>error.message).join('; ')
        super(`Found errors: ${errorMessage}`)
    }
}

export default ValidationError