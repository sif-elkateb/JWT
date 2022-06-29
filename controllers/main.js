const loginUser=async(req,res)=>{
    res.status(200).send('welcome fuckin user');

}

const getDashboard=async(req,res)=>{
    res.status(200).send('welcome to the fuckin dashboard');
}


module.exports={loginUser,getDashboard}