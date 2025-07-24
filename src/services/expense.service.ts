
import ExpenseModel, {IExpense} from "../models/expense.model"

interface PaginationOptions {
    page: number,
    limit: number
}

export const loadExpenses = async (expenses: Partial<IExpense>[]): Promise<IExpense[]> => {

    console.log('expenses ', expenses)    

    try {
        const insertedExpenses = await ExpenseModel.insertMany(expenses)
        return insertedExpenses as IExpense[]
    } catch (error) {
        throw error
    }
    


}

export const getExpenses = async (options: PaginationOptions): Promise<IExpense[]> => {
    try {

        const {page, limit} = options

        const expenses = await ExpenseModel.find({})
            .select('date concept category amount') // Select only the fields you need
            .skip((page - 1) * limit) // Skip the documents for pagination
            .limit(limit)   // Limit the number of documents returned
            .sort({date: -1})  // Sort by date in descending order 
        
        console.log('expenses ', expenses)
        
        return expenses as IExpense[]
    } catch (error) {
        throw error
    }
}

export const newExpense = async (expense: Partial<IExpense>): Promise<IExpense> => { 
    try {
        const insertedExpense = await ExpenseModel.create(expense);
        return insertedExpense as IExpense;
    } catch (error) {
        throw error;
    }
}

export const editExpense = async (id: string, expenseData: Partial<IExpense>): Promise<IExpense> => { 
    
    try {

        const {date, concept, category, amount } = expenseData

        const editedExpense = await ExpenseModel.findByIdAndUpdate(
            id, {
            $set: {
                date: date,
                concept: concept, 
                category: category,
                amount: amount    
            },
        },
        {new: true}
    )

        if (!editedExpense) {
            throw new Error('Error al actualizar el gasto')
        }
        return editedExpense as IExpense;
    } catch (error) {
        throw error;
    }
}

export const deleteExpense = async (id: string): Promise<IExpense> => {
    try {
        
        const deletedExpense = await ExpenseModel.findByIdAndDelete(id)

        if (!deletedExpense) {
            throw new Error('Error al borrar el gasto')
        }
        
        return deletedExpense as IExpense;

    } catch (error) {
        throw error;   
    }
} 