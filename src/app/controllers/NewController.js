

class NewController{
    //phuong thuc quan ly controller
//get/news
    index(req,res){
res.render('news')
    }

    //get /get/:slug
    
    show(req,res){
        res.send('news detail')
    }
    
}

module.exports=new NewController;

