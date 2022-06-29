const {loginUser,getDashboard}=require('../controllers/main');

const express=require('express');

const router=express.Router();




router.route('/login').post(loginUser);

router.route('/dashboard').get(getDashboard);

module.exports=router;