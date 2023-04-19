const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.String,
        required:true

    },
    email:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    phone:{
        type:mongoose.Schema.Types.Number,
        required:true
    }

})
module.exports=mongoose.Schema(userSchema);