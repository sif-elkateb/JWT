const errorHandlerMiddleware=(err,req,res,next)=>{
    res.status(500).json({msg:'Error occured please try again'})
};


module.exports=errorHandlerMiddleware;