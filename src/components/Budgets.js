import React, { useState, memo } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import expense from '../store/expense';



function Budgets({budget}) {
  const budgets = useSelector(state=>state.expense.budgets)
  const expenses = useSelector(state=>state.expense.expenses)
  let totalExpense = 0

  expenses.forEach(exp =>{
    if(exp.budget === budget.category){
      totalExpense += parseInt(exp.amount)
    }
    
    // console.log(totalExpense)

  })

  return (
    <div className='p-5 border-green-600 border-2 rounded-lg w-1/2'>
        <div className='flex justify-between flex-wrap'>
            <p className='text-xl font-semibold text-green-600 capitalize'>{budget.category}</p>
            <p className='font-semibold text-xl'>GHC {budget.amount} Budgeted</p>
        </div>

        <div className='flex justify-between flex-wrap'>
            <p>GHC {totalExpense} spent</p>
            <p>GHC {budget.amount - totalExpense} Remaining</p>
        </div>
    </div>
  )
}

export default memo(Budgets)