import React from 'react'
import { useDispatch } from 'react-redux';
import { addBudget,addExpense,deleteExpense } from '../store/expense';

function Expenses({expense}) {
  const dispatch = useDispatch()
  return (
    <tr className='text-center font-semibold text-slate-600'>
        <td className='py-4'>{expense.expName}</td>
        <td>{expense.amount}</td>
        <td>12:25</td>
        <td><button className='bg-green-400 px-2 rounded-full'>{expense.budget}</button></td>
        <td onClick={()=>dispatch(deleteExpense(expense.id))}>Delete</td>
    </tr>
  )
}

export default Expenses