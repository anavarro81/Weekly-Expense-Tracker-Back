import mongoose, { Schema, Document, model } from "mongoose";

export interface IExpense {

}

const ExpenseSchema = new Schema({

})

const ExpenseModel = model<IExpense>("Expense", ExpenseSchema)
export default ExpenseModel