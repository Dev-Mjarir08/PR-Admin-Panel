const userController ={
    dashboard(req ,res){
        return res.render('index')
    },
  login(req,res){
        return res.render('./pages/login')
  },
   register(req,res){
        return res.render('./pages/register')
  }
}
export default userController