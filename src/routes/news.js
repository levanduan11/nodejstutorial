
const express=require('express');
const router=express.Router();
//import new controller vao route
const newscontroller=require('../app/controllers/NewController');

//new controller.index
router.use('/:slug',newscontroller.show);
router.use('/',newscontroller.index);


module.exports=router;