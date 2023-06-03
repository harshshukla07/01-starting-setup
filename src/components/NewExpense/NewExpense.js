import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>
{
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData,
            // this is done to copy the expense data from the ExpenseForm
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
            {/* onSaveExpenseData name has been given anyway it has no inbuilt significance, we can name our prop anything we wish to, so when the form is submitted the function("saveExpenseDataHandler" with parameter 'enteredExpenseData') inside it will be triggered(we are passing data from child to parent i.e. bottom-up) */}
        </div>
    );
};

export default NewExpense;