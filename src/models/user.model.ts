import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
     
    user : string,  
    email : string,  
    password : string,  
}


const UserSchema = new Schema({
     
    user : { type:   String, required: true } ,    
    email : { type:   String, required: true } ,    
    password : { type:   String, required: true } ,    

    
}, {
    timestamps: true,
});

const UserModel = model<IUser>("User", UserSchema)
export default UserModel