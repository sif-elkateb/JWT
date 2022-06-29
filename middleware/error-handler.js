const customError=require('../errors/customError');
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof customError){
        res.status(err.statuscode).json({msg:err.message});
    }
    res.status(500).json({msg:'Error occured please try again'})
};


module.exports=errorHandlerMiddleware;