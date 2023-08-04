import React, { useState } from 'react'
import Budgets from './Budgets'
import { v4 as uuidv4 } from 'uuid';
import Expenses from './Expenses';
import { useDispatch,useSelector } from 'react-redux';
import { addBudget,addExpense } from '../store/expense';


function Main() {
    const dispatch = useDispatch()
    const budgets = useSelector(state=>state.expense.budgets)
    const expenses = useSelector(state=>state.expense.expenses) 

    const [budget,setBudget] = useState({})
    const [expense,setExpense] = useState({})
    const totalExpense = 0


    const handleBudgetSubmit = (e)=>{
        e.preventDefault()
        dispatch(addBudget({id:uuidv4(),...budget}))
        console.log({id:uuidv4(),...budget})
    }

    const handleExpense=(e)=>{
        e.preventDefault()
        dispatch(addExpense({id:uuidv4(),...expense}))
        console.log({id:uuidv4(),...expense})
        // setExpense({})
    }


  return (
    <div className='container mx-auto'>
        <h3 className='font-bold text-5xl text-blue-600 my-4'>Welcome to Budjeti</h3>

        <div className='flex flex-wrap gap-10 my-10 items-start'>
            <div className='p-10 md:w-[50%] bg-white shadow-lg rounded-md border-orange-400 border-2'>
                <p className='font-semibold text-2xl'>Create Budget</p>
                
                <form onSubmit={handleBudgetSubmit}>
                    <div className='my-5'>
                        <label className='font-bold'>Budget Name</label>
                        <input type="text" onChange={(e)=>setBudget({...budget,category: e.target.value})} placeholder='Category' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                    </div>
                    <div>
                        <label className='font-bold'>Amount</label>
                        <input type="number" onChange={(e)=>setBudget({...budget, amount: e.target.value})} placeholder='Amount' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                    </div>
                    <button type='submit' className='my-5 bg-orange-400 p-3 text-white font-semibold rounded-md'>Create Budget</button>
                    {/* name , id , amount */}
                </form>
            </div>

            <div className='p-10 md:w-[45%] bg-white shadow-lg rounded-lg border-blue-400 border-2'>
            <p className='font-semibold text-2xl'>Add Expense</p>
            <form onSubmit={handleExpense}>
                    <div className='my-5'>
                        <label className='font-bold'>Expense Name</label>
                        <input type="text" onChange={(e)=>setExpense({...expense,expName:e.target.value})} placeholder='Expense Name' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                    </div>
                    <div className='flex  md:gap-3 gap-5'>
                        <div className='md:w-1/2'>
                            <label className='font-bold'>Amount</label>
                            <input type="number" onChange={(e)=>setExpense({...expense,amount:e.target.value})} placeholder='Amount' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                        </div>

                        <div className='md:w-1/2'>
                            <label className='font-bold'>Budget Category</label><br />
                            <select name=""  onChange={(e)=>setExpense({...expense,budget:e.target.value})} id="" className='p-3 w-full border-slate-700 border-2 rounded-lg'>
                                <option value='' >Select category</option>
                                {
                                    budgets.map((b,index)=>(
                                        <option value={b.category} key={b.id}>{b.category}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <button type='submit' className='my-5 bg-blue-400 p-3 text-white font-semibold rounded-md'>Add Expense</button>
                    {/* name, budger_id,amount, id */}
                </form>
            </div>
        </div>

    {/* LIST OF BUSGETS */}
        <div>
            <h3>Exisiting Budget</h3>
            <div className="flex gap-2 overflow-auto">
                {
                    budgets.map(budget =>(
                        <Budgets key={budget.id} budget={budget}/>
                    ))
                }

            </div>
        </div>

        {/* LIST OF EXPENSES */}
        <div className='my-5'>
            <h3 className='font-bold text-3xl my-2'>Expenses List</h3>

            <div className=''>
                <table className="w-3/6">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Budget</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        expenses.length > 0 ?
                    
                        (
                            expenses.map(expense =>(
                                <Expenses key={expense.id} expense={expense}/>
                            ))
                        ) : 
                        (
                            <h3 className='font-bold text-3xl text-center text-slate-500 p-10'>No Expenses</h3>

                        )

                        
                    }
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default Main