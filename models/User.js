import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{ type : String, required:true},
    name: {type : String, required:true},
    email: {type : String, required:true, unique:true}, 
    imageUrl: {type : String, required:true},
    cartItems: {type : Object, default: {} }
}, {minimize:false})


// to create and store multiple user
//if the user is existed, use the existing one, else create and store a new user using userSchema
const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User