import { userModel } from "../../../DB/models/user.js";
import bcrypt from "bcrypt";
//=============sign up====================
export const signup =async (req, res, next) => {
const {userName,email,password,phoneNumber} = req.body
const isuserexist=await userModel.findOne({email})
if (isuserexist) {
    return res.status(400).json({message:'invalid email or password'})
}
const phoneExist=await userModel.findOne({phoneNumber})
if (phoneExist) {
    return res.status(400).json({message:'invalid phone number or password'})
}
const hashedPass =bcrypt.hashSync(password,8 ) 

  
const userobj=new userModel({
    userName,
    email,
    password:hashedPass,
    phoneNumber
})
await userobj.save()

res.status(201).json({message:'user created successfully',userobj})

}