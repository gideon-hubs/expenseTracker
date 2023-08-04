import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budgets: [],
    expenses : []
}

export const expenseSlice = createSlice({
    name:'expense',
    initialState,

    reducers:{
        addBudget:(state,action)=>{
            state.budgets.push(action.payload)
        },
        addExpense:(state,action)=>{
            state.expenses.push(action.payload)
        },
        deleteExpense:(state,action)=>{
            let deleteExpense = state.expenses.filter(expense=>expense.id !== action.payload)
            state.expenses = deleteExpense
        },
    }
})

export const {addBudget,addExpense,deleteExpense} = expenseSlice.actions

export default expenseSlice.reducer