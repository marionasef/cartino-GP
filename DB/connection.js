import mongoose from "mongoose";

 const ConnectionDB = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/cartino")
    .then(console.log("connection to DB sucsess"))
    .catch((err)=>console.log("connection to DB faild",err))
};
export default ConnectionDB