import { userModel } from "../../../DB/models/user.js";
import bcrypt from "bcrypt";
//=============sign up====================
export const signup = async (req, res, next) => {
  const { userName, email, password, phoneNumber } = req.body;
  //check user by email
  
  const isuserexist = await userModel.findOne({ email });
  if (isuserexist) {
    return res.status(400).json({ message: "invalid email or password" });
  }
  //check user by phone
  const phoneExist = await userModel.findOne({ phoneNumber });
  if (phoneExist) {
    return res
      .status(400)
      .json({ message: "invalid phone number or password" });
  }
  //hash password
  const hashedPass = bcrypt.hashSync(password, 8);
//creat instance
  const userobj = new userModel({
    userName,
    email,
    password: hashedPass,
    phoneNumber,
  });
  // save at database
  await userobj.save();

  res.status(201).json({ message: "user created successfully", userobj });
};
// ==================login=============
export const login=async (req,res,next)=>{

    const{email,phoneNumber,password }=req.body
    //check email is exist 
    const checkemail =await userModel.findOne({email})
    if (!checkemail) {
        return res.status(400).json({ message: "invalid email or password" });
    }
    const checkphone = await userModel.findOne({ phoneNumber });
    if (!checkphone) {
      return res
        .status(400)
        .json({ message: "invalid phone number or password" });
    }
    //compare hashed pass
    const passmatch =bcrypt.compareSync(password,checkemail.password)
    if (!passmatch) {
        return res
        .status(400)
        .json({ message: "invalid phone number or password" });
    }
    const updateuser= await userModel.findOneAndUpdate({email},{isOnline:true})

    res.status(201).json({ message: "user login successfully", updateuser });

}
