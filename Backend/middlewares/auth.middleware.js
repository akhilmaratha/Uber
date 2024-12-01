const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res,next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  const isBlackListed=await userModel.findOne({token: token});
  if(isBlackListed){
    return res.status(401).json({message:"Unauthorized"})
  }
  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user=user;
    return next();
  } catch (error) {
    return res.status(401).json({message:"Unauthorized"})
  }
};
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


  if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });



  if (isBlacklisted) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const captain = await captainModel.findById(decoded._id)
      req.captain = captain;

      return next()
  } catch (err) {
      console.log(err);

      res.status(401).json({ message: 'Unauthorized' });
  }
}