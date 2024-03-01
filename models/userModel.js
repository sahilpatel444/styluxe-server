import mongoose from "mongoose";

const userSChema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        require:true,

    },
    address:{
        type:String,
        require:true,
    },
    
    answer:{
        type:String,
        required: true,
    },
    role:{
        type:Number,
        default:0,
    },
},{timestamps:true}

);

export default mongoose.model("users", userSChema);