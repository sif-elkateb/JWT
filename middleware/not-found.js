const notFoundMiddleware=(req,res,next)=>{
    res.status(404).send("the route you are looking for is not available")
}

module.exports=notFoundMiddleware;