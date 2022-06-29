const jwt=require('jsonwebtoken');

const {unauthenticatedError}=require('../errors');

const authenticateMiddleware=(req,res,next)=>{
    const {authorization}=req.headers;
    // console.log(authorization);
    if(!authorization||!authorization.startsWith('Bearer ')){
        throw new unauthenticatedError('the authentication token must be provided');
    }
    const token=authorization.split(' ')[1];
    try{
    const decoded = jwt.verify(token,process.env.SECRET);
    req.username=decoded.username;
    next();

    }
    catch(err){
        // console.log(err);
        throw new unauthenticatedError('invalid token');
    }

}

module.exports=authenticateMiddleware;