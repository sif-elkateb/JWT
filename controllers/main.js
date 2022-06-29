

const customError=require('../errors/customError');
const loginUser=async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        throw new customError('both username and password must be provided',400);
        }
    const token=jwt.sign({username},process.env.SECRET,{expiresIn:'30d'});
    res.status(200).json({token})
    


}

const getDashboard=async(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100);
    res.status(200).json({msg:`hello ${req.username} you randomNumber is ${randomNumber}`});
}


module.exports={loginUser,getDashboard}