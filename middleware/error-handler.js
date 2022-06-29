const {customError}=require('../errors');
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof customError){
        return res.status(err.statuscode).json({msg:err.message});
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Error occured please try again'})
};


module.exports=errorHandlerMiddleware;