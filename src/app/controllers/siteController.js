

class SiteController{
    //phuong thuc quan ly controller
//get/news
    home(req,res){
res.render('home')
    }

    //get /get/:slug
    
    search(req,res){
     res.render('search')
    }
    
}

module.exports=new SiteController;

