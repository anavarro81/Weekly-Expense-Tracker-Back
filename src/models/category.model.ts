import mongoose, { Schema, Document, model } from "mongoose"; 

export interface ICategory extends Document {
    name: string
}

const CategorySchema = new Schema({
    name: {type: String, required: true}
},
{
    timestamps: true
});

const CategoryModel = model<ICategory>("Category", CategorySchema)
export default CategoryModel;




