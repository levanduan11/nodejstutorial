
const express=require('express');
const router=express.Router();
//import new controller vao route

const sitecontroller=require('../app/controllers/siteController');

//new controller.index
router.use('/search',sitecontroller.search)
router.use('/',sitecontroller.home)



module.exports=router;