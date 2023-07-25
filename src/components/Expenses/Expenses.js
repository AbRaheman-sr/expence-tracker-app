import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../Card/Card';


const Expenses = (props) => {
    return (
        <Card className='expenses'>
             <ExpenseItem
    date={props.expense[0].date}
    tittle = {props.expense[0].tittle}
    amount = {props.expense[0].amount}/>

    <ExpenseItem date={props.expense[1].date}
    tittle = {props.expense[1].tittle}
    amount = {props.expense[1].amount}/>

   <ExpenseItem date={props.expense[2].date}
    tittle = {props.expense[2].tittle}
    amount = {props.expense[2].amount}/>
    
   </Card>
    )
     
}

export default Expenses;
