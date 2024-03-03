import { Schema, model } from "mongoose";

const userschema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role : {
    type: String,
    enum:["admin", "user"],
    default: "user",
  },
  phoneNumber: {
    type:Number,
    required: true,
    unique: true,
  },
  isOnline: {
    type:Boolean ,
    default: false,
  },
token:String ,
forgetcode:String 
},{
timestamps:true
});
export const userModel = model("user",userschema) 
