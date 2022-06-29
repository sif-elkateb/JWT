const jwt=require('jsonwebtoken');

const authenticateMiddleware=(req,res,next)=>{
    const {authorization}=req.headers;
    // console.log(authorization);
    if(!authorization||!authorization.startsWith('Bearer ')){
        throw new customError('the authentication token must be provided',401);
    }
    const token=authorization.split(' ')[1];
    try{
    const decoded = jwt.verify(token,process.env.SECRET);
    req.username=decoded.username;
    next();

    }
    catch(err){
        // console.log(err);
        throw new customError('invalid token',401);
    }

}

module.exports=authenticateMiddleware;