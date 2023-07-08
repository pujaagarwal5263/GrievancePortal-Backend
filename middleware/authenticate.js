const jwt=require('jsonwebtoken');
const User=require('../model/userSchema');

const authenticate=async(req,res,next)=>{
    try{
      console.log(req.cookies.jwtoken)
      const token= req.cookies.jwtoken;

      if(!token){
        throw "Token Not Provided"
      }
      const verifyToken= jwt.verify(token,"thisisoursecretkey");

      const rootUser= await User.findOne({_id:verifyToken._id, "tokens.token":token});

      if(!rootUser){
          throw new Error('User Not Found');
      }

      req.token=token;
      req.rootUser=rootUser;
      req.userID=rootUser._id;

      next();
    }catch(err){
        res.status(400).send('Unauthorized: No token provided');
        console.log(err);
    }
} 
module.exports=authenticate;
