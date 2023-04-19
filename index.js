const user=require("./schema/userSchema")
const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const {json,urlencoded}=express;
const app=express();
app.use(json());
mongoose.connect("mongodb+srv://pandiriteja:teja92466@cluster0.ukhf9uq.mongodb.net/teja");
app.use(urlencoded({extended:false}));
app.post("/createUser",async(req,res)=>{
    const id=uuid().split("-").join();
    const data={
        ...req.body
    }
    const checkEmail=await user.find({email:req.body.email})
    if(checkEmail.length){
        throw new Error("email already registered")
    }
    const checkPhone=await user.find({phone:req.body.phone})
    if(checkPhone.length){
        throw new Error("phone already registered")
    }
    const checkName=await user.find({name:req.body.name})
    if(checkName.length){
        throw new Error("name already registered");
    }
})


app.listen(5000,()=>console.log("server is running at port 5000"));