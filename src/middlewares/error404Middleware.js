import NotFound from "../errors/NotFound.js"

function error404Middleware(req,res,next){
    const error404 = new NotFound()
    next(error404)
}

export default error404Middleware