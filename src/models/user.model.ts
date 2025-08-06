import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
     
    user : string,  
    email : string,  
    password : string,
    weeklylimit: number
    categories: string[]  
}


const UserSchema = new Schema({
     
    user : { type:   String, required: true } ,    
    email : { type:   String, required: true } ,    
    password : { type:   String, required: true } ,    
    weeklylimit: {
        type: Number,
        required: true,
        default: 50,
        validate: {
            validator: function(value: number) {
                return value > 0;
            },
            message: 'El límite semanal debe ser mayor que cero.'
        }
    },
    categories: [
        {
            name: {type: String}
        }
    ]
    
}, {
    timestamps: true,
});

const UserModel = model<IUser>("User", UserSchema)
export default UserModel