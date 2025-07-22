import mongoose, { Schema, Document, model } from "mongoose";

export interface IExpense extends Document {
     
    date : Date,  
    concept : string,  
    category : string,  
    amount : number     
}


const ExpenseSchema = new Schema({
     
    date : { type:   Date, required: true } ,    
    concept : { type:   String, required: true } ,    
    category : { type:   String, required: true } ,    
    amount : { type:   Number, required: true } ,   
    
})

const ExpenseModel = model<IExpense>("Expense", ExpenseSchema)
export default ExpenseModel
