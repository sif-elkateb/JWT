const {loginUser,getDashboard}=require('../controllers/main');

const authenticateMiddleware=require('../middleware/auth');

const express=require('express');

const router=express.Router();




router.route('/login').post(loginUser);

router.route('/dashboard').get(authenticateMiddleware,getDashboard);

module.exports=router;