import BaseError from "./BaseError.js";

class IncorectRequest extends BaseError{
    constructor(message = "Some provided data is incorrect!"){
        super(message,400)
    }
}

export default IncorectRequest